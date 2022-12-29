import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Home.css";
import LittleChick from "../../Images/LittleChick.gif";

const Home = () => {
  // to show different things is user is logged in or not
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log("Authenticated", isAuthenticated);

  return isAuthenticated ? (
    <div className="logInDiv">
      <img src={LittleChick} alt="Little Chick" className="littleChickLogIn" />
      {/* <img src={user.picture} alt={user.name} /> */}
      <h1 className="welcomeUser">Welcome {user.name}</h1>
      <p>{user.email}</p>
    </div>
  ) : (
    <div className="logOutDiv">
      <img src={LittleChick} alt="Little Chick" className="littleChickLogOut" />
    </div>
  );
};

export default Home;
