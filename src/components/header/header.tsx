import {Box, IconButton, TextField, Typography} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import {ChangeEvent, FormEvent, useState} from 'react'
import {ACTIONS} from '../../reducers/consts.ts'
import {useDispatchTasksContext} from '../../hooks/useDispatchTasksContext.ts'

export function Header() {
  const [taskValue, setTaskValue] = useState<string>('')
  const dispatch = useDispatchTasksContext()
  
  const handleChangeTaskValue = (e: ChangeEvent<HTMLInputElement>) => {
	setTaskValue(e.target.value)
  }
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
	e.preventDefault()
	dispatch({type: ACTIONS.ADD_TASK, taskText: taskValue})
	setTaskValue('')
  }
  
  return (
	<Box sx={{mb: 4}}>
	  <Typography variant='h1'
				  component='h1'
				  sx={{fontSize: '34px', color: 'primary.light', mb: '20px'}}>
		TODO
	  </Typography>
	  <Box component='form'
		   sx={{display: 'flex', position: 'relative'}}
		   onSubmit={handleSubmit}>
		<TextField variant='standard'
				   label='Имя новой задачи'
				   fullWidth
				   sx={{pr: '40px'}}
				   value={taskValue}
				   onChange={handleChangeTaskValue} />
		<IconButton sx={{position: 'absolute', top: 12, right: 0}}
					type='submit'
		>
		  <AddIcon />
		</IconButton>
	  </Box>
	</Box>
  )
}