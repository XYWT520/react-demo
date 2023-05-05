import axios from 'axios';
import { inject } from './injectIntercepter';
const service = axios.create({
  // baseURL: 'http://localhost:9998', // api的base_url
  // baseURL: '/api', // api的base_url
  timeout: 20000, // 请求超时时间
});

inject(service);

export default service;
