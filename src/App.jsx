import { useContext, useEffect, useState } from 'react';
import './App.css';
import AuthContext, { Context } from './context/AuthContext';
import Login from './pages/Login';
import Employee from './dashboard/Employee';
import Admin from './dashboard/Admin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [login, setLogin] = useState(null);
  const { authdata, loading } = useContext(Context);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const loginData = localStorage.getItem("Login");
    const userData = localStorage.getItem("User");

    if (loginData && userData) {
      setLogin(JSON.parse(loginData).role);
      setCurrentUser(JSON.parse(userData));
    }
  }, []); 

  const handleLogin = (email, pass) => {
    if (authdata && authdata.employees && authdata.admin) {
      const foundEmployee = authdata.employees.find((e) => e.email === email && e.password === pass);

      if (foundEmployee) {
        setLogin('user');
        setCurrentUser(foundEmployee);
        localStorage.setItem("User", JSON.stringify(foundEmployee));
        localStorage.setItem("Login", JSON.stringify({ role: 'user' }));
        toast.success("Employee logged in");
      } else if (authdata.admin.email === email && authdata.admin.pass === pass) {
        setLogin('admin');
        setCurrentUser(authdata.admin);
        localStorage.setItem("User", JSON.stringify(authdata.admin));
        localStorage.setItem("Login", JSON.stringify({ role: 'admin' }));
        
      } 
    }
  };



  return (
    <AuthContext> 
     
      <ToastContainer position="top-right" autoClose={3000} />
    
      {!login ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <>
          {login === 'user' && <Employee setLogin={setLogin} user={currentUser} authdata={authdata} foundEmployee={currentUser} />} 
          {login === 'admin' && <Admin setLogin={setLogin} authdata={authdata} />}    
        </>
      )}

      <div className="fixed bottom-4 right-4">

      </div>
    </AuthContext>
  );
}

export default App;
