import React, { createContext, useEffect, useState } from 'react';
import { getstorage, setstorage } from '../pages/Localstorage';

const Context = createContext();

const AuthContext = ({ children }) => {
  const [authdata, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [taskdata, settaskdata] = useState([]);

  useEffect(() => {
    setstorage();
    const { employees, admin } = getstorage();
    const savedTasks = JSON.parse(localStorage.getItem('taskdata')) || [];

    if (employees && admin) {
      setData({ employees, admin });
    } else {
      console.error("Data not found in localStorage");
    }

    settaskdata(savedTasks);
    setLoading(false);
  }, []);

  return (
    <Context.Provider value={{ authdata, loading, taskdata, settaskdata }}>
      {children}
    </Context.Provider>
  );
};

export { Context };
export default AuthContext;
