import {Box, IconButton, TextField} from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'
import {ChangeEvent} from 'react'

interface TaskEditProps {
  text: string
  onChangeEdit: () => void
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void
}

export function TaskEdit({text, onChangeEdit, onChangeText}: TaskEditProps) {
  return (
    <Box>
      <Box component='form' sx={{display: 'flex', position: 'relative', mb: 2}}>
        <TextField
          variant='standard'
          label='Имя задачи'
          fullWidth
          sx={{pr: '40px'}}
          value={text}
          onChange={onChangeText}
        />
        <IconButton
          sx={{position: 'absolute', top: 12, right: 0}}
          onClick={onChangeEdit}>
          <DoneIcon sx={{color: 'primary.light'}} />
        </IconButton>
      </Box>
    </Box>
  )
}