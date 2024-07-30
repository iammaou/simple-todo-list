import { useNavigate, useParams } from "react-router-dom";
import { deleteMember } from "../services/TodoService";

const DeleteComponent = () => {
  // navigator for the router
  const navigator = useNavigate();
  // used when updating a member
  const { id } = useParams();

  // if the user clicks they do not want to delete the member
  function decline() {
    navigator("/");
  }

  // if the user decides to update the member, calls the service function that uses axios and deletes the member
  function accept(e: any) {
    e.preventDefault();
    if (id) {
      deleteMember(id)
        .then(() => {
          navigator("/");
        })
        .catch((Error) => {
          console.error(id, Error);
        });
    }
  }

  return (
    <div className="w-full sm:pt-60 pt-10">
      <div className="sm:w-1/3 w-11/12 rounded-lg pt-4 m-auto bg-white">
        <div className="text-center m-auto">
          <h1 className="sm:text-5xl text-3xl">Are you sure?</h1>
          <div className="inline-flex sm:py-10 py-6 w-full m-auto text-center justify-center sm:gap-10 gap-4">
            <button
              className="w-2/6 sm:text-2xl sm:p-2 border-black border-2 border-solid rounded-lg hover:bg-black hover:text-white"
              onClick={accept}
            >
              Yes
            </button>
            <button
              className="w-2/6 sm:text-2xl sm:p-2 border-black border-2 border-solid rounded-lg hover:bg-black hover:text-white"
              onClick={decline}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteComponent;
