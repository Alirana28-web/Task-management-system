import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/AuthContext';
import { Button, Modal } from 'antd';

const New = ({ foundEmployee }) => {
    const { taskdata, settaskdata } = useContext(Context);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

    useEffect(() => {
        if (Array.isArray(taskdata) && foundEmployee) {
            const tasks = taskdata.filter(task => task.assignto === foundEmployee.name);
            setFilteredTasks(tasks);
        } else {
            setFilteredTasks([]);
        }
    }, [taskdata, foundEmployee]);

    const handleMarkAsDone = (taskIndex) => {
        setSelectedTaskIndex(taskIndex);
        setModalVisible(true);
    };

    const handleOk = () => {
        if (selectedTaskIndex !== null) {
            const updatedTasks = filteredTasks.filter((_, index) => index !== selectedTaskIndex);
            setFilteredTasks(updatedTasks);

            if (Array.isArray(taskdata)) {
                const updatedTaskData = taskdata.filter((_, index) => index !== selectedTaskIndex);
                settaskdata(updatedTaskData);
                localStorage.setItem('taskdata', JSON.stringify(updatedTaskData));
            }

            if (foundEmployee.tasks && foundEmployee.tasks.length > 0) {
                foundEmployee.tasks[0].count -= 1;
            }
        }
        setModalVisible(false);
        setSelectedTaskIndex(null);
    };

    const handleCancel = () => {
        setModalVisible(false);
        setSelectedTaskIndex(null);
    };

    return (
        <div>
            <h1 className='text-center font-bold mt-10 text-white'>
                New Tasks for {foundEmployee?.name}
            </h1>

            <div className='flex gap-4 overflow-auto w-0.8/4'>
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((task, index) => (
                        <div key={index} className='p-4 mb-4 border border-green-500 rounded-lg mt-2 bg-green-400'>
                            <h3 className='font-bold'>{task.task}</h3>
                            <p>Date: {task.date}</p>
                            <p>Description: {task.desc}</p>
                            <p>Notes: {task.cats}</p>
                            <Button onClick={() => handleMarkAsDone(index)}>Mark as Done</Button>
                        </div>
                    ))
                ) : (
                    <p className='text-center mt-10'>No more new tasks for {foundEmployee?.name}</p>
                )}
            </div>

            <Modal
                title="Confirmation"
                visible={modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="OK"
                cancelText="Cancel"
            >
                <p>Are you sure you want to mark this task as done?</p>
            </Modal>
        </div>
    );
};

export default New;
