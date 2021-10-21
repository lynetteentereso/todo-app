import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import remove from '../../images/remove.png';
import '../css/AllTasks.css';

const Pending = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            {
                 (todos.filter(todo => todo.status === 'done')).length === 0 ? <p className='task-err-msg'>You have no Done tasks</p> : todos.filter(todo => todo.status === 'done').map( todo => 
                    <div className='task-container'>
                        { todo.name }
                        <div className='task-actions'>
                            <img onClick={ () => dispatch( {type: 'DELETE_TASK', payload: todo.id} )} className='task-btn' src={ remove } alt='Delete icon' />                  
                        </div>
                    </div>
                 )
            }
        </div>
    );
};

export default Pending;