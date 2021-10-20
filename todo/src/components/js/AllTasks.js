import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import check from '../../images/check.png';
import remove from '../../images/remove.png';
import '../css/AllTasks.css';


const AllTasks = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return(
        <>
            {
                todos.length === 0 ? <p style={{color: `rgb(250, 74, 74)`, margin:`20px`}}>You have no tasks</p>: todos.map( todo => 
                    <div className='task-container'>
                        { todo.name }
                        <div className='task-actions'>
                            {
                                todo.status === 'pending' ? <img onClick={ () => dispatch( {type: 'MARK_DONE', payload: todo.id} )} className='task-btn' src={ check } alt='Check icon' />  : null
                            }     
                            <img onClick={ () => dispatch( {type: 'DELETE_TASK', payload: todo.id} )} className='task-btn' src={ remove } alt='Delete icon' />                  
                        </div>
                    </div>
                )
            }            
        </>
    );
};

export default AllTasks;