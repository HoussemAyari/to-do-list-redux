import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {addTask, ADD_TASK} from '../redux/Action';
import { useDispatch } from 'react-redux';

function ADD() {
  const dispatch = useDispatch()
  const [newTask,setNewTask] = useState({id:"",text:"", done :false})
  const handelChange=(e)=>{
    setNewTask({...newTask, id:uuidv4(), text:e.target.value})
  }
  const handelSubmit=(event)=>{
    event.preventDefault();
    dispatch(addTask(newTask))
    setNewTask({...newTask, id:uuidv4(), text:"", done :false})
  }
  
  return (
    <div>
    <Form className='container' style={{width:"50%"}} onSubmit={handelSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Task</Form.Label>
      <Form.Control type="text" placeholder="task" onChange={handelChange} value={newTask.text}/>
   
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </div>
  )
}

export default ADD