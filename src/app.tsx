import {Box, Container} from '@mui/material'
import {Header} from './components/header/header.tsx'
import {TASKS_INFORMATION} from './components/task-list/consts.ts'
import {TaskList} from './components/task-list/task-list.tsx'
import {useEffect} from 'react'
import {useTasksContext} from './hooks/useTasksContext.ts'

export function App() {
  const tasks = useTasksContext()
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  return (
    <Container>
      <Box
        sx={{
          width: '514px',
          minHeight: '766px',
          margin: '0 auto',
          padding: '44px',
          borderRadius: 4,
          backgroundColor: 'background.paper',
        }}>
        <Header />
        
        {TASKS_INFORMATION.map(taskInformation => (
          <TaskList title={taskInformation.title}
                    taskStatus={taskInformation.tasksStatus} />))
        }
      
      </Box>
    </Container>
  )
}
