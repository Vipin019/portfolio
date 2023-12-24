import "./auth.css";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
import { useSelector } from "react-redux";

const Auth = () => {
  const what = "login";
  const authContainerDisp = useSelector((state) => {
    return state.setAuthContainerDisp;
  });
  const authDisp = useSelector((state) => {
    return state.setAuthDisp;
  });

  return (
    <div className={authDisp}>
      <div className={authContainerDisp}>
        {what === "login" ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default Auth;
