import { useState } from "react";
import "./App.css"
import TodoContainer from "./components/TodoContainer"
import InputContainer from "./components/InputCantainer"
function App() {
  const [inputVal, setInputVal] = useState('');
  const [todos, setTodo] = useState([]);
  // console.log(inputVal);
  const handelInput = (e)=>{
    setInputVal(e.target.value);
  }
  const handelAddTodoBtnClick = () =>{
    if (inputVal!="") {
      setTodo((prevTodo)=>[...prevTodo, inputVal]);
      setInputVal('');
    }
  }

  const handleDeleteBtn = (todoIndex) => {
    setTodo((prevTodo) => prevTodo.filter((todo, index) => index!== todoIndex));
  }


  console.log(todos);
  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer inputVal={inputVal} handelInput={handelInput} handelBtnClick={handelAddTodoBtnClick}/>
      <TodoContainer todos={todos} deleteTodo={handleDeleteBtn}/>
    </main>
    
  )
}

export default App