// import { createUserWithEmailAndPassword } from "firebase/auth";

import { Link } from "react-router";
// import { auth } from "../firbase.init";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  // get the user value
  const { createUser } = use(AuthContext);
  // console.log('in the register',authInfo)

  const handleRegister = (event) =>{
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email,password)
      .then(result =>{
        console.log(result.user)
      })
      .catch(error => {
        console.log(error)
      })

  }


  // const handleRegister = (event) => {
  //   event.preventDefault();
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  //   console.log(email, password);
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10 mb-10">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister}>
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
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>
          Already Have an Account ? Please{" "}
          <Link to="/login" className="text-blue-500 hover:link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
