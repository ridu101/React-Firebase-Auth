import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10 mb-10">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Login now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
          />
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>
          New to Website ? Please 
           <Link to="/register" className="text-blue-500 hover:link"> Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
