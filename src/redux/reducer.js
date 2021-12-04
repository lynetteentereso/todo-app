const initialState = {
    todos: [
        { id: 1, name: 'Wake Up', status: 'pending' },
        { id: 2, name: 'Eat Breakfast', status: 'done' },
        { id: 3, name: 'Go to work', status: 'pending' },
        { id: 4, name: 'Code', status: 'pending' },
        { id: 5, name: 'Review Notes', status: 'pending' } 
    ]
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ){
        case 'ADD_NEW_TASK':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'DELETE_TASK':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        case 'MARK_DONE':
            return { ...state, todos: state.todos.map(todo => {
                if(todo.id === action.payload){
                    todo.status = 'done';
                }
                return todo;
            } ) 
            }
            
        default:
            return state;
    }
   
}

export default reducer;