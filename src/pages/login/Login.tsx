import { FormEvent, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import * as React from "react";

/// Props
export interface ILoginProps {}

export interface ILoginState {}

const Login: React.FC<ILoginProps> = (props) => {
  // State variables
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, isChecked] = useState("");

  // Update the message whenever something else is typed
  useEffect(() => {
    setMessage("");
  }, [email, password, checkbox]);

  // Submit the form
  function save() {
    if (document.querySelector('[name="rememberMe"]:checked')) {
      localStorage.email = email;
      localStorage.password = password;
      localStorage.checkbox = "true";
    }
  }

  return (
    <div>
      Login
      <form className="form--login">
        <label>
          Email
          <input
            type="email"
            id="email"
            autoFocus
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            id="password"
            autoFocus
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
            required
          />
        </label>
        <label>
          Remember Password
          <input type="checkbox" name="rememberMe"></input>
        </label>
        <button type="submit" className="btn--login" onClick={save}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
