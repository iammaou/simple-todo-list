import { useEffect, useState } from "react";
import { listMembers } from "../services/TodoService";
import { useNavigate } from "react-router-dom";

const ListTodoComponent = () => {
  // navigator for the router
  const navigator = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [todo, setTodo] = useState<any[]>([]);

  useEffect(() => {
    getAllMembers();
  }, []);

  // sorter so the members go by their id
  function sortResponse(res: any) {
    return res.sort((a: any, b: any) => {
      if (a.id > b.id) {
        return 1;
      } else if (a.id < b.id) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  // calls the service function that uses axios and returns all of the members inside the db
  function getAllMembers() {
    listMembers()
      .then((Response) => {
        var temp = sortResponse(Response.data);
        setTodo(temp);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // calls the service function that uses axios, goes to a seperate page to create a new member
  function addNewTodoComponent() {
    navigator("/add");
  }
  // calls the service function that uses axios and updates a member
  function updateTodoComponent(id: Number) {
    navigator("/update/:" + id);
  }

  // calls the service function that uses axios and deletes a member
  function deleteTodoComponent(id: Number) {
    navigator("/delete/:" + id);
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
              <td className="text-xl py-1 inline-flex w-full">
                <p className="m-auto pl-28">{data.text}</p>{" "}
                <button
                  className="pr-1 float-right w-[4%]"
                  onClick={() => updateTodoComponent(data.id)}
                >
                  edit
                </button>{" "}
                <button
                  className="pr-1 w-[6%]"
                  onClick={() => deleteTodoComponent(data.id)}
                >
                  delete
                </button>
              </td>
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
