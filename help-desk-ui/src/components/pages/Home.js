import React from "react";
import { Route } from "react-router-dom";
import Admin from "./Admin";
import Client from "./Client";
import Engineer from "./Engineer";

const Home = (props) => {
  const ls = require("local-storage");
  const loggedInUser = ls.get("user");

  return (
    <div className="container">
      {(() => {
        if (loggedInUser.userType === "Admin") {
          return (
            <React.Fragment>
              <div>You are an Admin.</div>
              <Admin user={loggedInUser} />
            </React.Fragment>
          );
        } else if (loggedInUser.userType === "Engineer") {
          return (
            <React.Fragment>
              <div>You are an Engineer.</div>
              <Engineer user={loggedInUser} />
            </React.Fragment>
          );
        } else {
          console.log(loggedInUser);
          return (
            <React.Fragment>
              <div>You are a Client.</div>
              <Client user={loggedInUser} />
            </React.Fragment>
          );
        }
      })()}
    </div>
  );
};

export default Home;
