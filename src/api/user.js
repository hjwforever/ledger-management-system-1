import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/login?email='+data.username+"&password="+data.password,
    method: 'post',
    data
  })
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve({
  //       code: "0",
  //       data:{
  //         birthday: "2021-04-09T16:00:00.000+00:00",
  //         email: "hjh@qq.com",
  //         gender: true,
  //         id: 1,
  //         name: "hjh",
  //         password: "123"
  //       },
  //       msg: "登录成功"
  //     })}, 1500)
  // })
}

// 获取用户信息
export function getInfo(email) {
  // return request({
  //   url: '/info',
  //   method: 'get',
  //   params: { email }
  // })
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: "0",
        data:{
          name: '管理员',
          avatar: 'https://z3.ax1x.com/2021/04/11/cwKLLj.png',
          roles: ['admin']
        },
        msg: "成功获取用户信息"
      })}, 300)
  })
}

// 登出
export function logout() {
  // return request({
  //   url: '/logout',
  //   method: 'post'
  // })
  return Promise.resolve()
}
