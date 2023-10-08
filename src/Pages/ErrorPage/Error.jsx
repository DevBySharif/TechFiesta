import { Link } from "react-router-dom";
import error from "../../assets/404 Error.gif";

const Error = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center">
        <img src={error} alt="" />
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="btn btn-outline btn-accent">
            Go Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
