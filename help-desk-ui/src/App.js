import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import React, {Component} from 'react';
import Header from './components/Header'
import Tickets from './components/Tickets';
import Form from './components/Form';
class App extends Component{
  render() {
  return (
    <div>
    <div className="projectNavBar">
        <Header/>
        <Tickets/>
        <Form/>
        </div>
    </div>
  );
}
}
export default App;