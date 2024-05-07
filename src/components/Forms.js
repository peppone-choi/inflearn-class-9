import React from "react";
import Input from "./Form";
import Button from "./Button";

function Forms({ subject, amount, handleChange, handleAmountChange, onSubmit }) {
  return (
    <div className="">
      <form action="" className="px-3 py-5 w-full" onSubmit={onSubmit}>
        <div className="flex justify-between">
          <Input label="지출 항목" placeholder="예) 렌트비" value={subject} onChange={handleChange} />
          <Input label="비용" value={amount} onChange={handleAmountChange} />
        </div>
        <Button value="제출" isSubmit={true} />
      </form>
    </div>
  );
}

export default Forms;
