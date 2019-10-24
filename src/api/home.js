// 引入文件
import request from '@utils/request'

/**
 *  获取所有的权限
 * @method getAllPermission
 * @return {[type]}         [description]
 */
export function getForwardList() {
  return request({
    url: 'api/forward.json',
    method: 'get',
    params: {
      // 'page_size': 9999
    }
  })
}
