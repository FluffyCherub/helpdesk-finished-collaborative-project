import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route index element={<Login />} />
          <Route path="/tickets" element={<Tickets />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/engineer" element={<Engineer />} />
          <Route path="/client" element={<Client />} />
          <Route path="/admin/accounts" element={<Accounts />} />
          <Route path="/admin/newaccounts" element={<AddAccounts />} />
          <Route path="/client/NewTicket" element={<AddTicket />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
