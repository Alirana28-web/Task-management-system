import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const onchange = (e) => {
    setemail(e.target.value);
  };

  const onchanges = (e) => {
    setpass(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    handleLogin(email,pass)
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black ">
      <h1 className="text-white absolute top-10 text-4xl sm:text-1xl font-bold sm:text-center">"Task Management System"</h1>
      <form
        onSubmit={onsubmit}
        className="border border-green-400 rounded-xl bg-transparent w-96 p-8"
        >
        <h1 className="text-center text-white text-2xl font-semibold mb-6">
          Login
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={onchange}
            className="w-full p-2 bg-transparent border border-gray-400 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={onchanges}
            className="w-full p-2 bg-transparent border border-gray-400 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-2 bg-green-700 text-white rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
