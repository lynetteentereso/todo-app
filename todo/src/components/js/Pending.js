import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import check from '../../images/check.png';
import remove from '../../images/remove.png';
import '../css/AllTasks.css';

const Pending = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            {
                 (todos.filter(todo => todo.status === 'pending')).length === 0 ? <p className='task-err-msg'>You have no Pending tasks</p> : todos.filter(todo => todo.status === 'pending').map( todo => 
                    <div className='task-container'>
                        { todo.name }
                        <div className='task-actions'>
                            <img className='task-btn' onClick={ () => dispatch( {type: 'MARK_DONE', payload: todo.id} )} src={ check } alt='Check icon' />
                            <img onClick={ () => dispatch( {type: 'DELETE_TASK', payload: todo.id} )} className='task-btn' src={ remove } alt='Delete icon' />                  
                        </div>
                    </div>
                 )
            }
        </div>
    );
};

export default Pending;