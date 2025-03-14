import {TaskContext, TaskDispatchContext} from './task-context.ts'
import {ReactNode, useReducer} from 'react'
import {initialState, taskReducer} from '../reducers/task-reducer.ts'

export function TaskProvider({children}: {children: ReactNode}) {
  const [tasks, dispatch] = useReducer(taskReducer, initialState)
  return (
    <TaskContext value={tasks}>
      <TaskDispatchContext value={dispatch}>{children}</TaskDispatchContext>
    </TaskContext>
  )
}
