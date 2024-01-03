import "./skillCard.css";
import { IoIosAdd } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const SkillCard = ({ skill, maxLen }) => {
  const [count, setCount] = useState(1);
  // const [maxLen, setMaxLen] = useState(null);
  const [skillArray, setSkillArray] = useState(skill);

  const loginState = useSelector((state) => {
    return state.setLoginState;
  });

  const handleOnLoadMore = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v2/skill/get/?count=${count + 1}&skillName=${
          skill?.skillName
        }`
      );
      if (res?.data?.success) {
        const tempSkill = skillArray;
        tempSkill.endorsement.push(res?.data?.data?.skills?.endorsement);
        setSkillArray(tempSkill);
        setCount(count + 1);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Some thing went wrong");
    }
  };

  const handleOnEndorse = async () => {
    try {
      if (loginState) {
        toast.success("Sorry currently this servise is not abalavle");
      } else {
        toast.error("Please login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Some thing went wrong");
    }
  };

  return (
    <div className="flex skillCard">
      <div className="flex skillCard-name">
        <h6>{skill?.skillName}</h6>
      </div>
      <p>{`${skill?.yearOfExperience} Year of working experience`}</p>
      <div className="flex skillCard_endorsement">
        <div className="skillCard_endorsement-heading flex">
          <p>Endorsement</p>
          <h6>{skill?.skillNo ? maxLen[skill?.skillNo] : 0}</h6>
          <IoIosAdd
            className="skillCard_endorsement-heading--icon"
            onClick={handleOnEndorse}
          />
        </div>
        {maxLen > 0 && (
          <div className="flex skillCard_endorsement-people">
            <div className="flex skillCard_endorsement-people--forOverflow">
              {skillArray?.endorsement?.map((p) => (
                <img
                  src={p.url}
                  alt="Profile"
                  className="skillCard_endorsement-people--image"
                />
              ))}
              {maxLen &&
                skill?.skillNo &&
                maxLen[skill?.skillNo] > skillArray?.endorsement?.length && (
                  <FaArrowCircleRight
                    className="flex skillCard_endorsement-people--icon"
                    onClick={handleOnLoadMore}
                  />
                )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillCard;
