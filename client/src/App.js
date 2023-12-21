import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ShortProfile from "./Components/Navbar/ShortProfile";

const App = () => {
  const [shortProfileContainerDisp, setShortProfileContainerDisp] = useState(
    "shortProfile_container-h"
  );
  const [shortProfileDisp, setShortProfileDisp] = useState("shortProfile-h");

  return (
    <>
      <Navbar
        shortProfileContainerDisp={shortProfileContainerDisp}
        setShortProfileContainerDisp={setShortProfileContainerDisp}
        setShortProfileDisp={setShortProfileDisp}
      />
      <ShortProfile
        shortProfileContainerDisp={shortProfileContainerDisp}
        shortProfileDisp={shortProfileDisp}
      />
    </>
  );
};

export default App;
