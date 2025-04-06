import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import ToDoContext from "./context/ToDoContext";
import Todo from "./components/Todo/Todo";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Card from "./components/Cards/Card";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<h1>Home</h1>} />
            <Route
              path="/cards"
              element={
                <div style={{ display: "flex" }}>
                  <Card>
                    <div style={{ color: "green" }}>
                      How do you want to post your todo?
                      <br />
                      <input type="text" />
                    </div>
                  </Card>
                  <Card>Hi there</Card>
                </div>
              }
            />
            <Route
              path="/todo"
              element={
                <ToDoContext.Provider value={{ todoList, settodoList }}>
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
                </ToDoContext.Provider>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    setInterval(function () {
      console.log("from inside the set interval");
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>{count}</h1>;
}

function ErrorPage() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}

function Layout() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <nav>
          <span>
            <Link to="/">Home</Link>{" "}
          </span>

          <span>
            <Link to="/todo">Todo</Link>{" "}
          </span>
          <span>
            <Link to="/cards">Cards</Link>{" "}
          </span>
        </nav>
        <div style={{ height: "90vh" }}>
          <Outlet />
        </div>
        Footer
      </div>
    </>
  );
}
export default App;
