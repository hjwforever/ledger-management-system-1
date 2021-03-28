import request from '@/utils/request'
import axios from 'axios';

// 登录方法
export function login () {
  const data = {
    username: 'admin',
    password: '123456'
  }
  return request({
    url: '/auth/login',
    method: 'post',
    data: data
  })
}

export function getDemo() {
  return request.get('/');
}

export function getAvatar() {
  return axios.get('https://api.uomg.com/api/rand.avatar?format=json');
}
