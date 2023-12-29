import "./auth.css";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
import { useSelector } from "react-redux";
import ForgetPassword from "../Components/Auth/ForgetPassword";

const Auth = () => {
  const authContainerDisp = useSelector((state) => {
    return state.setAuthContainerDisp;
  });
  const authDisp = useSelector((state) => {
    return state.setAuthDisp;
  });
  const authState = useSelector((state) => {
    return state.setAuthState;
  });
  const forgetState = useSelector((state) => {
    return state.setForgetState;
  });

  return (
    <div className={authDisp}>
      <div className={authContainerDisp}>
        {forgetState === true ? (
          <ForgetPassword />
        ) : authState === "login" ? (
          <Login />
        ) : (
          <Register />
        )}
      </div>
    </div>
  );
};

export default Auth;
