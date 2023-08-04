import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState<string>("Chirag");
  const [password, setPassword] = useState<string>("123456");

  const handleUsernameChange = (event: any) => {
    // get new username from input field
    const newUsername = event.target.value;

    // update username state with new username
    setUsername(newUsername); // async
    console.log(username);
  }

  const handlePasswordChange = (event: any) => {
    // get new password from input field
    const newPassword = event.target.value;

    // update password state with new username
    setPassword(newPassword);
  }

  const handleLoginClick = () => {
    console.log({
        username: username,
        password: password
    })
  }

  return (
    <div>
      <div>
        <label>Username</label>
        <input type="text" value={username} placeholder="Enter Username" onChange={handleUsernameChange}/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} placeholder="Enter password" onChange={handlePasswordChange}/>
      </div>
      <div>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
