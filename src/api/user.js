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
