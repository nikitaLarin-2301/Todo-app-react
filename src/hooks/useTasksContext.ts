import {useContext} from 'react'
import {TaskContext} from '../contexts/task-context.ts'

export function useTasksContext() {
  const tasks = useContext(TaskContext)
  if (!tasks) {
	throw new Error('Context is empty')
  }
  return tasks
}