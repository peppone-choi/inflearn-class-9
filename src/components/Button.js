import React from "react";

const Button = React.memo(({ value, isSubmit = false, onClick }) => {
  return (
    <div>
      <button
        className="flex flex-col items-center justify-center h-12 m-3 text-black border rounded shadow w-28 bg-slate-100 hover:bg-gray-500 hover:text-white"
        type={isSubmit ? "submit" : "button"}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
});

export default Button;
