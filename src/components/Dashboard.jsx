import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = use(AuthContext);

  return (
    <div className="min-h-[80vh] bg-base-200 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>

          <p className="text-base-content/60 mt-2">
            Manage your account and activities from here.
          </p>
        </div>

        {/* Welcome Card */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              {/* User Image */}
              <div className="avatar">
                <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary text-primary-content flex items-center justify-center">
                      <span className="text-3xl font-bold">
                        {user?.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* User Info */}
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold">
                  Welcome back, {user?.displayName || "User"}! 👋
                </h2>

                <p className="text-base-content/60 mt-1">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="text-4xl mb-2">📦</div>
              <h3 className="text-lg font-semibold">Total Orders</h3>
              <p className="text-3xl font-bold text-primary">0</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="text-4xl mb-2">👤</div>
              <h3 className="text-lg font-semibold">Account Status</h3>
              <p className="text-success font-semibold">Active</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="text-4xl mb-2">🔐</div>
              <h3 className="text-lg font-semibold">Authentication</h3>
              <p className="text-success font-semibold">Firebase Auth</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-5">Quick Actions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link
              to="/order"
              className="card bg-primary text-primary-content shadow-lg hover:shadow-xl transition"
            >
              <div className="card-body">
                <h3 className="text-xl font-bold">📦 My Orders</h3>
                <p>View and manage your orders.</p>
              </div>
            </Link>

            <Link
              to="/profile"
              className="card bg-secondary text-secondary-content shadow-lg hover:shadow-xl transition"
            >
              <div className="card-body">
                <h3 className="text-xl font-bold">👤 My Profile</h3>
                <p>View your account information.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
