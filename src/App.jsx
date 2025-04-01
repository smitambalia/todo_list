import { useEffect, useState } from "react";
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
  const [counterCondition, setCounterCondition] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setCounterCondition((condition) => !condition);
    }, 5000);
  }, []);

  return (
    <>
    {/* <ToDoContext.Provider value={{ todoList, settodoList }}>
      <AddTodo
        updateList={(todo) =>
          settodoList([
            ...list,
            { id: list + 1, todoData: todo, finished: false },
          ])
        }
      />
      <TodoList />
      {counterCondition && <Counter> </Counter>}
      
    </ToDoContext.Provider>  */}
    
    <div style={{display : "flex"}}>
    
    <Card InnnerContent={
       <div style={{color : "green"}}>
         How do you want to post your todo?
         <br/>
         <input type="text" />
       </div>
      } />
      <Card InnnerContent={"hi there"} />
    </div>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

    useEffect(function () {
    setInterval(function ()  {
      console.log("from inside the set interval")
      setCount(count => count + 1);
    }, 1000)
  },[]);

  return <h1>{count}</h1>;
}

function Card({ InnnerContent }) {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: 10,
        borderRadius: 10,
        margin: 10,
      }}
    >
      {InnnerContent}
    </div>
  );
}
export default App;
