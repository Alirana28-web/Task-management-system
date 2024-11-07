import React from "react";
import { BiLogIn, BiSolidHand } from "react-icons/bi";

const Header = ({ setLogin,foundEmployee}) => {
  return (
    <div className="h-20 text-white w-screen flex justify-between p-8 bg-black border-b-2">
      <div>
        <h1 className='font-bold'>Hi! {foundEmployee.name} </h1> 
   
      </div>
      <div>
        <h1 className="font-bold">"Your Tasks"</h1>
      </div>
      <div>
        <button
          className="flex items-center text-white border-green cursor-pointer "
          onClick={() => {
            localStorage.removeItem("Login");
            setLogin(null); 
          }}
        >
          <BiLogIn className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
