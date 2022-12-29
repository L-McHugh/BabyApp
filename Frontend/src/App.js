import Home from "./components/Pages/Home/Home.jsx";
import Feeding from "./components/Pages/Feeding/Feeding.jsx";
import Nappies from "./components/Pages/Nappies/Nappies.jsx";
import Names from "./components/Pages/Names/Names.jsx";

import AuthenticationButton from "./Authentication/Authentication.js";
import PageButton from "./components/Components/PageButton.js";

import { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";

const App = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth0();

  const [home, setHome] = useState(true);
  const [names, setNames] = useState(false);
  const [feeding, setFeeding] = useState(false);
  const [nappies, setNappies] = useState(false);

  const hideButton = () => {
    if (isAuthenticated) {
      return true;
    } else {
      return false;
    }
  };

  const changeHome = () => {
    hideButton();
    setHome(true);
    setNames(false);
    setFeeding(false);
    setNappies(false);
  };

  const changeNames = () => {
    hideButton();
    setHome(false);
    setNames(true);
    setFeeding(false);
    setNappies(false);
  };

  const changeFeeding = () => {
    hideButton();
    setHome(false);
    setNames(false);
    setFeeding(true);
    setNappies(false);
  };

  const changeNappies = () => {
    hideButton();
    setHome(false);
    setNames(false);
    setFeeding(false);
    setNappies(true);
  };

  const navigateHome = () => {
    navigate("/", { replace: true });
    changeHome();
  };

  const navigateNames = () => {
    navigate("/names", { replace: true });
    changeNames();
  };

  const navigateFeeding = () => {
    navigate("/feeding", { replace: true });
    changeFeeding();
  };

  const navigateNappies = () => {
    navigate("/nappies", { replace: true });
    changeNappies();
  };

  return (
    <div className="pageDiv">
      <div className="buttonDivApp">
        <div className="authenticationButtonDiv">
          <AuthenticationButton className="AuthenticationButton" />
        </div>

        <div className="pageButtonDiv">
          <PageButton
            className="pageButtonHome"
            onClick={navigateHome}
            text="Home"
            hideButton={hideButton}
            hidden={home}
          />

          <PageButton
            className="pageButtonName"
            onClick={navigateNames}
            text="Names"
            hideButton={hideButton}
            hidden={names}
          />

          <PageButton
            className="pageButtonFeeding"
            onClick={navigateFeeding}
            text="Feeding"
            hideButton={hideButton}
            hidden={feeding}
          />

          <PageButton
            className="pageButtonNappies"
            onClick={navigateNappies}
            text="Nappies"
            hideButton={hideButton}
            hidden={nappies}
          />
        </div>

        <Routes>
          <Route path="/Names" element={<Names />} />
          <Route path="/Feeding" element={<Feeding />} />
          <Route path="/Nappies" element={<Nappies />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
