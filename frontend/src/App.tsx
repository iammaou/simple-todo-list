import "./App.css";
import DeleteComponent from "./components/DeleteComponent";
import ListTodoComponent from "./components/ListTodoComponent";
import TodoComponent from "./components/TodoComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="m-0 w-full min-h-screen bg-local bg-gradient-to-bl from-gradient-start to-gradient-end">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListTodoComponent />}></Route>
          <Route path="/todo" element={<ListTodoComponent />}></Route>
          <Route path="/add" element={<TodoComponent />}></Route>
          <Route path="/update/:id" element={<TodoComponent />}></Route>
          <Route path="/delete/:id" element={<DeleteComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
