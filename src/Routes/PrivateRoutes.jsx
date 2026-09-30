import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);

  // set location to the state to where you go
  const location = useLocation();

  console.log(location);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-base-content/60 font-medium">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  // set location to the state to where you go
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
