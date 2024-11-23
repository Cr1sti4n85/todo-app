import { useState } from "react";

function TodoInput({ handleAdd }) {
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <input
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        placeholder="Añade una tarea"
      />
      <button
        onClick={() => {
          if (!inputVal) return;
          handleAdd(inputVal);
          setInputVal("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoInput;
