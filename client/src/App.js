import Navbar from "./Components/Navbar/Navbar";
import ShortProfile from "./Components/Navbar/ShortProfile";
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <ShortProfile />
      <Auth />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
