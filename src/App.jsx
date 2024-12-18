import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";

function App() {
  const [allTask, setAllTask] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrowserRouter>
      <div className={ isDarkMode ? "dark" : "light" }  > 
        <h1 className="text-3xl m-5 p-2 text-center font-bold ">
          Todo Application
        </h1>
        <nav className="flex justify-center gap-x-5">
          <Link
            to="/todos"
            className="text-cyan-600 bg-slate-50 border-black border-1 px-5 py-2 rounded-lg"
          >
            Todo List
          </Link>
          <Link
            to="/add"
            className="text-cyan-600 bg-slate-50 border-black border-1 px-5 py-2 rounded-lg"
          >
            Add Todo
          </Link>
        </nav>

        <button
          onClick={toggleDarkMode}
          className="p-2 m-4 bg-cyan-200 rounded-md"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <Routes>
          <Route
            path="/todos"
            element={<TodoList allTask={allTask} setAllTask={setAllTask} isDarkMode={isDarkMode} />}
          />
          <Route
            path="/add"
            element={<AddTodo allTask={allTask} setAllTask={setAllTask} isDarkMode={isDarkMode} />}
          />
          <Route
            path="/edit/:id"
            element={<EditTodo allTask={allTask} setAllTask={setAllTask} isDarkMode={isDarkMode} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

