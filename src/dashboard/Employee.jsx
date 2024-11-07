import React, { useContext, useEffect, useState } from 'react';
import Header from '../pages/Header';

import New from '../tasks/New';
import Tasklist from '../tasks/Tasklist';

export const onAddTask = (newTask) => {
  setTasks((prevTasks) => [...prevTasks, newTask]); 
};

const Employee = ({ setLogin, authdata ,foundEmployee}) => {


  return (
    <div className='bg-black h-screen w-100 text-white overflow-auto'>
      <Header setLogin={setLogin} authdata={authdata} foundEmployee={foundEmployee} />
      <Tasklist foundEmployee={foundEmployee}/>
      <New foundEmployee={foundEmployee}/>
    </div>
  );
};

export default Employee;
