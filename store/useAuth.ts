import { defineStore } from 'pinia'

interface IUserInfo {
  name?: string
}

interface IState {
  userInfo: IUserInfo
}

const store = defineStore({
  id: 'auth',
  state: (): IState => {
    return {
      userInfo: { name: 'qk' },
    }
  },

  getters: {
    fakeUserInfo: (state) => {
      return state.userInfo
    },
  },

  actions: {
    async login({ emial, password }) {
      console.log(emial, password)
    },
  },
})

export default store
