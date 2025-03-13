export const ACTIONS = {
  ADD_TASK: 'add task',
  REMOVE_TASK: 'remove task',
  CHANGE_STATUS: 'change status',
  CHANGE_TEXT: 'change text'
} as const

export type ActionType = { type: 'add task', taskText: string } |
  { type: 'remove task', id: string } |
  { type: 'change status', id: string, nextStatus: string } |
  { type: 'change text', id: string, taskText: string }
