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
function App() {
  return (
    <Router>
    <div className="container">
        <Header />
        <Routes>
         <Route index element ={<Tickets/>}/>
         <Route path = "/register" element={<AddTicket/>} />
         <Route path="/admin" element={<Admin />} />
         <Route path="/engineer" element={<Engineer />} />
         <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;