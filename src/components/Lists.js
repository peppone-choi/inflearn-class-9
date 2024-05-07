import React from "react";
import ListItem from "./ListItem";

export default function Lists({ list, onDeleteClick }) {
  return (
    <div className="w-full">
      {list.map((item) => (
        <ListItem key={item.id} id={item.id} subject={item.subject} amount={item.amount} onDeleteClick={onDeleteClick} />
      ))}
    </div>
  );
}
