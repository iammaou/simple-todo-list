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
    <div className="w-full pt-60">
      <div className="w-1/3 rounded-lg pt-4 m-auto bg-white">
        <div className="text-center m-auto">
          <h1 className="text-5xl font-bold">Are you sure?</h1>
          <div className="inline-flex py-10 w-full m-auto text-center justify-center gap-10">
            <button
              className="w-2/6 text-2xl p-2 border-black border-2 border-solid rounded-lg"
              onClick={accept}
            >
              Yes
            </button>
            <button
              className="w-2/6 text-2xl p-2 border-black border-2 border-solid rounded-lg"
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
