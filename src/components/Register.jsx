import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  // get the user value
  const { createUser } = use(AuthContext);

  // handle register functionality
  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        event.target.reset();

        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "Your account has been created successfully.",
          confirmButtonText: "Great!",
          confirmButtonColor: "#2563eb",
        });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
          confirmButtonText: "Try Again",
          confirmButtonColor: "#dc2626",
        });
      });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-10 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body p-8">
          <div className="text-center mb-4">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-success/10">
              <span className="text-3xl">🚀</span>
            </div>

            <h1 className="text-4xl font-bold">Create Account</h1>

            <p className="mt-2 text-base-content/60">
              Join us and get started today
            </p>
          </div>

          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label font-semibold">Email</label>

              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                name="email"
                required
              />

              <label className="label font-semibold mt-2">Password</label>

              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Create a password"
                name="password"
                required
              />

              <button className="btn btn-primary mt-5 w-full">
                Create Account
              </button>
            </fieldset>
          </form>

          <p className="text-center mt-5 text-base-content/70">
            Already Have an Account?{" "}
            <Link
              to="/login"
              className="text-primary font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
