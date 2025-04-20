import { createContext, useEffect, useRef, useState, useContext } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import ToDoContext from "./context/ToDoContext";
import Todo from "./components/Todo/Todo";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Card from "./components/Cards/Card";
import { Countdown } from "./components/Countdown/Countdown";
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
                  {/* {counterCondition && <Counter> </Counter>} */}
                </ToDoContext.Provider>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/clock" element={<Clock />} />
            <Route path="/smartbulb" element={<SmartBulb />} />
            <Route path="/countdown" element={<Countdown />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


/**
 * Create a context for the smart bulb
 * The context will provide the state and functions to control the smart bulb
 * The context will be used in the SmartBulb component
 */
const SmartBulbContext = createContext();

function SmartBulbProvider({ children }) {
  const [isOn, setIsOn] = useState(false);
  /**
   * set Context provider
   * @param {boolean} isOn - The state of the smart bulb
   * @param {function} setIsOn - The function to set the state of the smart bulb
   */

  return (
    <SmartBulbContext.Provider value={{ isOn: isOn, setIsOn: setIsOn }}>
      {children}
    </SmartBulbContext.Provider>
  );
}

function SmartBulb() {
  return (
    <>
      <SmartBulbProvider>
        <SmartBulbStatus />
        <SmartBulbButton />
      </SmartBulbProvider>
    </>
  );
}

function SmartBulbButton() {
  const { setIsOn } = useContext(SmartBulbContext);
  return <button onClick={() => setIsOn((isOn) => !isOn)}> toggle </button>;
}

function SmartBulbStatus() {
  const { isOn } = useContext(SmartBulbContext);
  return <div> {isOn ? "bulb on" : "bulb off"} </div>;
}

function Clock() {
  const [currentCount, setCurrentCount] = useState(0);
  let [timer, setTimer] = useState(0);
  const timerRef = useRef(0);

  function startClock() {
    let value = setInterval(function () {
      setCurrentCount((currentCount) => currentCount + 1);
    }, 1000);
    timerRef.current = value;
  }

  function clearClock() {
    clearInterval(timerRef.current);
  }
  return (
    <div>
      {currentCount}
      <button onClick={startClock}> Start Clock </button>
      <button onClick={clearClock}> Stop Clock </button>
    </div>
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

function SignUp() {
  const inputRef = useRef(null);
  function getFocus() {
    inputRef.current.focus();
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <input ref={inputRef} type={"text"} />
      </div>
      <div>
        <input type={"text"} />
      </div>
      <div>
        <button onClick={getFocus}> Submit </button>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <>
          <span>
            <Link to="/">Home</Link>
          </span>{" "}
          |
          <span>
            <Link to="/todo">Todo</Link>
          </span>{" "}
          |
          <span>
            <Link to="/cards">Cards</Link>
          </span>{" "}
          |
          <span>
            <Link to="/signup">Sign Up</Link>
          </span>
          |
          <span>
            <Link to="/clock">Clock</Link>
          </span>
          |
          <span>
            <Link to="/smartbulb">Smart Bulb</Link>
          </span>
          |
          <span>
            <Link to="/countdown">Countdown</Link>
          </span>
        </>
        <div style={{ height: "90vh" }}>
          <Outlet />
        </div>
        Footer
      </div>
    </>
  );
}
export default App;
