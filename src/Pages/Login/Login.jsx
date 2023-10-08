import { sendPasswordResetEmail } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const emailRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setLoginError("");
    setLoginSuccess("");

    signIn(email, password)
      .then(() => {
        setLoginSuccess("Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      console.log("Please input your email", email);
      return;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      console.log("Please write a valid email");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 font-Raleway">
            Log in to your TechFiesta account to access exciting tech and gaming
            events, workshops, and conferences. Gain exclusive access to a world
            of innovation, knowledge, and gaming experiences. Join our community
            of tech enthusiasts, gamers, and industry professionals.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                ref={emailRef}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  onClick={handleForgetPassword}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Login</button>
            </div>

            {loginError && <p className="text-red-500">{loginError}</p>}
            {loginSuccess && <p className="text-green-500">{loginSuccess}</p>}

            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
