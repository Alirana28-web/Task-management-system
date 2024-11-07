import React from "react";

const Employees = ({ authdata }) => {
  
  return (
    <div className="border-gray-600 border-2 rounded-md bg-transparent m-4 w-full md:w-[90%] h-auto flex flex-col z-10 p-4 md:p-8 gap-4 overflow-auto overflow-x-hidden mt-5 mx-auto sm:flex-col sm:w-full"> 
      <div className="text-white flex  gap-4 md:gap-6 overflow-x-auto">
        <h1 className="text-center font-bold">Employees</h1>
        <h1 className="flex-1 text-center font-bold ">Tasks</h1>
        <h1 className="flex-1 text-center font-bold">TaskCount</h1>
        <h1 className="flex-1 text-center font-bold">Active</h1>
        <h1 className="flex-1 text-center font-bold">Complete</h1>
      </div>
      <div className="flex flex-col gap-4 mt-6 overflow-auto">
        {authdata.employees.map((employee, index) => (
          <div key={index} className="text-white flex flex-row gap-1 w-full sm:overflow-auto sm:gap-5"> 
            <p className="flex-1">{employee.name}</p>
            <div className="flex-1">
              {employee.tasks.map((task, taskIndex) => (
                <p className="sm:gap-5" key={taskIndex}>{task.taskTitle}</p>
              ))}
            </div>
            <p className="flex-1 text-center sm:overflow-auto">{employee.tasks[0].count}</p>
            <p className="flex-1 text-center">
              {employee.tasks.some(task => task.active) ? "Yes" : "No"}
            </p>
            <p className="flex-1 text-center">
              {employee.tasks.some(task => task.completed) ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
