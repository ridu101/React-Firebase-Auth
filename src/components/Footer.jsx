import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              🔥 React Firebase Auth
            </Link>

            <p className="mt-4 text-sm text-neutral-content/70 leading-6">
              A modern authentication application built with React, Firebase and
              React Router. Secure, simple and easy to use.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-primary transition">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/register" className="hover:text-primary transition">
                  Register
                </Link>
              </li>

              <li>
                <Link to="/dashboard" className="hover:text-primary transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Account</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/profile" className="hover:text-primary transition">
                  My Profile
                </Link>
              </li>

              <li>
                <Link to="/order" className="hover:text-primary transition">
                  My Orders
                </Link>
              </li>

              <li>
                <span className="text-neutral-content/70">
                  Firebase Authentication
                </span>
              </li>

              <li>
                <span className="text-neutral-content/70">Private Routes</span>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Built With</h3>

            <div className="flex flex-wrap gap-2">
              <span className="badge badge-primary">React</span>

              <span className="badge badge-secondary">Firebase</span>

              <span className="badge badge-accent">Tailwind CSS</span>

              <span className="badge">React Router</span>

              <span className="badge">DaisyUI</span>
            </div>

            <p className="text-sm text-neutral-content/60 mt-5">
              Built with ❤️ for learning and development.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="divider before:bg-neutral-content/20 after:bg-neutral-content/20"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-neutral-content/60">
            © {new Date().getFullYear()} React Firebase Auth. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            <Link to="/" className="hover:text-primary transition">
              Privacy
            </Link>

            <Link to="/" className="hover:text-primary transition">
              Terms
            </Link>

            <Link to="/" className="hover:text-primary transition">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
