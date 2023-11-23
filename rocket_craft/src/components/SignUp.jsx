import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";

const SignUp = () => {
  const { modalState, toggleModals, signUp } = useContext(UserContext);
  const [validation, setValidation] = useState("");

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 characters min");
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Password do not match");
      return;
    }

    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );

      formRef.current.reset();
      setValidation("");
      console.log(cred);
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setValidation("Email format invalid");
      }

      if (error.code === "auth/email-already-in-use") {
        setValidation("Email already used");
      }
    }
  };

  return (
    <div>
      sign up
      {modalState.signUp && (
        <form ref={formRef} onSubmit={handleForm}>
          <div className="input-container">
            <input
              ref={addInputs}
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="input-container">
            <input
              ref={addInputs}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="input-container">
            <input
              ref={addInputs}
              type="password"
              name="password"
              id="repeatPassword"
              placeholder="Repeat password"
              required
            />
          </div>
          <p>{validation}</p>
          <div className="send">
            <button type="submit">create</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignUp;
