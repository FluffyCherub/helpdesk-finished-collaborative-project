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
import Login from "./components/pages/Login";
import axios from "axios";
import Home from "./components/pages/Home";
const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
    window.location.reload(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    console.log("username: " + username);
    console.log("password: " + password);
    const response = await axios.get(
      "http://localhost:8081/gateway/users/authenticate/" +
        user.username +
        "/" +
        user.password
    );
    console.log("response: " + response);
    setUser(response.data);
    localStorage.setItem("user", response.data);
    console.log(response.data);
  };

  if (user) {
    return (
      <div>
        <div>
          {user.fullName} is loggged in
          <button onClick={handleLogout}>logout</button>
        </div>

        <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/tickets" element={<Tickets />} />

              <Route index element={<Home user={user} />} />

              <Route path="/admin" element={<Admin user={user} />} />
              <Route path="/engineer" element={<Engineer user={user} />} />
              <Route path="/client" element={<Client user={user} />} />

              <Route path="/admin/accounts" element={<Accounts />} />
              <Route path="/admin/newaccounts" element={<AddAccounts />} />
              <Route path="/client/NewTicket" element={<AddTicket />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
export default App;
