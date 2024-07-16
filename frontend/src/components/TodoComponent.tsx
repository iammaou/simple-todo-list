import { useEffect, useState } from "react";
import { getMember, saveMember, updateMember } from "../services/TodoService";
import { useNavigate, useParams } from "react-router-dom";

const TodoComponent = () => {
  // hook for the text which is sent to the backed
  const [text, setText] = useState();
  // used when updating a member
  const { id } = useParams();
  // for checking if the field is filled
  const [errors, setErrors] = useState({
    text: "",
  });
  // navigator for the router
  const navigator = useNavigate();
  useEffect(() => {
    if (id) {
      getMember(id)
        .then((Response) => setText(Response.data.text))
        .catch((errors) => console.error(errors));
    }
  }, [id]);

  // gets the text from the input field and puts it inside the object
  function handleText(e: any) {
    setText(e.target.value);
  }

  // calls the service function that uses axios and eighter updates or creates a new member
  function saveOrUpdateTodo(e: any) {
    e.preventDefault(); // used so the button doesn't get triggered automaticaly

    const todo = { text };
    if (validateForm()) {
      // checks if the input field is empty
      if (id) {
        // checks if an id is provided, if it is we update the member
        updateMember(id, todo)
          .then((Response) => {
            console.log(Response.data);
            navigator("/");
          })
          .catch((errors) => {
            console.error(errors);
          });
      } else {
        // else it creates a new one
        saveMember(todo)
          .then(() => {
            navigator("/");
          })
          .catch((errors) => {
            console.error(errors);
          });
      }
    }
  }

  // checks if the input field is empty
  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (text == undefined) {
      errorsCopy.text = "This field is required";
      valid = false;
    } else {
      errorsCopy.text = "";
      valid = true;
    }

    setErrors(errorsCopy);
    return valid;
  }

  // use so the user knows if they are on the create or update page
  function title() {
    if (id) {
      return <h1 className="font-bold text-center p-4">Update Member</h1>;
    } else
      return <h1 className="font-bold text-center p-4">Create New Member</h1>;
  }

  return (
    <div className="text-3xl w-full pt-20">
      <div className="bg-white m-auto w-2/6 rounded-lg">
        {title()}
        <div className="h-0.5 w-11/12 m-auto bg-slate-300"></div>
        <div className="px-4">
          <input
            className="border-solid border-slate-400 border-2 rounded-lg w-full text-slate-400"
            type="text"
            placeholder="Text"
            value={text}
            onChange={handleText}
          ></input>
          {<h5 className="text-red-600 text-xl">{errors.text}</h5>}
        </div>
        <div className="py-2 m-auto w-1/6 text-center">
          <button
            className="text-2xl p-2 border-black border-2 border-solid rounded-lg"
            onClick={saveOrUpdateTodo}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
