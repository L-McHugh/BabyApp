import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = (props) => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })} hideButton={props.hideButton} hidden={props.hidden}>
      Log Out
    </button>
  );
};

export default LogoutButton;