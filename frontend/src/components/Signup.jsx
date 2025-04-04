import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = ()=>{
    console.log({name,email,password,confirmPassword})
  }

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
      <div className="h-[55vh] w-[25vw] p-4 rounded-xl flex flex-col bg-gray-400">
        <h3 className="text-center text-2xl">Sign Up</h3>
        <label htmlFor="name" className="mx-8 mt-12">
          Name:
        </label>
        <input
          type="text"
          className="bg-white rounded-xs py-1 mx-8 my-2 px-1"
          placeholder="Enter name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="mx-8">
          Email:
        </label>
        <input
          type="email"
          className="bg-white rounded-xs py-1 mx-8 my-2 px-1"
          placeholder="Enter email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="mx-8">
          Password:
        </label>
        <input
          type="password"
          className="bg-white rounded-xs mx-8 my-2 py-1 px-1"
          placeholder="Enter password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmpassword" className="mx-8">
          Confirm password:
        </label>
        <input
          type="password"
          className="bg-white rounded-xs mx-8 my-2 py-1 px-1"
          placeholder="Enter password"
          name="confirmpassword"
          id="confirmpassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="text-center">
          <button className="bg-blue-400 px-8 py-2 rounded-xl mt-8 hover:bg-blue-200" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
