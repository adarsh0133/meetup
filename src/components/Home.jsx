import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [input, setinput] = useState("");
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate(`/room/${input}`);
  };
  return (
      <div className="w-full h-[calc(100vh-80px)] flex flex-col p-5 sm:py-10 sm:px-40">
        <h1 className="text-5xl font-medium">Frictionless Video <br />Meetings With <span className="text-[#635BFF]">One Click</span></h1>
        <p className="mt-5 font-mono font-medium leading-tight md:w-1/2">meetup allows multiple people to meet and collaborate face to face long distance without and <span className="text-[#635BFF]">signup/signin</span>.</p>
        <input
          className="w-60 h-10 p-3 rounded-lg mt-5 border-2 focus:outline-[#635BFF]"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          type="text" 
          placeholder="Enter your name"
        />
        <button
          className="w-40 h-10 rounded-lg bg-[#635BFF] mt-2 text-zinc-50 text-lg px-2"
          onClick={submitHandler}
        >
          Start Free Metting
        </button>
      </div>
  );
};

export default Home;
