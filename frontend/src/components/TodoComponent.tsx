import React, { useState } from "react";
import { saveMember } from "../services/TodoService";
import { useNavigate } from "react-router-dom";

const TodoComponent = () => {
  const [text, setText] = useState();
  const navigator = useNavigate();

  const [errors, setErrors] = useState({
    text: "",
  });

  function handleText(e: any) {
    setText(e.target.value);
  }

  function saveTodo(e: any) {
    e.preventDefault();

    const todo = { text };
    if (validateForm()) {
      saveMember(todo).then(() => {
        navigator("/");
      });
    }
  }

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

  return (
    <div className="text-3xl w-full pt-20">
      <div className="bg-white m-auto w-2/6 rounded-lg">
        <h1 className="font-bold text-center p-4">Create New Member</h1>
        <div className="h-0.5 w-11/12 m-auto bg-slate-300"></div>
        <div className="px-4">
          <input
            className="border-solid border-slate-400 border-2 rounded-lg w-full"
            type="text"
            placeholder="Text"
            value={text}
            onChange={handleText}
          ></input>
          {<h5 className="text-red-600 text-xl">{errors.text}</h5>}
        </div>
        <div className="py-2 m-auto w-1/6 text-center">
          <button
            className="border-solid text-white bg-black border-black border-2 rounded-lg p-2"
            onClick={saveTodo}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
