import React, { useState } from "react";

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')

  const handleLogin = ()=>{
    console.log({email,password})
  }

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
      <div className="h-[40vh] w-[25vw] p-4 rounded-xl flex flex-col bg-gray-400">
        <h3 className="text-center text-2xl">Login</h3>
        <label htmlFor="email" className="mx-8 mt-12">
          Email:
        </label>
        <input
          type="email"
          className="bg-white rounded-xs py-1 mx-8 my-2 px-1"
          placeholder="Enter email"
          name="email"
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label htmlFor="password" className="mx-8">
          Password:
        </label>
        <input
          type="password"
          className="bg-white rounded-xs mx-8 my-2 py-1 px-1"
          placeholder="Enter password"
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <div className="text-center">
          <button className="bg-blue-400 px-8 py-2 rounded-xl mt-6 hover:bg-blue-200" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
