import { connect } from 'react-redux'
import { toggleTodo,deleteTodo,setVisibilityFilter } from '../actions'
import TodoList from '../components/TodoList'
import { createSelector } from 'reselect'

const getVisibilityFilter = state => state.visibilityFilter
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
    (visibilityFilter, todos) => {
        switch (visibilityFilter) {
            case 'SHOW_ALL':
                return todos
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed)
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed)
            default:
                throw new Error('Unknown filter: ' + visibilityFilter)
        }
    }
)

//const getVisibleTodos = (todos, filter) => {
//    switch (filter) {
//        case 'SHOW_ALL':
//            return todos
//        case 'SHOW_COMPLETED':
//            return todos.filter(t => t.completed)
//        case 'SHOW_ACTIVE':
//            return todos.filter(t => !t.completed)
//        default:
//            throw new Error('Unknown filter: ' + filter)
//    }
//    //return todos;
//}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
    //todos: getVisibleTodos(state.todos)
    //todos : getVisibleTodos
})

const mapDispatchToProps = state => dispatch =>({
    onTodoClick: id => {
        dispatch(toggleTodo(id))
    },
    deleteTask : id => {
        dispatch(deleteTodo(id))
    }
})

const VisibleTodoList = connect(
    mapStateToProps,mapDispatchToProps
)(TodoList)

export default VisibleTodoList