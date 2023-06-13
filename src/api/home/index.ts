import request from '@/utils/request'

export const getUsers = () =>
  request({
    url: '/users',
    method: 'get'
  })

export const getNews = (data: any) =>
  request({
    url: '/tt-news-list',
    method: 'get',
    params: {
      ...data
    }
  })

export const tang300 = () =>
  request({
    url: '/tang300',
    method: 'get',
    params: {
      contents: '月',
      page: 10
    }
  })

export const getCsdnHot = (data: any) =>
  request({
    url: '/resou/v1/csdn',
    method: 'get',
    params: {
      ...data
    }
  })

// 头条热榜
export const getTouTiaoHot = () =>
  request({
    url: '/toutiao-hot',
    method: 'get'
  })

// 头条热榜
export const get24Hot = (data: any) =>
  request({
    url: '/24k/hot',
    method: 'get',
    params: {
      ...data
    }
  })

// 快捷导航
export const getQuirsutNav = (data: any) =>
  request({
    url: '/web-nav',
    method: 'get',
    params: {
      ...data
    }
  })

// 网易云段子
export const getWangYiYun = () =>
  request({
    url: '/wangyiyun',
    method: 'get'
  })
