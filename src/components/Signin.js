import { Form, Button, Stack } from "react-bootstrap";
const Signin = () => {
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <h1>Signin</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Stack>
  );
};

export default Signin;
