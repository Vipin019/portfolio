import Navbar from "./Components/Navbar/Navbar";
import ShortProfile from "./Components/Navbar/ShortProfile";
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPassword from "./Pages/ForgetPassword";
import CreateSkill from "./Pages/CreateSkill";
import CreateFeature from "./Pages/CreateFeature";
import BlogHome from "./Pages/Blog/BlogHome";
import CreateProject from "./Pages/CreateProject";
import AdminDashboard from "./Pages/AdminDashboard";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <ShortProfile />
      <Auth />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/password/forget/:id/:token"
          element={<ForgetPassword />}
        />
        <Route path="/create-skill" element={<CreateSkill />} />
        <Route path="/create-feature" element={<CreateFeature />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/admin/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default App;
