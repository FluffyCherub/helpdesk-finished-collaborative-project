import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import React, {Component} from 'react';
import Header from './components/Header'
import Form from './components/Form';
import HelpdeskOrganism from './components/organisms/HelpdeskOrganism';
import Tickets from './components/Tickets';

class App extends Component{
  render() {
  return (
    <div className="projectNavBar">

        <Tickets/>
        

    </div>
  );
}
}
export default App;