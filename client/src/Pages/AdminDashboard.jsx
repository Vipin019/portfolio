import { useState } from "react";
import "./adminDashboard.css";
import CreateProject from "../Pages/CreateProject";
import CreateSkill from "../Pages/CreateSkill";
import CreateFeature from "../Pages/CreateFeature";
import CreatePost from "../Pages/CreatePost.jsx";
import ManageProjects from "../Pages/ManageProjects.jsx";
import ManageSkills from "../Pages/ManageSkills.jsx";
import ManageFeatures from "../Pages/ManageFeatures.jsx";
import ManagePosts from "../Pages/ManagePosts.jsx";
import UpdateResume from "../Pages/UpdateResume.jsx";

const AdminDashboard = () => {
  const [show, setShow] = useState(null);
  return (
    <div className="adminDashboard">
      <div className="flex adminDashboard_container">
        <div className="flex adminDashboard_container_nav">
          <input
            type="button"
            value={"Create New Project"}
            className="btn"
            onClick={() => {
              setShow("create-project");
            }}
          />
          <input
            type="button"
            value={"Create New Skill"}
            className="btn"
            onClick={() => {
              setShow("create-skill");
            }}
          />
          <input
            type="button"
            value={"Create New Feature"}
            className="btn"
            onClick={() => {
              setShow("create-feature");
            }}
          />
          <input
            type="button"
            value={"Create New Post"}
            className="btn"
            onClick={() => {
              setShow("create-post");
            }}
          />
          <input
            type="button"
            value={"Manage Projects"}
            className="btn"
            onClick={() => {
              setShow("manage-projects");
            }}
          />
          <input
            type="button"
            value={"Manage Skills"}
            className="btn"
            onClick={() => {
              setShow("manage-skills");
            }}
          />
          <input
            type="button"
            value={"Manage Features"}
            className="btn"
            onClick={() => {
              setShow("manage-features");
            }}
          />
          <input
            type="button"
            value={"Manage Posts"}
            className="btn"
            onClick={() => {
              setShow("manage-posts");
            }}
          />
          <input
            type="button"
            value={"Update Resume"}
            className="btn"
            onClick={() => {
              setShow("update-resume");
            }}
          />
        </div>
        <div className="adminDashboard_container_main">
          {show === "create-project" ? (
            <CreateProject />
          ) : show === "create-skill" ? (
            <CreateSkill />
          ) : show === "create-feature" ? (
            <CreateFeature />
          ) : show === "create-post" ? (
            <CreatePost />
          ) : show === "manage-projects" ? (
            <ManageProjects />
          ) : show === "manage-skills" ? (
            <ManageSkills />
          ) : show === "manage-features" ? (
            <ManageFeatures />
          ) : show === "manage-posts" ? (
            <ManagePosts />
          ) : show === "update-resume" ? (
            <UpdateResume />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
