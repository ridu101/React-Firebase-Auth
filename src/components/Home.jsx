import { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const authInfo = use ( AuthContext);
  console.log(authInfo)
    return (
      <div className="hero bg-base-200 mt-10 mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt="Tailwind CSS hero component"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">React Firebase <br />Auth !</h1>
           <br />
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Home;