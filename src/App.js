import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Navig from "./components/Navig";
import AddTodo from "./components/AddTodo";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navig />
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/addTodo" element={<AddTodo />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
