import { Form, Button, Stack } from "react-bootstrap";
import { useState } from "react";
import validator from "validator";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const validate = (value) => {
    if (validator.isEmail(value)) {
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid Email");
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      const data = { email: email };

      axios
        .post("http://127.0.0.1:5000/user", data)
        .then((response) => console.log(response.status))
        .catch((error) => console.log(error));
    }
  }

  function handleChange(e) {
    validate(e.target.value);
    setEmail(e.target.value);
  }
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <h1>Signin</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">{errorMessage}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Stack>
  );
};

export default Signin;
