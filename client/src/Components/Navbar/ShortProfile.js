import "./shortProfile.css";
import { CgProfile, CgWebsite } from "react-icons/cg";
import { TbStatusChange } from "react-icons/tb";
// import { useNavigate } from "react-router-dom"; //https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router

const ShortProfile = ({ shortProfileContainerDisp, shortProfileDisp }) => {
  // const navigate = useNavigate();
  return (
    <div className={shortProfileDisp}>
      <div
        className={shortProfileContainerDisp}
        // onClick={(e) => {
        //   navigate("/profile");
        // }}
      >
        <div className="shortProfile_container--myAccount colorD">
          <CgProfile className="shortProfile_container--myAccount-icon" />
          <input type="button" value={"My Account"} className="colorD" />
        </div>
        <div className="shortProfile_container--myOrders colorL">
          <CgWebsite className="shortProfile_container--myOrders-icon" />
          <input type="button" value={"My Orders"} className="colorL" />
        </div>
        <div className="shortProfile_container--myOrderStatus colorD">
          <TbStatusChange className="shortProfile_container--myOrderStatus-icon" />
          <input type="button" value={"My Order Status"} className="colorD" />
        </div>
      </div>
    </div>
  );
};

export default ShortProfile;