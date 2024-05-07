import React, { useState } from "react";
import Input from "./Form";

const ListItem = React.memo(({ id, subject, amount, onDeleteClick, list, setList, setTotal, total, setSubject, setAmount }) => {
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
    localStorage.setItem("list", JSON.stringify(newList));
    setTotal(oldTotal + parseInt(newAmount));
    localStorage.setItem("total", JSON.stringify(oldTotal + parseInt(newAmount)));
    setIsEditing(false);
  };
  return (
    <div className="flex justify-between p-4 m-4 border">
      {isEditing ? (
        <>
          <div className="flex w-1/2 text-lg font-semibold">
            <Input value={newSubject} onChange={(e) => setNewSubject(e.target.value)} />
          </div>
          <div className="flex w-1/2 text-lg font-semibold">
            <Input value={newAmount} onChange={(e) => setNewAmount(e.target.value)} />
          </div>
          <button id={id} className="w-20 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={onSaveClick}>
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
          <button id={id} className="w-20 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={onEditClick}>
            수정
          </button>
        </>
      )}

      <button className="w-20 px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700" id={id} onClick={onDeleteClick}>
        삭제
      </button>
    </div>
  );
});

export default ListItem;
