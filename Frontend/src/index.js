import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import boyBackground from "../src/components/Images/3.png";

const root = ReactDOM.createRoot(document.getElementById("root"));

//setting a default image background
document.body.style.backgroundImage = `url(${boyBackground})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";

root.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="dev-yvv0lorvozm2z8sk.us.auth0.com"
        clientId="kG6MW2DIgBZbdG0SJEcvMsOMoUZbNEVn"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
