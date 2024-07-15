import React, { useEffect, useState } from "react";
import { listMembers } from "../services/TodoService";
import { useNavigate } from "react-router-dom";

const ListTodoComponent = () => {
  const navigator = useNavigate();

  function getAllMembers() {
    listMembers()
      .then((Response) => {
        setTodo(Response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [todo, setTodo] = useState<any[]>([]);

  useEffect(() => {
    getAllMembers();
  }, []);

  function addNewTodoComponent() {
    navigator("/add");
  }
  return (
    <div className="pt-20 w-full font-candara">
      <table className="m-auto w-2/3 text-center bg-white rounded-lg">
        <thead>
          <tr>
            <th className="py-2 text-4xl">To-Do:</th>
          </tr>
          <tr>
            <th className="h-0.5 w-11/12 m-auto bg-slate-300"></th>
          </tr>
        </thead>
        <tbody>
          {todo.map((data) => (
            <tr key={data.id}>
              <td className="text-xl">{data.text}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="m-auto w-2/12">
        <button
          className="text-3xl bg-white m-auto text-center w-full mt-5 rounded-lg"
          onClick={addNewTodoComponent}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ListTodoComponent;
