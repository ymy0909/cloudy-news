// 引入文件
import request from '@utils/request'

/**
* @module home
* @author: ymy
* @description:获取前沿快讯
* @since: 创建时间  2019-11-09 17:34:11
*/

export function getForwardList() {
  return request({
    url: '/api/forward.json',
    method: 'get',
    params: {
      // 'page_size': 9999
    }
  })
}

/**
* @module home
* @author: ymy
* @description:获取热点列表
* @since: 创建时间  2019-11-09 17:33:11
*/
export function getHotList() {
  return request({
    url: '/api/hot.json',
    method: 'get',
    params: {
      // 'page_size': 9999
    }
  })
}

/**
* @module home
* @author: ymy
* @description:获取推荐阅读列表
* @since: 创建时间  2019-11-10 12:57:07
*/
export function getRecommandList() {
  return request({
    url: '/api/recommand.json',
    method: 'get',
    params: {
      // 'page_size': 9999
    }
  })
}

