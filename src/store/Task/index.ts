import { Module, VuexModule, Mutation, getModule, Action } from 'vuex-module-decorators'

import { INotify, EColor } from '../../components/Notify'
import store from '..'

/** Data types */

export enum EFilter {
  ALL = 'all',
  COMPLETED = 'completed',
  INCOMPLETED = 'incompleted'
}

export interface ITask {
  id?: number
  name: string
  completed: boolean
}

/**STATE TYPES */

export interface ITaskState {
  data: ITask[]
  filter: EFilter
  loading: boolean
  listElement: Element | null
}

@Module({
  namespaced: true,
  name: 'Task',
  stateFactory: true,
  dynamic: true,
  store
})


class Task extends VuexModule {

  public data: ITaskState['data'] = []
  public filter: ITaskState['filter'] = EFilter.ALL
  public loading: ITaskState['loading'] = false
  public listElement: ITaskState['listElement'] = null

  @Mutation
  SET_DATA(data: ITask[]) {
    this.data = data
  }


  @Mutation
  SET_LIST_ELEMENT(list: Element) {
    this.listElement = list
  }

  @Mutation
  SET_FILTER(filter: EFilter) {
    this.filter = filter
  }

  @Mutation
  CREATE_TASK(task: ITask) {
    this.data.push(task)
  }

  @Mutation
  EDIT_TASK({ task, index }: { task: ITask, index: number }) {
    console.log(task, index)
    this.data[index].name = task.name
    this.data[index].completed = task.completed
  }

  @Mutation
  REMOVE_TASK(index: number) {
    this.data.splice(index, 1)
  }

  @Mutation
  TOGGLE_COMPLETED(id: number) {
    const index = this.data.findIndex(task => task.id === id)
    this.data[index].completed = !this.data[index].completed
  }


  @Action
  iniData() {
    const data: ITask[] = []
    for (let i = 0; i < 100; i++) {
      data.push({ id: i, name: 'Task' + (i+1), completed: false })
    }
    this.SET_DATA(data)
  }

  @Action
  SAVE_TASK(task: ITask): INotify {
    // console.log('SAVE_TASK', task)
    if (task.name === '') {
      return {
        color: EColor.NEGATIVE,
        message: 'El campo nombre de tarea es requerido'
      }
    } else if (task.id) {
      const index = this.data.findIndex(item => item.id === task.id)
      if (index > -1) {
        if (this.data.some(({ name, id }) => name.toUpperCase() === task.name.toUpperCase() && id !== task.id)) {
          return {
            color: EColor.NEGATIVE,
            message: 'La Tarea ya existe'
          }
        } else {
          this.EDIT_TASK({ task, index })
          return {
            color: EColor.POSITIVE,
            message: 'Tarea Editada con exito'
          }
        }
      } else {
        return {
          color: EColor.NEGATIVE,
          message: 'No existe la tarea'
        }
      }
    } else {
      if (this.data.some(({ name, id }) => name.toUpperCase() === task.name.toUpperCase())) {
        return {
          color: EColor.NEGATIVE,
          message: 'La Tarea ya existe'
        }
      } else {
        task.id = new Date().getTime()

        this.CREATE_TASK(task)

        return {
          color: EColor.POSITIVE,
          message: 'Tarea Creada con exito'
        }
      }
    }
  }

  @Action
  DELETE_TASK(id: number): INotify {
    const index = this.data.findIndex(task => task.id === id)
    if (index > -1) {
      this.REMOVE_TASK(index)
      return {
        color: EColor.POSITIVE,
        message: 'Tarea eliminada con exito'
      }
    }
    return {
      color: EColor.NEGATIVE,
      message: 'No se pudo eliminar la tarea'
    }
  }


  get filterTasks(): ITask[] {
    // let tasks: ITask[]

    switch (this.filter) {
      case EFilter.COMPLETED:
        return this.data.filter(task => task.completed)
      case EFilter.INCOMPLETED:
        return this.data.filter(task => !task.completed)
      default:
        return this.data
    }
    // return tasks

  }
  destroy() {
    store.unregisterModule('Task')

  }
}

export const taskModule = getModule(Task, store);

