import React from "react";
import { BiLogIn } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";

const AdminHeader = ({ setLogin, authdata }) => {

  const logout = () => {
    setLogin(localStorage.removeItem("Login"));
    toast.success("Admin logged out");
  };

  return (
    <div className="h-30 text-white w-full flex p-8 gap-6 justify-between items-center">
      <ToastContainer />
      <div className="flex-shrink-0">
        <h1>Hi! Admin</h1>
      </div>
      <div className="flex-grow text-center">
        <h1 className="font-extrabold">"Create Tasks"</h1>
      </div>
      <div className="flex-shrink-0">
        <button
          className="flex items-center text-white cursor-pointer"
          onClick={logout}
        >
          <BiLogIn className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
