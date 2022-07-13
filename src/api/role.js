import request from '@/utils/requset'

/**
 * 获取角色列表API
 * @param data
 * @returns {AxiosPromise}
 */
export const roleListAPI = (data) => {
  return request({
    url: '/role/list',
    method: 'GET',
    data
  })
}
/**
 * 添加角色
 * @param data
 * @returns {AxiosPromise}
 */
export const roleAddApi = (data) => {
  return request({
    url: '/role/add',
    method: 'POST',
    data
  })
}
/**
 * 编辑角色
 * @param data
 * @returns {AxiosPromise}
 */
export const roleEditAPI = (data) => {
  return request({
    url: '/role/update',
    method: 'PUT',
    data
  })
}
/**
 * 获取角色信息
 * @param id
 * @returns {AxiosPromise}
 */
export const roleInfoAPI = (id) => {
  return request({
    url: `/role/info/${id}`,
    method: 'GET'
  })
}
/**
 * 分配权限
 * @param id
 * @param roles
 * @returns {AxiosPromise}
 */
export const rolePermAPI = (id, roles) => {
  return request({
    url: `/role/perm/${id}`,
    method: 'POST',
    data: roles
  })
}
