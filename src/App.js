import "./App.css";
import Forms from "./components/Forms";
import { useState } from "react";
import Lists from "./components/Lists";
import Button from "./components/Button";

const App = () => {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setSubject(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTotal(total + parseInt(amount));
    setList([...list, { id: Date.now(), subject: subject, amount: amount }]);
    setSubject("");
    setAmount(0);
  };

  const onDeleteClick = (e) => {
    const newList = list.filter((item) => item.id !== Number(e.target.id));
    setTotal(total - parseInt(list.find((item) => item.id === Number(e.target.id)).amount));
    setList(newList);
  };

  const onResetClick = (e) => {
    e.preventDefault();
    setList([]);
    setTotal(0);
    setSubject("");
    setAmount(0);
  };

  return (
    <div className="w-screen h-svh bg-slate-600">
      <h1 className="text-5xl font-bold p-10 text-white">예산 계산기</h1>
      <div className="flex mb-5 w-full justify-center items-center">
        <div className="w-full lg:w-11/12 lg:max-w-full bg-white rounded shadow">
          <Forms amount={amount} subject={subject} handleChange={handleChange} handleAmountChange={handleAmountChange} onSubmit={onSubmit} />
          <Lists list={list} onDeleteClick={onDeleteClick} setList={setList} setTotal={setTotal} total={total} setSubject={setSubject} setAmount={setAmount} />
          <Button value="초기화" onClick={onResetClick} isSubmit={false} />
        </div>
      </div>
      <h2 className="text-right lg:mr-20 text-2xl font-extrabold text-white">총 지출 : {total}원</h2>
    </div>
  );
};

export default App;
