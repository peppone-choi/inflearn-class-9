import React from "react";

function Input({ label, type = "text", placeholder = "", value = "", onChange }) {
  return (
    <>
      {label ? (
        <div className="m-3 flex flex-col w-1/2">
          <label className="mb-3">
            <span>{label}</span>
          </label>
          <input type={type} className="w-11/12 h-10 border-b-2 p-2 border-slate-900 placeholder:text-slate-400" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
      ) : (
        <div>
          <input type={type} className="w-11/12 border-b-2 border-slate-900 placeholder:text-slate-400" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
      )}
    </>
  );
}

export default Input;
