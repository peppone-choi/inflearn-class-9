import React from "react";

const Input = ({ label, type = "text", placeholder = "", value = "", onChange }) => {
  return (
    <>
      {label ? (
        <div className="flex flex-col w-1/2 m-3">
          <label className="mb-3">
            <span>{label}</span>
          </label>
          <input type={type} className="w-11/12 h-10 p-2 border-b-2 border-slate-900 placeholder:text-slate-400" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
      ) : (
        <div>
          <input type={type} className="w-11/12 border-b-2 border-slate-900 placeholder:text-slate-400" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
      )}
    </>
  );
};

export default Input;
