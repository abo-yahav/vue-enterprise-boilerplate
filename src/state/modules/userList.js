import axios from 'axios'

export const state = {
  users: [],
}

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
}

export const actions = {
  init({ dispatch }) {
    dispatch('getUsers')
  },

  getUsers({ commit }) {
    axios.get(`https://reqres.in/api/users?page=2`).then((response) => {
      const users = response.data.data
      commit('SET_USERS', users)
      return users
    })
  },
}
