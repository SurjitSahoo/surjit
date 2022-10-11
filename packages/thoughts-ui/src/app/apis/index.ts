import axios from 'axios';

import { IThought } from '@surjit/types';

const http = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

http.interceptors.response.use((axiosResp) => axiosResp.data);

export default {
  getPost: (postId: string) => http.get(`posts/${postId}`) as Promise<IThought>,
};
