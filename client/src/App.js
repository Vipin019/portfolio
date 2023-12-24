import Navbar from "./Components/Navbar/Navbar";
import ShortProfile from "./Components/Navbar/ShortProfile";
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";

const App = () => {
  return (
    <>
      <Navbar />
      <ShortProfile />
      <Auth />
      <Routes>{/* <Route path="/auth" element={} /> */}</Routes>
    </>
  );
};

export default App;
