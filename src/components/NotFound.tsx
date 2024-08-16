import React from "react";
import { useNavigate } from "react-router-dom";
import { notFound } from "../assets";

const NotFound = () => {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate("/");
  };
  return (
    <div className="h-[60vh] w-[100%] flex flex-col gap-10 items-center">
      <img className="w-[20%] aspect-square" src={notFound} alt="not found" />
      <h1 className="text-4xl">We couden't found anything</h1>
      <button
        className="relative z-30 px-6 py-3 overflow-hidden font-semibold tracking-wider text-white transition-all duration-500 rounded bg-Primary/75 group hover:bg-Primary"
        onClick={handleReload}
      >
        Home
      </button>
    </div>
  );
};

export default NotFound;
