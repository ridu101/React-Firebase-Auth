import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="min-h-[80vh] bg-base-200 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">My Profile</h1>

          <p className="text-base-content/60 mt-2">
            Manage and view your account information.
          </p>
        </div>

        {/* Profile Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <div className="avatar mb-5">
                <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 overflow-hidden">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary text-primary-content flex items-center justify-center">
                      <span className="text-5xl font-bold">
                        {user?.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Name */}
              <h2 className="text-2xl font-bold">
                {user?.displayName || "User"}
              </h2>

              {/* Email */}
              <p className="text-base-content/60 mt-1">{user?.email}</p>
            </div>

            <div className="divider"></div>

            {/* Account Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-base-200 rounded-xl p-5">
                <p className="text-sm text-base-content/60">Display Name</p>

                <p className="font-semibold mt-1">
                  {user?.displayName || "Not available"}
                </p>
              </div>

              <div className="bg-base-200 rounded-xl p-5">
                <p className="text-sm text-base-content/60">Email Address</p>

                <p className="font-semibold mt-1 break-all">{user?.email}</p>
              </div>

              <div className="bg-base-200 rounded-xl p-5">
                <p className="text-sm text-base-content/60">
                  Authentication Provider
                </p>

                <p className="font-semibold mt-1">Firebase Authentication</p>
              </div>

              <div className="bg-base-200 rounded-xl p-5">
                <p className="text-sm text-base-content/60">
                  Email Verification
                </p>

                <p
                  className={`font-semibold mt-1 ${
                    user?.emailVerified ? "text-success" : "text-warning"
                  }`}
                >
                  {user?.emailVerified ? "Verified" : "Not Verified"}
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="mt-6 p-5 rounded-xl border border-base-300">
              <h3 className="font-bold text-lg">🔐 Account Security</h3>

              <p className="text-sm text-base-content/60 mt-2">
                Your account is protected using Firebase Authentication.
              </p>
            </div>

            {/* Back */}
            <div className="mt-6">
              <Link to="/dashboard" className="btn btn-primary">
                ← Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
