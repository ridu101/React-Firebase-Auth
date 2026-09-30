import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  // get the provider
  const { signInUser, signInWithGoogle } = use(AuthContext);

  // set location to the state to where you go
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  // handle login functionality
  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        event.target.reset();

        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back! You have successfully logged in.",
          confirmButtonText: "Continue",
          confirmButtonColor: "#2563eb",
        }).then(() => {
          navigate(location.state || "/");
        });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
          confirmButtonText: "Try Again",
          confirmButtonColor: "#dc2626",
        });
      });
  };

  // handle google login
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful!",
          text: "Welcome! You have successfully logged in with Google.",
          confirmButtonText: "Continue",
          confirmButtonColor: "#2563eb",
        }).then(() => {
          navigate(location?.state || "/");
        });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
          confirmButtonText: "Try Again",
          confirmButtonColor: "#dc2626",
        });
      });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-10 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body p-8">
          <div className="text-center mb-4">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <span className="text-3xl">🔐</span>
            </div>

            <h1 className="text-4xl font-bold">Welcome Back!</h1>

            <p className="mt-2 text-base-content/60">
              Login to access your account
            </p>
          </div>

          <form onSubmit={handleLogin}>
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
                placeholder="Enter your password"
                name="password"
                required
              />

              <button className="btn btn-primary mt-5 w-full">Login</button>
            </fieldset>
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border border-base-300 hover:bg-base-200 w-full"
          >
            <svg
              aria-label="Google logo"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="M0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="text-center mt-5 text-base-content/70">
            New to Website?{" "}
            <Link
              to="/register"
              className="text-primary font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
