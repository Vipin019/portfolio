import { useState } from "react";
import "./createProject.css";
import { toast } from "react-toastify";
import axios from "axios";

const CreateProject = () => {
  const [name, setName] = useState(null);
  const [repo, setRepo] = useState(null);
  const [live, setLive] = useState(null);
  const [image, setImage] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(null);

  const handleOnCreateSkill = async () => {
    try {
      const project = new FormData();
      project.append("name", name);
      project.append("repo", repo);
      project.append("live", live);
      project.append("image", image);
      const res = await axios.post(
        "http://localhost:8080/api/v2/project/create",
        project
      );
      if (res?.data?.success) {
        toast.success(res.data.message);
        setName("");
        setRepo("");
        setLive("");
        setImage(null);
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
    <div className="flex createProject">
      <div className="flex createProject_container">
        <h3>Create Project</h3>
        <input
          type="text"
          className="inpt"
          placeholder="Enter project name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          className="inpt"
          placeholder="Enter project repository link"
          onChange={(e) => {
            setRepo(e.target.value);
          }}
        />
        <input
          type="text"
          className="inpt"
          placeholder="Enter project live link"
          onChange={(e) => {
            setLive(e.target.value);
          }}
        />
        {previewSrc && <img src={previewSrc} alt="logo" />}
        <label htmlFor="projectFile">Choose Image:</label>
        <input
          type="file"
          accept="image/*"
          className="file inpt"
          id="projectFile"
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

export default CreateProject;
