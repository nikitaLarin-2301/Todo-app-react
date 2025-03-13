import {Box, Container} from '@mui/material'
import {Header} from './components/header/header.tsx'
import {LIST_TITLES} from './components/task-list/consts.ts'
import {TaskList} from './components/task-list/task-list.tsx'
import {TASK_STATUSES} from './utils/consts.ts'
import {useEffect} from 'react'
import {useTasksContext} from './hooks/useTasksContext.ts'

export function App() {
  const tasks = useTasksContext()
  useEffect(() => {
	localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  const {TITLE_TO_DO, TITLE_IN_WORK, TITLE_DONE} = LIST_TITLES
  const {TO_DO, IN_WORK, DONE} = TASK_STATUSES
  return (
	<Container>
	  
	  <Box sx={{
		width: '514px',
		minHeight: '766px',
		margin: '0 auto',
		padding: '44px',
		borderRadius: 4,
		backgroundColor: 'background.paper'
	  }}>
		<Header />
		
		<TaskList title={TITLE_TO_DO} taskStatus={TO_DO} />
		<TaskList title={TITLE_IN_WORK} taskStatus={IN_WORK} />
		<TaskList title={TITLE_DONE} taskStatus={DONE} />
	  
	  </Box>
	
	</Container>
  )
}
