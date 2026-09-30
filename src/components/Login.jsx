import  { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
// get the provider
  const {signInUser} = use( AuthContext);
// handle login functionality
  const  handleLogin =(event) =>{
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email,password)
      .then( result =>{
        console.log(result.user) 
      })
      .catch(error =>{
        console.log(error)
      })
  }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10 mb-10">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin}>
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
        </form>
        <p>
          New to Website ? Please
          <Link to="/register" className="text-blue-500 hover:link">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
