import { store } from '../../redux/store/store';

export const getAccessToken = () => {
  const token = (store?.getState().userAuth as any)?.accessToken;
  return token;
};