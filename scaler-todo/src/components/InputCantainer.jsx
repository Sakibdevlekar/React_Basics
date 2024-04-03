import "../App.css";

export default function InputCantainer({
  inputVal,
  handelInput,
  handelBtnClick,
}) {
  return (
    <div className="input-container">
      <input type="text" value={inputVal} onChange={handelInput} />
      <button onClick={handelBtnClick}>+</button>
    </div>
  );
}
