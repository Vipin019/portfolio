import { useEffect, useState } from "react";
import "./skill.css";
import { MdExpandMore } from "react-icons/md";
import SkillCard from "./SkillCard";
import { toast } from "react-toastify";
import axios from "axios";

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [page, setPage] = useState(1);
  const [maxEndorseLen, setmaxEndorseLen] = useState(null);
  const [maxLen, setMaxLen] = useState(null);
  const [currentLen, setCurrentLen] = useState(3);

  const loadSkills = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v2/skill/get/?count=1&page=1"
      );
      if (res?.data?.success) {
        setSkills([res.data.data.skills]);
        const res2 = await axios.get(
          "http://localhost:8080/api/v2/skill/endorsement-len"
        );
        if (res2?.data?.success) {
          setmaxEndorseLen(res2?.data?.data?.len);
          const res3 = await axios.get(
            "http://localhost:8080/api/v2/skill/get-total-count"
          );
          if (res3?.data?.success) {
            setMaxLen(res3?.data?.data?.totalSkillCount);
          } else {
            toast.error(res3?.data?.message);
          }
        } else {
          toast.error(res2?.data?.message);
        }
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Some thing went wrong");
    }
  };
  useEffect(() => {
    loadSkills();
  }, []);

  const handleOnLoadMore = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v2/skill/get/?count=1&page=${page + 1}`
      );
      if (res?.data?.success) {
        const tempSkill = skills;
        tempSkill.push(res.data.data.skills);
        setSkills(tempSkill);
        setCurrentLen(currentLen + 3);
        setPage(page + 1);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Some thing went wrong");
    }
  };

  return (
    <div className="flex skill" id="experience">
      <div className="flex skill_container">
        <h5>What skill and experience I have</h5>
        <h2>My Skills</h2>
        <dev className="flex skill_container-largeCards">
          {skills?.map((data) => (
            <div className="flex skill_container-cards">
              {data?.map((skill) => (
                <SkillCard skill={skill} maxLen={maxEndorseLen} />
              ))}
            </div>
          ))}
        </dev>
      </div>
      {currentLen < maxLen && (
        <div className="flex skill_container-icon " onClick={handleOnLoadMore}>
          <MdExpandMore className="flex skill_container--icon" />
        </div>
      )}
    </div>
  );
};

export default Skill;
