import "./App.css";
import Forms from "./components/Forms";
import { useCallback, useState } from "react";
import Lists from "./components/Lists";
import Button from "./components/Button";

const initList = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
const initTotal = localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0;
const App = () => {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [list, setList] = useState(initList);
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
    localStorage.setItem("list", JSON.stringify([...list, { id: Date.now(), subject: subject, amount: amount }]));
    localStorage.setItem("total", JSON.stringify(total + parseInt(amount)));
    setSubject("");
    setAmount(0);
  };

  const onDeleteClick = useCallback(
    (e) => {
      const newList = list.filter((item) => item.id !== Number(e.target.id));
      setTotal(total - parseInt(list.find((item) => item.id === Number(e.target.id)).amount));
      setList(newList);
      localStorage.setItem("list", JSON.stringify(newList));
      localStorage.setItem("total", JSON.stringify(total - parseInt(list.find((item) => item.id === Number(e.target.id)).amount)));
    },
    [list, total]
  );

  const onResetClick = (e) => {
    e.preventDefault();
    setList([]);
    localStorage.removeItem("list");
    setTotal(0);
    localStorage.removeItem("total");
    setSubject("");
    setAmount(0);
  };

  return (
    <div className="w-screen h-svh bg-slate-600">
      <h1 className="p-10 text-5xl font-bold text-white">예산 계산기</h1>
      <div className="flex items-center justify-center w-full mb-5">
        <div className="w-full bg-white rounded shadow lg:w-11/12 lg:max-w-full">
          <Forms amount={amount} subject={subject} handleChange={handleChange} handleAmountChange={handleAmountChange} onSubmit={onSubmit} />
          <Lists list={list} onDeleteClick={onDeleteClick} setList={setList} setTotal={setTotal} total={total} setSubject={setSubject} setAmount={setAmount} />
          <Button value="초기화" onClick={onResetClick} isSubmit={false} />
        </div>
      </div>
      <h2 className="text-2xl font-extrabold text-right text-white lg:mr-20">총 지출 : {total}원</h2>
    </div>
  );
};

export default App;
