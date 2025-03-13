import {ACTIONS, ActionType} from './consts.ts'
import {v1} from 'uuid'
import {ITask} from '../utils/types.ts'

const getTasksFromStorage = () => {
  try {
	const tasksJson = localStorage.getItem('tasks')
	if (!tasksJson) return
	return JSON.parse(tasksJson)
  } catch (error: unknown) {
	console.error((error as Error).message)
  }
}
export const initialState: ITask[] = getTasksFromStorage() || []

export function taskReducer(tasks: ITask[], action: ActionType): ITask[] {
  const {ADD_TASK, REMOVE_TASK, CHANGE_TEXT, CHANGE_STATUS} = ACTIONS
  const defaultStatus = 'TO DO'
  
  switch (action.type) {
	case ADD_TASK: {
	  const newTask: ITask = {
		id: v1(),
		text: action.taskText,
		status: defaultStatus
	  }
	  return [...tasks, newTask]
	}
	case REMOVE_TASK: {
	  return tasks.filter(task => task.id !== action.id)
	}
	case CHANGE_TEXT: {
	  return tasks.map(task => {
		if (task.id === action.id) {
		  return {...task, text: action.taskText}
		}
		return task
	  })
	}
	case CHANGE_STATUS: {
	  const {id, nextStatus} = action
	  return tasks.map(task => {
		if (task.id === id) {
		  return {...task, status: nextStatus}
		}
		return task
	  })
	}
	default:
	  return tasks
  }
}