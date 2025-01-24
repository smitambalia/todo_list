import Todo from "../Todo/Todo";
export default function TodoList() {
  const todoList = [
    {
      id: 1,
      todoData: "todo 1",
    },
    {
      id: 2,
      todoData: "todo 2",
    },
    {
      id: 3,
      todoData: "todo 3",
    },
  ];
  return (
    <div>
      {todoList.length > 0 &&
        todoList.map((todo) => {
          return <Todo key={todo.id} todoData={todo.todoData} />;
        })}
    </div>
  );
}
