import { Form, Button, Stack } from "react-bootstrap";

const AddTodo = () => {
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <h1>Add Todo</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDesciption">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Due date</Form.Label>
          <Form.Control type="date" placeholder="Enter due date" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Stack>
  );
};

export default AddTodo;
