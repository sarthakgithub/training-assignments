import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, dispatch, onDeleteTask, onActiveTask, onCompleteTask, onAllTask }) => (
    <div>

    <li style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
            {text}
            <input type="checkbox" value="complete" onClick={onClick} />
            <input type="button" value="delete" onClick={onDeleteTask}/>

        </li>

        </div>
)

export default Todo