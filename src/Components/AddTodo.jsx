import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTodo({ allTask, setAllTask }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('Pending');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    const today = new Date().toISOString().split('T')[0]; 
    if (task || !description) {
      if (dueDate && dueDate < today) {
        alert("Please select a valid future due date.");
        return;
      }

      
      setAllTask([
        ...allTask,
        { task, description, priority, status, dueDate: dueDate || null }
      ]);
      navigate("/todos");
    } 

    // console.log(task);
    // console.log(description);
    
    

    setTask('');
    setDescription('');
    setPriority('Low');
    setStatus('Pending');
    setDueDate('');
  };

  return (
    <div className="mt-10 w-full flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-96 flex flex-col items-center gap-y-4">
        <input
          required
          className="bg-slate-50 border-e-blue-100 border-2 w-full px-4 py-2 rounded-lg"
          type="text"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          className="bg-slate-50 border-e-blue-100 border-2 w-full px-4 py-2 rounded-lg"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="bg-slate-50 border-e-blue-100 border-2 w-full px-4 py-2 rounded-lg"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          className="bg-slate-50 border-e-blue-100 border-2 w-full px-4 py-2 rounded-lg"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        
        
        <input
          className="bg-slate-50 border-e-blue-100 border-2 w-full px-4 py-2 rounded-lg"
          type="date"
          value={dueDate}
          placeholder=""
          onChange={(e) => setDueDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}  
        />
        
        <div className="w-full flex justify-center">
          <button className="p-3 m-2 bg-cyan-200 rounded-md text-center">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
