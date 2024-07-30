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
    <div className="xl:pt-20 pt-7 md:pt-12 w-full font-candara">
      <table className="m-auto xl:w-2/3 w-10/12 text-center bg-white rounded-lg">
        <thead>
          <tr>
            <th className="py-2 xl:text-4xl text-2xl">To-Do:</th>
          </tr>
          <tr>
            <th className="h-0.5 w-11/12 m-auto bg-slate-300"></th>
          </tr>
        </thead>
        <tbody>
          {todo.map((data) => (
            <tr key={data.id}>
              <td className="text-xl py-4 grid grid-cols-12 w-full">
                <p className="m-auto xl:pl-28 col-span-9 sm:col-span-10 lg:col-span-11 break-all px-4">
                  {data.text}
                </p>{" "}
                <div className="grid col-span-3 sm:col-span-2 lg:col-span-1 gap-2 pr-2">
                  <button
                    className="w-full hover:bg-black hover:text-white rounded-lg p-2"
                    onClick={() => updateTodoComponent(data.id)}
                  >
                    edit
                  </button>{" "}
                  <button
                    className="w-full hover:bg-black hover:text-white rounded-lg p-2"
                    onClick={() => deleteTodoComponent(data.id)}
                  >
                    delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="m-auto w-1/3 pt-5">
        <button
          className="xl:text-3xl h-[40px] text-xl bg-white m-auto text-center w-full xl:mt-5 rounded-lg hover:bg-black hover:text-white pb-5"
          onClick={addNewTodoComponent}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ListTodoComponent;
