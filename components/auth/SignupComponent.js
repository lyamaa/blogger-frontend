import React from "react";
const { useState } = require("react");

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });
  const { name, email, password, error, loading, message, showForm } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password, error, loading, message, showForm });
  };

  const handleChange = (data) => (e) => {
    setValues({ ...values, error: false, [data]: e.target.value });
  };
  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="columns is-mobile">
          <div className="column is-half is-offset-one-quarter">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  value={name}
                  onChange={handleChange("name")}
                  className="input"
                  type="text"
                  placeholder="Name"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  value={email}
                  onChange={handleChange("email")}
                  className="input"
                  type="email"
                  placeholder="Email"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  value={password}
                  onChange={handleChange("password")}
                  className="input"
                  type="password"
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">Login</button>
              </p>
            </div>
          </div>
        </div>
      </form>
    );
  };
  return <React.Fragment>{signupForm()}</React.Fragment>;
};

export default SignupComponent;
