import { Link } from "react-router";

const Order = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-base-200/50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-primary font-semibold">ACCOUNT</p>

            <h1 className="text-4xl font-black mt-1">My Orders 📦</h1>

            <p className="text-base-content/60 mt-2">
              Track and manage your orders from here.
            </p>
          </div>

          <Link to="/dashboard" className="btn btn-outline">
            ← Dashboard
          </Link>
        </div>

        {/* Empty Order */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center py-20">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-5xl mb-5">
              📦
            </div>

            <h2 className="text-3xl font-bold">No Orders Yet</h2>

            <p className="text-base-content/60 max-w-md mt-2">
              You don't have any orders at the moment. Your order information
              will appear here once you place an order.
            </p>

            <Link to="/" className="btn btn-primary mt-6">
              Explore Home
            </Link>
          </div>
        </div>

        {/* Order Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="text-3xl">🚚</div>
              <h3 className="font-bold text-lg">Fast Delivery</h3>
              <p className="text-sm text-base-content/60">
                Track your delivery status easily.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="text-3xl">🔒</div>
              <h3 className="font-bold text-lg">Secure Orders</h3>
              <p className="text-sm text-base-content/60">
                Your order information stays protected.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="text-3xl">💬</div>
              <h3 className="font-bold text-lg">Order Support</h3>
              <p className="text-sm text-base-content/60">
                Get help whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
