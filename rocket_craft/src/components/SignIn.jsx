import React from "react";

const SignIn = () => {
  return (
    <div className="form">
      signIn
      <form>
        <div className="input-container">
          <input type="email" name="email" placeholder="E-mail" required />
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="send">
          <button type="submit">create</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
