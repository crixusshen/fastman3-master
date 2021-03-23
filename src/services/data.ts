/*
 * @Author: shenzhiwei
 * @Date: 2021-03-23 10:22:25
 * @Company: orientsec.com.cn
 * @Description: data 数据访问
 */
import fetch from '@/utils/request'

export const getAsyncData = () =>
  fetch.get('https://www.fastmock.site/mock/c3b8f2a9ff1e0ad5a0cb50ce54d08e27/fake/v1/user/test', {});
