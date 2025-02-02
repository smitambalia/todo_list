import { useState } from "react";

export default function Todo({
  todoData,
  isFinished,
  id,
  changeFinished,
  onDelete,
  onEdit,
}) {
  const [finished, setFinished] = useState(isFinished);
  const [updateTodo,setUpdateTodo] = useState(todoData);
  const [isUpdate,setIsUpdate] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />
      <h1> 
        {
          (isUpdate) ? 
          <input type="text" value={updateTodo} onChange={e => setUpdateTodo(e.target.value)}/> 
          : todoData
        } 
      </h1>
      <button onClick={() => {
        setUpdateTodo(updateTodo);
        setIsUpdate(!isUpdate);
        onEdit(updateTodo);
      }}> {
        !isUpdate ? "Edit" : "Save"
      }
      </button>
      <button onClick={onDelete}> Delete </button>
    </div>
  );
}
