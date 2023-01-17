import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { updateTask } from "../redux/Action";
import { useDispatch } from "react-redux";

function Update(idTask, handleClose) {
  const dispatch = useDispatch();
  const [newText, setNewText] = useState("");
  const handleChange = (e) => {
    setNewText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask(idTask,newText))
    handleClose()

  };
  return (
    <div>
      <Form
        className="container"
        style={{ width: "50%" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="task"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Update;
