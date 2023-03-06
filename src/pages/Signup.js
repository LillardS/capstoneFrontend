import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

// function to sign up
const Signup = () => {

  // initial state of input fields and ability to update that value
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  // handles the submit of the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // signs a new user up with inputs from the form
    await signup(email, password);
  }

  // html returned for the signup page
  return (
    <div className="signup">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        {/* email input field */}
        <div className="email">
        <label className="email-label">Email address:</label>
        <input
          type="email"

          // sets the value of the input field 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        </div>

        {/* password input field */}
        <div className="password">
        <label className="password-label">Password:</label>
        <input
          type="password"

          // sets the value of the input field 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        </div>

        {/* submit button */}
        <button className="signup-button" disabled={isLoading}>Sign up</button>

        {/* displays errors below the form if any are present */}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

// export signup function
export default Signup;