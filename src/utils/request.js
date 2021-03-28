import axios from 'axios'
// import {
//   Loading
// } from 'element-ui'

const config = {
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'X-LC-Id': process.env.VUE_APP_appId,
    'X-LC-Key': process.env.VUE_APP_appKey,
    'Content-Type': 'application/json;charset=utf-8',
  }
}
const instance = axios.create(config)

instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

// Loading.service()
// // Loading.setDefaults({
// //   color: 'light-blue-4',
// //   size: '4px',
// //   position: 'top'
// // })

export default instance
