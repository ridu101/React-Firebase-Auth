import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const authInfo = use(AuthContext);

  console.log(authInfo);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="badge badge-primary badge-outline mb-5">
              🔥 Firebase Authentication
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              React Firebase
              <span className="text-primary block">Auth System</span>
            </h1>

            <p className="mt-6 text-lg text-base-content/65 max-w-xl leading-8">
              A modern authentication system built with React and Firebase.
              Secure login, registration, Google authentication and private
              routes — all in one place.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/register" className="btn btn-primary btn-lg">
                Get Started 🚀
              </Link>

              <Link to="/dashboard" className="btn btn-outline btn-lg">
                Explore Dashboard
              </Link>
            </div>

            <div className="flex gap-8 mt-10">
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-base-content/60">Firebase Powered</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-primary">Secure</p>
                <p className="text-sm text-base-content/60">Private Routes</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-primary">Fast</p>
                <p className="text-sm text-base-content/60">React Based</p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="absolute -inset-5 bg-primary/10 rounded-[3rem] blur-2xl"></div>

            <div className="relative card bg-base-100 shadow-2xl border border-base-200">
              <figure className="px-6 pt-6">
                <img
                  alt="React Firebase authentication"
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  className="rounded-2xl w-full"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">Authentication Made Simple</h2>

                <p className="text-base-content/60">
                  Login, register, manage your profile and access protected
                  pages with Firebase authentication.
                </p>

                <div className="card-actions justify-end mt-3">
                  <Link to="/login" className="btn btn-primary">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Powerful Features</h2>
          <p className="mt-2 text-base-content/60">
            Everything you need for a simple authentication project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-lg border border-base-200">
            <div className="card-body">
              <div className="text-4xl">🔐</div>
              <h3 className="card-title">Secure Login</h3>
              <p className="text-base-content/60">
                Firebase email and password authentication keeps your account
                secure.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg border border-base-200">
            <div className="card-body">
              <div className="text-4xl">🔑</div>
              <h3 className="card-title">Google Login</h3>
              <p className="text-base-content/60">
                Sign in quickly using your Google account.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg border border-base-200">
            <div className="card-body">
              <div className="text-4xl">🛡️</div>
              <h3 className="card-title">Private Routes</h3>
              <p className="text-base-content/60">
                Protected pages are accessible only to authenticated users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
