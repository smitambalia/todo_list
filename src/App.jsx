import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import Todo from "./components/Todo/Todo";
import TodoList from "./components/TodoList/TodoList";

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
    <>
      <AddTodo
        updateList={(todo) =>
          settodoList([
            ...list,
            { id: list + 1, todoData: todo, finished: false },
          ])
        }
      />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
