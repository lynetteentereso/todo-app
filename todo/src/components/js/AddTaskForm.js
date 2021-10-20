import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import '../css/AddTaskForm.css';

const AddTaskForm = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const [taskName,setTaskName] = useState('');
    const [errMsg, setErrMsg] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        let newTask = { id: todos.length + 1, name: taskName, status: 'pending'};
        if(taskName.trim().length === 0){
            setErrMsg('Task cannot be blank.');
        } else if((todos.filter(todo => todo.name.toLowerCase() === taskName.toLowerCase())).length > 0) {
            setErrMsg('Task already exists.')
        } else {
            dispatch( {type: 'ADD_NEW_TASK', payload: newTask });
            setTaskName('');
        }
    }

    return (
        <div  className='addtask-wrapper'>
           <Form className='add-form' onSubmit={onSubmit} >
                <Form.Control className='form-input' value={taskName} onChange={e => setTaskName((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1))} type="text" size="lg" placeholder="New task" />
                <Button className='submit-btn' type="submit">
                    Add
                </Button>                     
            </Form> 
            <div className='err-msg'>
                <small>{errMsg}</small>
            </div>
        </div>
    );
};

export default AddTaskForm;