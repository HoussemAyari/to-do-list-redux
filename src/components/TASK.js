import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleteTask , doneTask} from "../redux/Action";
import Modal from "react-bootstrap/Modal";
import Update from "./Update";
import Form from 'react-bootstrap/Form';


function TASK({ task }) {
  const dispatch = useDispatch();
  const handelDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handelDoneUndone = ()=>{
dispatch(doneTask(task.id))
}

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title style={{textDecoration:task.done? "line-through":""}}> {task.text} </Card.Title>;
          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="done" onClick={handelDoneUndone} />
      </Form.Group>
          
          <Button variant="danger" onClick={handelDelete}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleShow}>
            update
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Update idTask={task.id} handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TASK;
