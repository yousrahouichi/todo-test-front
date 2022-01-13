import { Card, Button, Row, Col, Container } from "react-bootstrap";
const Todo = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>Todo Title</Card.Title>
            </Col>
            <Col>
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                Thu 13 Jan
              </Card.Subtitle>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>Todo description</Card.Text>
            </Col>
            <Col>
              <Button>Checkoff Todo</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Todo;
