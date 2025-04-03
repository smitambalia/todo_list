import Todo from "../Todo/Todo";
import ToDoContext from "../../context/ToDoContext";
import { useContext } from "react";
export default function TodoList() {
  const { todoList, settodoList } = useContext(ToDoContext);
  return (
    <div>
      {todoList.length > 0 &&
        todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              todoData={todo.todoData}
              isFinished={todo.finished}
              changeFinished={(isFinished) => {
                const newTodoList = todoList.map((todoItem) => {
                  if (todoItem.id == todo.id) {
                    todo.finished = isFinished;
                  }
                  return todoItem;
                });

                settodoList(newTodoList);
              }}
              onDelete={() => {
                const newTodoList = todoList.filter((todoItem) => {
                  return todoItem.id !== todo.id;
                });
                settodoList(newTodoList);
              }}
              onEdit={(todoText) => {
                const newTodoList = todoList.map((todoItem) => {
                  if (todoItem.id == todo.id) {
                    todo.todoData = todoText;
                  }
                  return todoItem;
                });

                settodoList(newTodoList);
              }}
            />
          );
        })}
    </div>
  );
}
