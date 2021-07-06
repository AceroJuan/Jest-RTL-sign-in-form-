import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.username === "" && data.password === "") {
      return setError("username & password can't be empty");
    }
    if (data.username === "") {
      return setError("username can't be empty");
    }
    if (data.password === "") {
      return setError("password can't be empty");
    }
  };

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <header>
        <h1 className="capitalize">jest testing</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <legend className="capitalize">sign in</legend>
          {error ? <p data-testid="errorMsg">{error}</p> : null}
          <hr />
          <label className="capitalize" htmlFor="username">
            user name:
          </label>
          <input
            data-testid="usernameInput"
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={handleChange}
          />

          <label className="capitalize" htmlFor="password">
            password:
          </label>
          <input
            data-testid="passwordInput"
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />

          <input
            data-testid="submitBtn"
            className="button capitalize"
            type="submit"
            value="sign in"
          />

          <a href="#" className="capitalize">
            forgot password
          </a>
          <hr />
          <label>new user</label>
          <input className="button capitalize" type="submit" value="sign up" />
        </form>
      </main>
    </>
  );
};

export default App;
