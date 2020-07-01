import Vue from 'vue'
import Vuex from 'vuex'
// import Tasks from './Tasks'

import { ITaskState } from './Task'

export interface IRootStore {
  task: ITaskState
} 

Vue.use(Vuex)

export default new Vuex.Store<IRootStore>({
//   modules: {
//    Task
//  }
})
