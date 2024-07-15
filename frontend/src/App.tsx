import "./App.css";
import ListTodoComponent from "./components/ListTodoComponent";
import TodoComponent from "./components/TodoComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="m-0 h-screen bg-gradient-to-bl from-gradient-start to-gradient-end">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListTodoComponent />}></Route>
          <Route path="/todo" element={<ListTodoComponent />}></Route>
          <Route path="/add" element={<TodoComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
