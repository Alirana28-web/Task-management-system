import React, { useContext, useState } from 'react';
import { Context } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const Taskprovide = ({ authdata }) => { 
    const { taskdata, settaskdata } = useContext(Context);
    const [task, settask] = useState('');
    const [date, setdate] = useState('');
    const [assignto, setassignto] = useState('');
    const [desc, setdesc] = useState('');
    const [cats, setcats] = useState('');

    const onsubmit = (e) => {
        e.preventDefault();
    
        const assignedEmployee = authdata.employees.find(emp => emp.name === assignto);
    
        if (assignedEmployee) {
            const newtask = {
                task,
                date,
                desc,
                cats,
                assignto 
            };
            console.log("New task:", newtask);
    
            assignedEmployee.tasks = assignedEmployee.tasks || [];
            assignedEmployee.tasks.push(newtask);

            const taskcount = assignedEmployee.tasks[0].count + 1;
            localStorage.setItem("count", JSON.stringify(taskcount));
            localStorage.getItem("count"); 

            const updatedTasks = Array.isArray(taskdata) ? [...taskdata, newtask] : [newtask];
            settaskdata(updatedTasks); 

            localStorage.setItem('taskdata', JSON.stringify(updatedTasks)); 
           
            settask('');
            setdate('');
            setassignto('');
            setdesc('');
            setcats('');
            toast.success(`Task assigned to ${assignto}`);
        } else {
            alert("Employee not found");
        }
    };
    
    return (
        <form 
            className='border-gray-600 border-2 rounded-md bg-transparent w-full md:w-[80%] h-[300px] flex flex-col md:flex-row mx-auto z-10 p-4 md:p-8 gap-4 overflow-auto mt-5'
            onSubmit={onsubmit}
        > 
            <ToastContainer />
            <div className='flex flex-col gap-4 w-full'>
                <input 
                    type="text" 
                    className='mb-2 border-green-500 border-2 rounded-lg bg-transparent w-full md:w-80 p-2 text-white' 
                    placeholder="Task Name" 
                    value={task}
                    onChange={(e) => settask(e.target.value)}
                />
                <input 
                    type="date" 
                    className='mb-2 border-green-500 border-2 rounded-lg bg-transparent w-full md:w-80 p-2 text-white' 
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                />
                <input 
                    type="text" 
                    className='mb-2 border-green-500 border-2 rounded-lg bg-transparent w-full md:w-80 p-2 text-white' 
                    placeholder="Assigned To" 
                    value={assignto}
                    onChange={(e) => setassignto(e.target.value)}
                />
                <input 
                    type="text" 
                    className='mb-2 border-green-500 border-2 rounded-lg bg-transparent w-full md:w-80 p-2 text-white' 
                    placeholder="Description" 
                    value={desc}
                    onChange={(e) => setdesc(e.target.value)}
                />
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <textarea 
                    cols={12} 
                    rows={3}
                    className='border-green-500 border-2 rounded-lg bg-transparent w-full md:w-80 p-2 text-white' 
                    placeholder="Additional Notes..." 
                    value={cats}
                    onChange={(e) => setcats(e.target.value)}
                />
                <button className='bg-green-700 text-white w-40 border-2 border-none rounded-md p-2' type='submit'>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Taskprovide;
