import { Form, Button, Stack, Modal } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleSubmit(e) {
    e.preventDefault();
    if (title) {
      const data = { title: title, description: description, date: date };

      axios
        .post("http://127.0.0.1:5000/todo", data)
        .then((response) => console.log(response.status))
        .catch((error) => console.log(error));
    } else {
      handleShow();
    }
  }

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleChangeDate(e) {
    setDate(e.target.value);
  }

  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <h1>Add Todo</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            onChange={handleChangeTitle}
            value={title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDesciption">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            onChange={handleChangeDescription}
            value={description}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Due date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter due date"
            onChange={handleChangeDate}
            value={date}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Title is required</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Stack>
  );
};

export default AddTodo;
