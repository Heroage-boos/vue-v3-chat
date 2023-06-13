import Mock from 'mockjs'

// example 相关
Mock.mock('/api/users', 'get', getUser())

function getUser() {
  return Mock.mock({
    status: '200',
    msg: '请求成功',
    'data|3': [
      {
        name: '@cname', // Mock.Random.cname(),
        age: '@integer(20,50)'
      }
    ]
  })
}
