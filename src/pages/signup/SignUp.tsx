import Login from "pages/login/Login";
import * as React from "react";
import { FormEvent, useEffect, useState } from "react";
import { Link, Route, useNavigate } from "react-router-dom";

// Props
export interface ISignUpProps {}

const SignUp: React.FC<ISignUpProps> = (props) => {
  // State variables
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [message, setMessage] = useState("");
  let [password, setPassword] = useState("");
  let [acceptTerms, setTerms] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  // Remove messages on typing
  useEffect(() => {
    setMessage("");
  }, [firstname, lastname, email, password, username, acceptTerms]);

  return (
    <div className="signUp--content">
      Sign Up
      <form className="form--signUp">
        <label>
          Username
          <input
            type="text"
            id="username"
            autoFocus
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setUsername(e.currentTarget.value)
            }
            required
          />
        </label>
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
          Name
          <input
            type="text"
            id="firstname"
            autoFocus
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setFirstname(e.currentTarget.value)
            }
            required
          />
        </label>
        <label>
          Username
          <input
            type="text"
            id="lastname"
            autoFocus
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setLastname(e.currentTarget.value)
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
          Confirm Password
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
          <input type="checkbox"></input>I agree with all Terms and Conditions
          and Privacy Policies of Codenotes
        </label>
        <button type="submit" className="btn--signUp">
          Sign Up
        </button>
        <p>
          {" "}
          Already have an account?<a onClick={handleClick}> Log In </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
