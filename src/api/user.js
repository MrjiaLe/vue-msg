import request from '@/utils/requset'

const getUserInfo = () => {
  return request({ url: 'user/info', method: 'GET' })
}

/**
 * 获取验证码
 *  */
const getCaptcha = () => {
  return request({ url: '/captcha', method: 'GET' })
}

/**
 * 登录接口
 */
const login = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST',
    data
  })
}

/**
 * 获取用户权限
 */
const MenuNav = () => {
  return request({ url: '/menu/nav', method: 'GET' })
}

export default {
  getCaptcha,
  login,
  getUserInfo,
  MenuNav
}

/**
 * 获取用户权限
 */
export const setMenuNav = () => {
  return request({
    url: '/menu/nav',
    method: 'GET'
  })
}

/**
 * 获取用户列表
 * @param data
 * @returns {AxiosPromise}
 */
export const userListApi = (data) => {
  return request({
    url: '/user/list',
    data,
    method: 'GET'
  })
}
/**
 * 添加用户
 * @param data
 * @returns {AxiosPromise}
 */
export const addUserApi = (data) => {
  data.avatar = data.avatar ? data.avatar : 'https://joeschmoe.io/api/v1/random'
  return request({
    url: '/user/add',
    method: 'POST',
    data
  })
}
/**
 * 编辑用户
 * @param data
 * @returns {AxiosPromise}
 */
export const updateUserApi = (data) => {
  return request({
    url: '/user/update',
    method: 'PUT',
    data
  })
}
/**
 * 分配角色
 * @param id
 * @param data
 * @returns {AxiosPromise}
 */
export const roleApi = (id, data) => {
  return request({
    url: `/user/assign/${id}`,
    method: 'POST',
    data
  })
}

export const userDelApi = (integer) => {
  return request({
    url: '/sys/user/del',
    method: 'POST',
    data: integer
  })
}

/**
 * 单个用户小心些
 * @param id
 * @returns {AxiosPromise}
 */
export const userInfoIdAPI = (id) => {
  return request({
    url: `/user/userInfo/${id}`,
    method: 'GET'
  })
}
