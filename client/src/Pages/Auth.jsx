import "./auth.css";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
import { useSelector } from "react-redux";

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

  return (
    <div className={authDisp}>
      <div className={authContainerDisp}>
        {authState === "login" ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default Auth;
