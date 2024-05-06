import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your login or signup logic
    setIsSubmitted(true);
  };

  const switchForm = () => {
    setIsLogin(!isLogin);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {isSubmitted ? (
        <SubmitPage />
      ) : (
        <div>
          <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <br />
            <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          </form>
          <button onClick={switchForm}>
            {isLogin ? "Create New Account" : "Back to Login"}
          </button>
        </div>
      )}
    </div>
  );
}

function SubmitPage() {
  return (
    <div>
      <h2>Form Submitted Successfully!</h2>
    </div>
  );
}

export default LoginForm;
