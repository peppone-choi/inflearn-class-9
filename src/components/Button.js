import React from "react";

function Button({ value }) {
  return (
    <div>
      <button className="m-3 flex flex-col w-28 h-12 border justify-center items-center bg-slate-100 hover:bg-gray-500 hover:text-white rounded text-black shadow" type="submit">
        {value}
      </button>
    </div>
  );
}

export default Button;
