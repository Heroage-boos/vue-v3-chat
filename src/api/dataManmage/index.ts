
import request from '@/utils/request'

export function fetchZhihuContentData(){
   return  request({
        url:"/dataManange/zhihu_content",
        method:"get",
   })
}

export function getZhihuContentData(){
 return  request({
      url:"/dataManage/select_zhihu_content",
      method:"get"
   })
}

export function get24kHotData(){
   return  request({
        url:"/dataManage/24k-hot/data",
        method:"get"
     })
  }