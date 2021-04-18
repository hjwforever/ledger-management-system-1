import { login, logout, getInfo } from '@/api/user'
import { resetRouter } from '@/router'
import {Message} from "element-ui";
import {removeEmail, setEmail} from "@/utils/auth";

const getDefaultState = () => {
  return {
    name: '',
    email: '',
    avatar: '',
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        console.log("user login", response)
        const { data } = response
        commit("SET_EMAIL", data.email)
        setEmail(data.email)

        // const { name, avatar } = data
        let { userName } = data
        const avatar = "https://z3.ax1x.com/2021/04/11/cwKLLj.png"
        const roles = ['admin']
        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', userName)
        commit('SET_AVATAR', avatar)

        Message({
          message: "登录成功",
          type: 'success',
          duration: 3000
        })
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.email).then(response => {
        const { data } = response
        console.log(response)
        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { roles, name, avatar } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        // commit("SET_NAME", data.name)
        // commit("SET_AVATAR", "https://z3.ax1x.com/2021/04/11/cwKLLj.png")
        // commit("SET_ROLES", ['admin'])
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.email).then(() => {
        removeEmail()
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  resetEmail({ commit }) {
    return new Promise(resolve => {
      removeEmail()
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

