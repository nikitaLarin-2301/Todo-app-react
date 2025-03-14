import {ChangeEvent, useState} from 'react'
import {ITask} from '../../utils/types.ts'
import {TASK_STATUSES} from '../../utils/consts.ts'
import {ACTIONS} from '../../reducers/consts.ts'
import {useDispatchTasksContext} from '../../hooks/useDispatchTasksContext.ts'
import {TaskEdit} from '../task-edit/task-edit.tsx'
import {TaskDisplay} from '../task-display/task-display.tsx'

interface TaskProps {
  task: ITask
}

export function Task({task}: TaskProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const dispatch = useDispatchTasksContext()
  
  const handleChangeTaskValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: ACTIONS.CHANGE_TEXT, id: task.id, taskText: e.target.value})
  }
  
  const handleChangeChecked = () => {
    dispatch({type: ACTIONS.CHANGE_STATUS, id: task.id})
  }
  
  const handleDelete = () => {
    dispatch({type: ACTIONS.REMOVE_TASK, id: task.id})
  }
  
  const isDone = task.status === TASK_STATUSES.DONE
  return (
    <>
      {isEditing ? (
        <TaskEdit text={task.text}
                  onChangeEdit={() => setIsEditing(!isEditing)}
                  onChangeText={handleChangeTaskValue} />
      ) : (
        <TaskDisplay text={task.text}
                     onChangeEdit={() => setIsEditing(!isEditing)}
                     isDone={isDone}
                     onChangeChecked={handleChangeChecked}
                     onDelete={handleDelete} />
      )}
    </>
  )
}
