import axios from 'axios' // axios 导入包

const service = axios.create({
  // baseURL: '/api',
  baseURL: '/api',
  withCredentials: true,
  timeout: 10000
}) // axios 简单配置

// /api/user/id    token
service.interceptors.request.use((config: any) => {
  return config
}) // axios 请求拦截

service.interceptors.response.use((response: { data: any }) => {
  const { data } = response
  // if (data.status == 200) {

  // } else if (data.status == 403) {

  // }
  return data
}) // axios响应拦截

export default service
