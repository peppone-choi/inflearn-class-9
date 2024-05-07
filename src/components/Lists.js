import React from "react";
import ListItem from "./ListItem";

const Lists = React.memo(({ list, onDeleteClick, setList, setTotal, total, setSubject, setAmount }) => {
  return (
    <div className="w-full">
      {list.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          subject={item.subject}
          amount={item.amount}
          onDeleteClick={onDeleteClick}
          list={list}
          setList={setList}
          setTotal={setTotal}
          total={total}
          setSubject={setSubject}
          setAmount={setAmount}
        />
      ))}
    </div>
  );
});

export default Lists;
