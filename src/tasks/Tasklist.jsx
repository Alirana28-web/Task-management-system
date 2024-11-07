import React, { useContext } from 'react';
import { Context } from '../context/AuthContext';
import { Button } from 'antd';
const New = ({ foundEmployee }) => {
    const { taskdata } = useContext(Context); 

    return (
        <div className="text-white overflow-y-auto">
            {taskdata ? (
     <div className="flex text-white">
     <div className="flex flex-col justify-center items-center border-2 rounded-md mx-4 bg-blue-500 my-4 w-full sm:w-2/4 h-60 p-4 text-center overflow-auto">
         <h1 className="text-lg font-bold mb-2">Task</h1>
         <div className="font-bold text-lg">"{foundEmployee.tasks[0].taskTitle}"</div>
         <div className="mt-4">{foundEmployee.tasks[0].description}</div>
         
         <div className="flex flex-col gap-4 mt-6">
             <Button className="bg-green-600 text-white border-none px-4 py-2 rounded">Mark as Completed</Button>
             <Button className="bg-red-600 text-white border-none px-4 py-2 rounded">Cancel</Button>
         </div>
     </div>

                  { foundEmployee.tasks[0].count > 0 ?
                    <div className="flex flex-col justify-center items-center text-black border-2 rounded-md mx-4 bg-yellow-500 my-4 w-2/4 h-60 p-4 text-center">
                        <div className="font-bold text-lg text-white">Total tasks: {foundEmployee.tasks[0].count}</div>
                        <div className="mt-4"></div>
                    </div>
                    : 
                    <p className="flex flex-col justify-center items-center border-2 rounded-md mx-4 bg-yellow-500 my-4 w-2/4 h-60 p-4 text-center text-white">No more new tasks</p>
                  }
                </div>
            ) : (
                <p className="text-white">No task data available.</p>
            )}
        </div>
    );
}

export default New;
