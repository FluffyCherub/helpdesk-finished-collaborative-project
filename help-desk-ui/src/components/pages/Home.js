import React from "react";
import { Route } from "react-router-dom";
import Admin from "./Admin";
import Client from "./Client";
import Engineer from "./Engineer";

const Home = (props) => {
  const { user } = props;

  return (
    <div className="container">
      {(() => {
        if (user.userType === "Admin") {
          return (
            <React.Fragment>
              <div>You are an Admin.</div>
              <Admin />
            </React.Fragment>
          );
        } else if (user.userType === "Engineer") {
          return (
            <React.Fragment>
              <div>You are an Engineer.</div>
              <Engineer />
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment>
              <div>You are a Client.</div>
              <Client />
            </React.Fragment>
          );
        }
      })()}
    </div>
  );
};

export default Home;
