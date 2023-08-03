import request from '@/utils/request'

// 用户登录  登录
export function Login(data: any) {
    return request({
      url: '/chat_nav_login',
      method:"get" ,
      params: {
        ...data
      }
    })
  }

  // 用户注册
// export function register(data: any) {
//     return request({
//       url: '/·/hot',
//       method: ,
//       params: {
//         ...data
//       }
//     })
//   }

  
//   // 密码找回
// export function pwdRestFind(data: any) {
//     return request({
//       url: '/·/hot',
//       method: ,
//       params: {
//         ...data
//       }
//     })
//   }

  