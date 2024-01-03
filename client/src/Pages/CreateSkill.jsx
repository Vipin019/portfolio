import { useState } from "react";
import "./createSkill.css";
import { toast } from "react-toastify";
import axios from "axios";

const CreateSkill = () => {
  const [skillName, setSkillName] = useState(null);
  const [yearOfExperience, setYearOfExperience] = useState(null);
  const [image, setImage] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(null);

  const handleOnCreateSkill = async () => {
    try {
      const skill = new FormData();
      skill.append("skillName", skillName);
      skill.append("yearOfExperience", yearOfExperience);
      skill.append("image", image);
      const res = await axios.post(
        "http://localhost:8080/api/v2/skill/create",
        skill
      );
      if (res?.data?.success) {
        toast.success(res.data.message);
        setSkillName("");
        setYearOfExperience("");
        setImage({});
        setPreviewSrc(null);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Some thing went wrong");
    }
  };
  return (
    <div className="flex creatSkill">
      <div className="flex creatSkill_container">
        <h3>Create Skills</h3>
        <input
          type="text"
          placeholder="Input skill name"
          className="inpt"
          onChange={(e) => {
            setSkillName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Input year of experience"
          className="inpt"
          onChange={(e) => {
            setYearOfExperience(e.target.value);
          }}
        />
        {previewSrc && <img src={previewSrc} alt="logo" />}
        <label htmlFor="skilFile">Choose Image:</label>
        <input
          type="file"
          placeholder="Select Image"
          accept="image/*"
          className="file inpt"
          id="skilFile"
          onChange={(e) => {
            setImage(e.target.files[0]);
            if (e.target.files[0]) {
              const reader = new FileReader();

              reader.onload = function (e) {
                setPreviewSrc(e.target.result);
              };

              reader.readAsDataURL(e.target.files[0]);
            }
          }}
        />
        <input
          type="button"
          value={"Create"}
          className="btn"
          onClick={handleOnCreateSkill}
        />
      </div>
    </div>
  );
};

export default CreateSkill;
