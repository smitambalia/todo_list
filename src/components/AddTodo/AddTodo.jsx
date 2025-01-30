import { useState } from "react";

export default function AddTodo({updateList}) {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input 
        type="text" 
        placeholder="add a todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
       />
      <button 
        onClick={() => 
          {
            updateList(inputText);
            setInputText("");
          }
        }> 
        Add
      </button>
    </div>
  );
} // AddTodo component
