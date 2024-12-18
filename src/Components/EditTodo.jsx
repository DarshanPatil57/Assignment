import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function EditTodo({ allTask, setAllTask, isDarkMode }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = allTask[id];

  const [task, setTask] = useState(todo.task);
  const [description, setDescription] = useState(todo.description);
  const [priority, setPriority] = useState(todo.priority);
  const [status, setStatus] = useState(todo.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    const update = [...allTask];
    update[id] = { task, description, priority, status };
    setAllTask(update);
    navigate("/todos");
  };

  return (
    <div className={`mt-10 w-full flex items-center justify-center ${isDarkMode ? "dark" : "light"}`}>
      <form onSubmit={handleSubmit} className="w-96 flex flex-col items-center gap-y-4">
        <input
          required
          className={`bg-slate-50 border-e-blue-100 border-2 w-full px-4 py-2 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"}`}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          className={`bg-slate-50 border-e-blue-100 border-2 w-full px-4 py-2 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"}`}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className={`bg-slate-50 border-e-blue-100 border-2 w-full px-4 py-2 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"}`}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          className={`bg-slate-50 border-e-blue-100 border-2 w-full px-4 py-2 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"}`}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <div className="w-full flex justify-center">
          <button className="p-3 m-2 bg-cyan-200 rounded-md text-center">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTodo;
