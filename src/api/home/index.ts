import request from '@/utils/request'
import type * as Home from "./types/home"

export function getUsers() {
  return request({
    url: '/users',
    method: 'get'
  })
}

export function getNews(data: any) {
  return request({
    url: '/tt-news-list',
    method: 'get',
    params: {
      ...data
    }
  })
}

export function tang300() {
  return request({
    url: '/tang300',
    method: 'get',
    params: {
      contents: '月',
      page: 10
    }
  })
}

export function getCsdnHot(data: any) {
  return request({
    url: '/resou/v1/csdn',
    method: 'get',
    params: {
      ...data
    }
  })
}

// 头条热榜
export function getTouTiaoHot() {
  return request({
    url: '/toutiao-hot',
    method: 'get'
  })
}

// 头条热榜
export function get24Hot(data: any) {
  return request({
    url: '/24k/hot',
    method: 'get',
    params: {
      ...data
    }
  })
}

// 快捷导航
export function getQuirsutNav(data: any) {
  return request<Home.HomeWebNavInfo>({
    url: '/web-nav',
    method: 'get',
    params: {
      ...data
    }
  })
}

// 网易云段子
export function getWangYiYun() {
  return request({
    url: '/wangyiyun',
    method: 'get'
  })
}
