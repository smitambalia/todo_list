import Todo from "../Todo/Todo";
export default function TodoList({todoList,updateList}) {
  
  return (
    <div>
      {todoList.length > 0 &&
        todoList.map((todo) => {
          return <Todo 
                    key={todo.id} 
                    id={todo.id} 
                    todoData={todo.todoData} 
                    isFinished={todo.finished} 
                    changeFinished={
                      (isFinished) => {
                        const newTodoList = todoList.map((todoItem)=> {
                          if(todoItem.id == todo.id){
                            todo.finished = isFinished;
                          }
                          return todoItem;
                        });

                        updateList(newTodoList);
                      }
                    }
                />;
        })}
    </div>
  );
}
