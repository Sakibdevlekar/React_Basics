 import "../App.css"
function Todo({todo, deleteTodo, index}) {
  return (
    <div className="todo">
    <p>{todo}</p>
    <div className="action-btn">
      <input type="checkbox" />
      <button className="delete-btn" onClick={()=>deleteTodo(index)}>Delete</button>
    </div>
  </div>
  )
}

export default Todo