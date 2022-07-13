import request from '@/utils/requset'

/**
 * 获取菜单列表
 * @param data
 * @returns {AxiosPromise}
 */
export const menuListApi = (data) => {
  return request({
    url: '/menu/list',
    method: 'GET',
    data
  })
}
/**
 * 添加
 * @param data
 * @returns {AxiosPromise}
 */
export const menuAddAPI = (data) => {
  return request({
    url: '/menu/add',
    method: 'POST',
    data
  })
}
/**
 * 修改
 * @param data
 * @returns {AxiosPromise}
 */
export const menuUpdateAPI = (data) => {
  return request({
    url: '/menu/update',
    method: 'PUT',
    data
  })
}
