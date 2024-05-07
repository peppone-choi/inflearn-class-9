import React from "react";

function ListItem({ id, subject, amount, onDeleteClick }) {
  return (
    <div className="border flex m-4 p-4 justify-between">
      <div className="w-1/2 text-lg font-semibold">
        <p>{subject}</p>
      </div>
      <div className="w-1/2 text-lg font-semibold">
        <p>{amount}</p>
      </div>
      <button className="w-20 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" id={id} onClick={onDeleteClick}>
        삭제
      </button>
    </div>
  );
}

export default ListItem;
