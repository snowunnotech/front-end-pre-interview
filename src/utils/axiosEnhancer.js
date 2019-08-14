/* eslint-disable */
import axios from 'axios';

const methods = ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch'];
const requestHelpers = methods.reduce((acc, method) => {
  acc[`$${method}`] = function() {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
  return acc;
}, {});


export default function(axiosOptions) {
  const instance = axios.create(axiosOptions);
  for (let key in requestHelpers) {
    instance[key] = requestHelpers[key].bind(instance)
  }
	return instance;
};