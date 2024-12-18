import { Link } from "react-router-dom";

function TodoList({ allTask, setAllTask,isDarkMode }) {
  const handleDelete = (index) => {
    const Tasks = [...allTask];
    Tasks.splice(index, 1);
    setAllTask(Tasks);
  };

  return (
    <div className={`p-4 mt-5 bg-cyan-50 flex justify-center ${isDarkMode ? "dark" : "light"}`}>
      {allTask.length > 0 ? (
        <div className="p-4 mt-5 w-full">
          {allTask.map((taskItem, index) => (
            <div
              key={index}
              className={`flex flex-col p-4 mb-4 rounded-lg  ${isDarkMode ? "bg-gray-700" : "bg-white"}`}
            >
              <div className="m-5 flex items-center justify-between">
                <div className="w-20">
                  <h2 className="font-sans bg-slate-100 text-black px-5 py-1 rounded-md">
                    Task
                  </h2>
                  <h3 className="text-2xl">{taskItem.task}</h3>
                  <h3
                    className={`text-base ${
                      taskItem.priority === "High"
                        ? "text-red-500"
                        : taskItem.priority === "Medium"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {taskItem.priority}
                  </h3>
                  <h3
                    className={`text-base ${
                      taskItem.status === "Pending"
                        ? "text-red-500"
                        : taskItem.status === "In Progress"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {taskItem.status}
                  </h3>
                  
                  {taskItem.dueDate ? (
                    <h3 className="text-base text-gray-500">
                      Due: {new Date(taskItem.dueDate).toLocaleDateString()}
                    </h3>
                  ) : (
                    <h3 className="text-base text-gray-500">No Due Date</h3>
                  )}
                </div>
                <div className="w-40">
                  <h2 className="font-sans bg-slate-100 text-black px-5 py-1 rounded-md">
                    Description
                  </h2>
                  <h3 className="text-base">{taskItem.description}</h3>
                </div>
              </div>

              <div className="flex justify-end gap-x-4">
                <Link
                  to={`/edit/${index}`}
                  className="bg-blue-100 px-4 py-2 rounded-lg"
                >
                  Edit
                </Link>
                <button
                  className="bg-red-100 px-4 py-2 rounded-lg"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-center w-full font-mono">No Todo Added</h1>
      )}
    </div>
  );
}

export default TodoList;
