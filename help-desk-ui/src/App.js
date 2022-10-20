import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Admin from "./components/pages/Admin";
import PageNotFound from "./components/pages/PageNotFound";
import Tickets from "./components/Tickets";
import AddTicket from "./components/AddTicket";
import Engineer from "./components/pages/Engineer";
import Accounts from "./components/pages/Accounts";
import Client from "./components/pages/Client";
import AddAccounts from "./components/pages/AddAccounts";
import axios from "axios";
import Home from "./components/pages/Home";

const App = () => {
  const ls = require("local-storage");
  const [username, setUsername] = useState("testEngineer13");
  const [password, setPassword] = useState("password1");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      const foundUser = ls.get("user");
      setUser(foundUser);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    ls.clear();
    window.location.reload(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    const response = await axios.get(
      "http://localhost:8081/gateway/users/authenticate/" +
        user.username +
        "/" +
        user.password
    );
    setUser(response.data);
    ls.set("user", response.data);
  };

  if (user) {
    if (user.userType === "Admin") {
      return (
        <div>
          <div>
            {user.fullName} is logged in
            <button onClick={handleLogout}>logout</button>
          </div>
          <Router>
            <div className="container">
              <Header />
              <Routes>
                <Route path="/tickets" element={<Tickets />} />

                <Route index element={<Home user={user} />} />

                <Route path="/admin" element={<Admin />} />

                <Route path="/admin/accounts" element={<Accounts />} />
                <Route path="/admin/newaccounts" element={<AddAccounts />} />

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </Router>
        </div>
      );
    } else if (user.userType === "Engineer") {
      return (
        <div>
          <div>
            {user.fullName} is logged in
            <button onClick={handleLogout}>logout</button>
          </div>
          <Router>
            <div className="container">
              <Header />
              <Routes>
                <Route index element={<Home user={user} />} />

                <Route path="/engineer" element={<Engineer />} />

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </Router>
        </div>
      );
    } else if (user.userType === "Client") {
      return (
        <div>
          <div>
            {user.fullName} is logged in
            <button onClick={handleLogout}>logout</button>
          </div>
          <Router>
            <div className="container">
              <Header />
              <Routes>
                <Route index element={<Home user={user} />} />

                <Route path="/client" element={<Client />} />

                <Route path="/client/NewTicket" element={<AddTicket />} />

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </Router>
        </div>
      );
    }
  }

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <label className="loginLabel" htmlFor="username">
        Username:{" "}
      </label>
      <input
        className="loginInput"
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label className="loginLabel" htmlFor="password">
          password:{" "}
        </label>
        <input
          className="loginInput"
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button className="loginButton" type="submit">
        Login
      </button>
    </form>
  );
};
export default App;
