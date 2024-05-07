import React from "react";

function Button({ value, isSubmit = false, onClick }) {
  return (
    <div>
      <button
        className="m-3 flex flex-col w-28 h-12 border justify-center items-center bg-slate-100 hover:bg-gray-500 hover:text-white rounded text-black shadow"
        type={isSubmit ? "submit" : "button"}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
