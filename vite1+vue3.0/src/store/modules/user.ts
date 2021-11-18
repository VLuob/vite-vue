const user = {
   state: {
      userInfo: null,
      loginStatus: '',
   },
   mutations: {
      UPDATE_USERINFO: (state: any, userRes: { UserInfo: any }) => {
         state.userInfo = userRes
      },
   },
   actions: {
      updateUser: ({ commit }: any, params: any) => {
         commit('UPDATE_USERINFO', params)
      },
   },
}

export default user
