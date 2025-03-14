import {createContext, Dispatch} from 'react'
import {ActionType} from '../reducers/consts.ts'
import {ITask} from '../utils/types.ts'

export const TaskContext = createContext<ITask[] | null>(null)
export const TaskDispatchContext = createContext<Dispatch<ActionType> | null>(null)
