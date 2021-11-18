import getters from './getter'
import home from './modules/home'
import { createStore } from 'vuex'
export default createStore({
   modules: {
      home
   },
   getters,
})
