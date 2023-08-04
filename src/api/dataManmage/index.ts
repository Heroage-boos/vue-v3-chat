
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