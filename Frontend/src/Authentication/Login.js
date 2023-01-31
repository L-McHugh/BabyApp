import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();

  return <button data-testid="loginButton" onClick={() => loginWithRedirect()} hideButton={props.hideButton} hidden={props.hidden}>Log In</button>;
};

export default LoginButton;
