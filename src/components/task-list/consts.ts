import {TASK_STATUSES} from '../../utils/consts.ts'

const {TO_DO, IN_WORK, DONE} = TASK_STATUSES

export const TASKS_INFORMATION = [
  {
    title: 'План',
    tasksStatus: TO_DO,
  },
  {
    title: 'В работе',
    tasksStatus: IN_WORK,
  },
  {
    title: 'Готово',
    tasksStatus: DONE,
  },
]