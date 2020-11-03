const state = {
  userName: '',
  password: ''
}
const mutations = {
  SET_NAME: (state, userName) => {
    state.userName = userName
  },
  SET_PWD: (state, password) => {
    state.password = password
  }
}

const actions = {
  login (data) {
    const {userName, passWord} = data
    return new Promise((resolve, reject) => {
      console.log(userName, passWord)
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
