import axios from 'axios'
import store from '@/store'

const axiosInstance = axios.create({
  timout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(function (config) {
  store.commit('CHANGE_LOADER', true)
  return config
}, function (error) {
  store.commit('CHANGE_LOADER', false)
  return Promise.reject(Object.assign({ success: false }, error.response))
})

axiosInstance.interceptors.response.use(function (response) {
  store.commit('CHANGE_LOADER', false)
  return response
}, function (error) {
  // 回傳錯誤資訊
  store.commit('CHANGE_LOADER', false)
  return Promise.reject(Object.assign({ success: false }, error.response))
})

export default axiosInstance
