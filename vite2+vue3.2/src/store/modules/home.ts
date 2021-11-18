
const home = {
   state: {
      userInfo: null,
      loginStatus: 0
   },
   mutations: {
      UPDATE_USERINFO: (state: { userInfo: any }, payload: any) => {
         state.userInfo = payload
      },
      UPDATE_LOGINSTATUS: (state: any, payload: any) => {
         state.loginStatus = payload.loginStatus
      }
   },
   actions: {
      updateUser: ({ commit, state }: any, params: any) => {
         commit('UPDATE_USERINFO', params)
      },
      updateLoginStatus: ({ commit, state }: any, params: any) => {
         commit('UPDATE_LOGINSTATUS', params)
      },
   }
}
export default home