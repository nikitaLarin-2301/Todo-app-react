import {Box, Typography} from '@mui/material'
import {Task} from '../task/task.tsx'
import {useTasksContext} from '../../hooks/useTasksContext.ts'

interface TaskListProps {
  title: string;
  taskStatus: string
}

export function TaskList({title, taskStatus}: TaskListProps) {
  const tasks = useTasksContext()
  
  const filteredTasks = tasks.filter(task => task.status === taskStatus)
  const tasksCount = filteredTasks.length
  return (
	<>
	  {tasksCount > 0 && <Box sx={{mb: 4}}>
		<Typography variant='h2'
					sx={{fontSize: '12px', mb: 2, textAlign: 'center'}}
		>
		  {title.toUpperCase()} ({tasksCount})
		</Typography>
		
		{filteredTasks.length > 0 && filteredTasks.map(task => <Task key={task.id} task={task} />)}
	  </Box>}
	</>
  )
}