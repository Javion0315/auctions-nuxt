import { login } from '~/api/login'
import Cookies from 'js-cookie';

export const state = () => ({
    status: '',
    token: Cookies.get('token') || ''
  })
  export const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, token) {
        state.status = 'success'
        state.token = token
    },
    auth_error(state) {
        state.status = 'error'
    },
    logout(state) {
        state.status = ''
        state.token = ''
    }
  }
  export const actions = {
    async authlogin({ commit }, userInfo) {
        commit('auth_request')
        await login(userInfo).then((res) => {
            console.log(res)
            commit('auth_success', res.data.user.token)
            Cookies.set('token', res.data.user.token);
        })
    },
    logout({ commit }) {
        return new Promise((resolve) => {
            commit('logout')
            // localStorage.removeItem('token')
            Cookies.remove('token')
            resolve()
        })
    }
  }
  
