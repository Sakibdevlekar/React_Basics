import React from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { setUser } = React.useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="user name"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
