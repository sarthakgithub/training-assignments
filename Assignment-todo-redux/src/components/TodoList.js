import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, deleteTask }) => (
    <ul>
        {todos.map(todo =>
            <Todo key={todo.id}

                {...todo}
                onClick={() => onTodoClick(todo.id)} onDeleteTask={() => deleteTask(todo.id)}
                //onActiveTask={() => activeTask()}
                //  onCompleteTask={() => completeTask()}
                //  onAllTask={() => allTask()}
            />
        )}
    </ul>
)

export default TodoList