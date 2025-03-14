import {Box, Checkbox, IconButton, Typography} from '@mui/material'
import ModeIcon from '@mui/icons-material/Mode'
import DeleteIcon from '@mui/icons-material/Delete'

interface TaskDisplayProps {
  text: string
  onChangeEdit: () => void
  isDone: boolean
  onChangeChecked: () => void
  onDelete: () => void
}

export function TaskDisplay({
  text, onChangeEdit, isDone, onChangeChecked, onDelete,
}: TaskDisplayProps) {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Checkbox sx={{p: 0, mr: 1}} checked={isDone} onChange={onChangeChecked} />
      <Typography component='p' sx={{flex: 1}}>
        {text}
      </Typography>
      <IconButton onClick={onChangeEdit}>
        <ModeIcon sx={{color: 'primary.light'}} />
      </IconButton>
      <IconButton onClick={onDelete}>
        <DeleteIcon sx={{color: 'primary.contrastText'}} />
      </IconButton>
    </Box>
  )
}