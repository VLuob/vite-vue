import { createStore } from 'vuex'
import getters from './getter'
import user from './modules/user'
export default createStore({
   modules: {
      user,
   },
   getters,
})
