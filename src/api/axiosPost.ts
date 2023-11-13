import axios from 'axios';
import {
  getAccessToken,
} from './helpers/getAccessToken';
import { baseURL } from './helpers/baseURL';

const axiosPost = axios.create({
  baseURL: baseURL,
  method: 'post',
  headers: {
    Authorization: getAccessToken(),
  },
});

export default axiosPost;
