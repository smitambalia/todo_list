import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import ToDoContext from "./context/ToDoContext";
import Todo from "./components/Todo/Todo";

function App() {
  const list = [
    {
      id: 1,
      todoData: "todo 1",
      finished: false,
    },
    {
      id: 2,
      todoData: "todo 2",
      finished: false,
    },
  ];
  const [todoList, settodoList] = useState(list);

  return (
    <ToDoContext.Provider value={{todoList,settodoList}}>
      <AddTodo
        updateList={
          (todo) =>
          settodoList([
            ...list,
            { id: list + 1, todoData: todo, finished: false },
          ])
        }
      />
      <TodoList/>
    </ToDoContext.Provider>
  );
}

export default App;
