import { store } from '../../redux/store/store';
import { refreshAccessToken } from '../../redux/auth/thunks/refreshAccessToken';
import axiosPost from '../axiosPost';
import { getAccessToken } from './getAccessToken';


export const errorHandler = async (error: any) => {
  if (error.response?.status === 401) {
    try {
      await store.dispatch(refreshAccessToken());
      const newRequest = { ...error.config };
      newRequest.headers.Authorization = `Bearer ${getAccessToken()}`;
      return axiosPost(newRequest);
    } catch (refreshError) {
      console.log('Error while refreshing access token: ', refreshError);
    }
  }
  return Promise.reject(error);
};