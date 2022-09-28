import axios from 'axios';

const BASE_URL = 'https://kq-1-1a499.firebaseio.com/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json'
});

export const getAxiosInstance = () => {
  return axiosInstance;
};

export const axiosGet = (url, params = null) => {
  return axiosInstance.get(url + '.json', {
    params: params
  });
};

export const axiosPost = (url, params = null, data = null) => {
  return axiosInstance.post(url + '.json', {
    params: params,
    data: data
  });
};

export default axiosInstance;