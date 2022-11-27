import axios from 'axios';
import Session from "supertokens-auth-react/recipe/session";

const baseURL = process.env.REACT_APP_RUBUS_BAKCEND_BASE_URL;

const CustomAxios = () => {
  const defaultOptions = {
    baseURL,
  };

  const instance = axios.create(defaultOptions);

  Session.addAxiosInterceptors(instance);

  instance.interceptors.response.use((response) => {
    return response.data;
  }, (error) => {
    return Promise.reject(error);
  });

  return {
    get: (url: string, config = {}) => instance.get(url, config),
    post: (url: string, data: any, config = {}) => instance.post(url, data, config),
    put: (url: string, data: any, config = {}) => instance.put(url, data, config),
    patch: (url: string, data: any, config = {}) => instance.patch(url, data, config),
    delete: (url: string, data = {}, config = {}) => instance.delete(url, { ...{ data }, ...config }),
  };
};

export default CustomAxios;
