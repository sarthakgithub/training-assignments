const todo = (state,action) => {
    switch (action.type){
        case 'add_todo':
            return{
                id: action.id,
                text : action.text,
                completed : false
            }
        case 'toggle_todo':
            if(state.id !== action.id){
                return state;
            }
            return{
                ...state,
                completed : !state.completed
            };
        default :
            return state;
    }
}

const todos = (state =[],action) => {
    switch(action.type){
        case 'add_todo':
            return[
                ...state,todo(undefined,action)

            ];
        case 'toggle_todo' :
            return state.map(t => todo(t,action));
        default:
            return state;
    }
};

const visibilityFilter = (state='show_all',action) => {
    switch(action.type){
        case 'set_visibility_filter':
            return action.filter;
        default:
            return state;
    }
}

const {combineReducers} = Redux;
const todoApp = combineReducers({
    todos: todos,
    visibilityFilter : visibilityFilter
})
//const todoApp = (state={},action) => {
//    return{
//        todos: todos(state.todos,action),
//        visibilityFilter : visibilityFilter(state.visibilityFilter,action)
//    }
//}

const {createStore} = Redux;
const store = createStore(todoApp);
console.log(store.getState());
console.log('Dispatching add_todo');
store.dispatch({
    type : 'add_todo',
    id : 0,
    text : 'learn redux'
});
store.dispatch({
    type : 'set_visibility_filter',
    filter : 'show_completed'
});



const testaddtodo = () => {
    const statebefore =[];
    const action  ={
        type: 'add_todo',
        id : 0,
        text : 'learn'
    };
  const stateafter = [
      {
          id : 0,
          type : 'add_todo',
          completed : false
      }
  ]
    deepFreeze(statebefore);
    deepFreeze(action);

    expect(
        todos(statebefore,action).toequal(stateafter)
    )
};

const testtoggletodo = () => {
    const statebefore = [
        {
            id : 0,
            text : 'learn redux',
            completed : false
        },
        {
            id : 1,
            type : 'go',
            completed : false
        }
    ];
    const action = {
        type : 'toggle_todo',
        id : 1
    }
    const stateafter = [
        {
            id : 0,
            text : 'learn redux',
            completed : false
        },
        {
            id : 1,
            type : 'go',
            completed : true
        }
    ];
    deepFreeze(statebefore);
    deepFreeze(action);

    expect(
        todos(statebefore,action).toEqual(stateafter)
    )
};

testaddtodo();
testtoggletodo();

let nexttodoid=0;
class Todoapp extends React.Component{
    render(){
        return(
            <div>
                <input ref={node => {
                    this.input = node;
                }}/>
                <button onClick={() => {
                    store.dispatch({
                        type : 'add_todo',
                        text : this.input.value,
                        id : nexttodoid++
                    })
                    this.input.value = '';
                }}>
                    Add todo
                </button>
                <ul>
                    {this.props.todos.map(todo =>
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
const render = () => {
    ReactDOM.render(<Todoapp todos={store.getState().todos} />,document.getElementById('root'))
}

store.subscribe(render);
render();