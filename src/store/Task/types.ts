/** ACTION TYPES */

export enum MutationTypes {
  SAVE_TASK = '@tasks/addTask',
  DELETE_TASK = '@tasks/deleteTask',
  
  SET_TASKS = '@/tasks/setTasks'
}

export enum GettersTypes {
  FILTER_TASKS = '@tasks/filterTasks'
}

export enum ActionTypes {
  INIT_TASKS = '@tasks/initTasks'
}


/** DATA TYPES */

export enum filterTypes {
  ALL = 'all',
  COMPLETED = 'completed',
  INCOMPLETED = 'inclompleted'
}


export interface Task {
  id?: number
  name: string
  completed: boolean
}

/**STATE TYPES */

export interface StateTypes {
  tasks: Task[]
  filter: string
  loading: boolean
}