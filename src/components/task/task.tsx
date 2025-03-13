import {ChangeEvent, useState} from 'react'
import {Box, Checkbox, IconButton, TextField, Typography} from '@mui/material'
import ModeIcon from '@mui/icons-material/Mode'
import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done'
import {ITask} from '../../utils/types.ts'
import {TASK_STATUSES} from '../../utils/consts.ts'
import {ACTIONS} from '../../reducers/consts.ts'
import {useDispatchTasksContext} from '../../hooks/useDispatchTasksContext.ts'

interface TaskProps {
  task: ITask;
}

export function Task({task}: TaskProps) {
  const [isEditing, setisEditing] = useState<boolean>(false)
  const dispatch = useDispatchTasksContext()
  
  const {TO_DO, IN_WORK, DONE} = TASK_STATUSES
  
  const handleChangeTaskValue = (e: ChangeEvent<HTMLInputElement>) => {
	dispatch({type: ACTIONS.CHANGE_TEXT, id: task.id, taskText: e.target.value})
  }
  
  const handleChangeChecked = () => {
	let nextStatus = TO_DO
	if (task.status === TO_DO) {
	  nextStatus = IN_WORK
	}
	if (task.status === IN_WORK) {
	  nextStatus = DONE
	}
	if (task.status === DONE) {
	  nextStatus = TO_DO
	}
	dispatch({type: ACTIONS.CHANGE_STATUS, id: task.id, nextStatus})
  }
  
  const handleDelete = () => {
	dispatch({type: ACTIONS.REMOVE_TASK, id: task.id})
  }
  
  const isDone = task.status === TASK_STATUSES.DONE
  return (
	<>
	  {isEditing ? (
		<Box>
		  <Box component='form' sx={{display: 'flex', position: 'relative', mb: 2}}>
			<TextField variant='standard'
					   label='Имя задачи'
					   fullWidth
					   sx={{pr: '40px'}}
					   value={task.text}
					   onChange={handleChangeTaskValue}
			/>
			<IconButton sx={{position: 'absolute', top: 12, right: 0}}
						onClick={() => setisEditing(!isEditing)}>
			  <DoneIcon sx={{color: 'primary.light'}} />
			</IconButton>
		  </Box>
		</Box>
	  ) : (
		<Box sx={{display: 'flex', alignItems: 'center'}}>
		  <Checkbox sx={{p: 0, mr: 1}} checked={isDone} onChange={handleChangeChecked} />
		  <Typography component='p' sx={{flex: 1}}>{task.text}</Typography>
		  <IconButton onClick={() => setisEditing(!isEditing)}>
			<ModeIcon sx={{color: 'primary.light'}} />
		  </IconButton>
		  <IconButton onClick={handleDelete}>
			<DeleteIcon sx={{color: 'primary.contrastText'}} />
		  </IconButton>
		</Box>
	  )
	  }
	</>
  )
}