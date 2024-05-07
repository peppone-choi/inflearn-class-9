import React, { useState } from "react";
import Input from "./Form";

function ListItem({ id, subject, amount, onDeleteClick, list, setList, setTotal, total, setSubject, setAmount }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newSubject, setNewSubject] = useState(subject);
  const [newAmount, setNewAmount] = useState(amount);

  const onEditClick = (e) => {
    setSubject("");
    setAmount(0);
    setIsEditing(true);
  };

  const onSaveClick = (e) => {
    const oldData = list.find((item) => item.id === Number(e.target.id));
    const oldTotal = total - oldData.amount;
    const newList = list.map((item) => {
      if (item === oldData) {
        item.subject = newSubject;
        item.amount = newAmount;
      }
      return item;
    });
    setList(newList);
    setTotal(oldTotal + parseInt(newAmount));

    setIsEditing(false);
  };
  return (
    <div className="border flex m-4 p-4 justify-between">
      {isEditing ? (
        <>
          <div className="w-1/2 text-lg font-semibold flex">
            <Input value={newSubject} onChange={(e) => setNewSubject(e.target.value)} />
          </div>
          <div className="w-1/2 text-lg font-semibold flex">
            <Input value={newAmount} onChange={(e) => setNewAmount(e.target.value)} />
          </div>
          <button id={id} className="w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onSaveClick}>
            저장
          </button>
        </>
      ) : (
        <>
          <div className="w-1/2 text-lg font-semibold">
            <p>{subject}</p>
          </div>
          <div className="w-1/2 text-lg font-semibold">
            <p>{amount}</p>
          </div>
          <button id={id} className="w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onEditClick}>
            수정
          </button>
        </>
      )}

      <button className="w-20 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" id={id} onClick={onDeleteClick}>
        삭제
      </button>
    </div>
  );
}

export default ListItem;
