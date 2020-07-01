// import { MutationTree, GetterTree, ActionTree } from 'vuex'
// import { StateTypes, Task, MutationTypes, GettersTypes, filterTypes, ActionTypes } from './types'
// // Notify, 
// import { ColorTypes, NotifyType } from '../../components/Notify'

// // type NotifyType = InstanceType<typeof Notify>

// const state: StateTypes = {
//   tasks: [{
//     id: 1,
//     name: ' Lavar los platos',
//     completed: false
//   }],
//   filter: filterTypes.ALL,
//   loading: false
// }

// const mutations: MutationTree<StateTypes> = {
//   [MutationTypes.SET_TASKS]: (state, tasks: Task[]) => {
//       state.tasks = tasks
//   },

//   [MutationTypes.SAVE_TASK]: (state, task: Task): NotifyType => {
//     if (task.id) {
//       const index = state.tasks.findIndex(({ id }) => id === task.id)
//       if (index > -1) {
//         state.tasks[index].name = task.name
//         return { message: 'Ok tarea editada', color: ColorTypes.POSITIVE }
//       } else {
//         return { message: 'No se pudo guardar la tarea', color: ColorTypes.NEGATIVE }
//       }
//     } else {
//       state.tasks.push(task)
//       return { message: 'Ok tarea creada', color: ColorTypes.POSITIVE }
//     }
  
//   },

//   [MutationTypes.DELETE_TASK]: (state, id: number): NotifyType => {
//     const index = state.tasks.findIndex(task => task.id === id)
//     if (index > -1) {
//       state.tasks.slice(index, 1)
//       return { message: 'Tarea eliminada con exito', color: ColorTypes.NEGATIVE }

//     }
//     return { message: 'No se pudo eliminar la tarea', color: ColorTypes.NEGATIVE }
//   }
// }

// const getters: GetterTree<StateTypes, any> = {
//   // state, getters, rootState, rootGetters
//   [GettersTypes.FILTER_TASKS]: (state): Task[] => {
//     if (filterTypes.COMPLETED) {
//       return state.tasks.filter(task => task.completed)
//     } else if (filterTypes.INCOMPLETED) {
//       return state.tasks.filter(task => !task.completed)
//     }
//     return state.tasks
//   }
// }

// const actions: ActionTree<StateTypes, any> = {
//   [ActionTypes.INIT_TASKS]: ({ commit, state }): void => {
//     state.loading = true
//     // axios
//     const response: Task[] = []

//     commit(MutationTypes.SET_TASKS, response)

//     state.loading = false
    
//   }
// }

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   getters,
//   actions
// }

/*ejemplo
import { GetterTree, ActionTree, MutationTree } from 'vuex';

import { State } from '@/store/interfaces/Blog.ts';
// Establece los types de los modulos store
import blogTypes from '@/store/types/BlogTypes';

const namespaced: boolean = true;

const state: State = {
    blogs: []
};
const getters: GetterTree<State, any> = {
  [blogTypes.getters.GETBLOGS] : ( state ) => {
    return state.blogs;
  },

};
const mutations: MutationTree<State> = {
  [blogTypes.mutations.SETBLOGS]: (state, blogs) => {
    state.blogs = blogs;
  },

};
const actions: ActionTree<State, any> = {
  [blogTypes.actions.ACTBLOGS]: ({ commit, state }, blog) => {
    const blogGuardados = state.blogs;
    commit(blogTypes.mutations.SETBLOGS, blogGuardados.concat(blog));
  },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};*/