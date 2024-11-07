import React, { useEffect } from 'react';
import AdminHeader from '../pages/AdminHeader';
import Taskprovide from '../tasks/Taskprovide';
import Employees from '../tasks/Employees';
import '../dashboard/Admin.css';

const Admin = ({ setLogin, authdata }) => {

  return (
    <div data-scroll-container>
      <div className="h-screen bg-black w-full overflow-auto">

        <div >
          <AdminHeader setLogin={setLogin} data-scroll data-scroll-speed="2" />
        </div>
        <Taskprovide  authdata={authdata} data-scroll data-scroll-direction="vertical" />
        <h1 className='text-white mt-10 text-center font-bold'>"Employee's List"</h1>
        <Employees authdata={authdata} data-scroll data-scroll-repeat />
      </div>
    </div>
  );
};

export default Admin;
