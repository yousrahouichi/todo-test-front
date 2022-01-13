import { Stack } from "react-bootstrap";
import Todo from "./Todo";
const Todos = ({ todos }) => {
  return (
    <>
      <h1>Todos</h1>
      <Stack gap={2} className="col-md-5 mx-auto">
        <Todo />
        <Todo />
        <Todo />
      </Stack>
    </>
  );
};

export default Todos;
