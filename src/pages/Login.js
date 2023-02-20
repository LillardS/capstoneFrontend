import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

// function to login
const Login = () => {

  // initial state of input fields and ability to update that value
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isLoading} = useLogin();

  // handles the submit of the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // logs a user in with inputs from the form
    await login(email, password);
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      {/* email input field */}
      <label>Email address:</label>
      <input
        type="email"

        // sets the value of the input field 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />

      {/* password input field */}
      <label>Password:</label>
      <input 
        type="password"

        // sets the value of the input field 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      {/* submit button */}
      <button disabled={isLoading}>Log In</button>

      {/* displays errors below the form if any are present */}
      {error && <div className="error">{error}</div>}
    </form>
  )
}

// export signup function
export default Login;