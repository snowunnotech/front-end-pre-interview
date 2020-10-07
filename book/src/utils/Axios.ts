import axios from 'axios';
import store from '@/store';
// token & error handle

axios.interceptors.request.use(
  (config) => {
    store.dispatch('isLoading', true);
    return config;
  },
  err => Promise.reject(err),
);

axios.interceptors.response.use(
  (config) => {
    store.dispatch('isLoading', false);
    return config;
  },
  err => Promise.reject(err),
);

const callApi = async (config: any) => {
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    store.dispatch('isLoading', false);
    // create book / patch book has error
    return error;
  }
};

export default callApi;
