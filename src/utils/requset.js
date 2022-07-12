import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    const token = store.getters.token
    if (token) {
      config.headers.token = token
    }
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    if (response.data.code === 200) {
      return response.data.data
    }
    _showErrorMessage(response.data.code, response.data.msg)
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 响应失败提示
const _showErrorMessage = (code, msg) => {
  const message = code + ' ' + msg || '未知错误'
  Message({ message, type: 'error' })
}

// 统一了传参处理
const request = (Options) => {
  if (Options.method.toLowerCase() === 'get') {
    Options.params = Options.data || {}
  }
  return service(Options)
}

// 导出axios实例对象
export default request
