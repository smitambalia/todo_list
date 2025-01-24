import Todo from "../Todo/Todo";
export default function TodoList({todoList}) {
  
  return (
    <div>
      {todoList.length > 0 &&
        todoList.map((todo) => {
          return <Todo key={todo.id} todoData={todo.todoData} />;
        })}
    </div>
  );
}
