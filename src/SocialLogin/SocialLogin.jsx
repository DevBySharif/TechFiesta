import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
  const { user, googleLogin } = useContext(AuthContext);
  const handleSocialLogin = (media) => {
    media();
  };
  return (
    <div>
      <div className="divider">Continue With</div>
      <div>
        <button onClick={() => handleSocialLogin(googleLogin)}>
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
