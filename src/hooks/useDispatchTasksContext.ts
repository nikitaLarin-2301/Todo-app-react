import {useContext} from 'react'
import {TaskDispatchContext} from '../contexts/task-context.ts'

export function useDispatchTasksContext() {
  const dispatch = useContext(TaskDispatchContext)
  if (!dispatch) {
    throw new Error('Context is empty')
  }
  return dispatch
}
