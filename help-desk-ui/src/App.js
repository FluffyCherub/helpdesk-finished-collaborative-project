import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import React, {Component} from 'react';
import Header from './components/Header'
import Form from './components/Form';
import StudentOrganism from './components/organisms/HelpdeskOrganism';

class App extends Component{
  render() {
  return (
    <div className="projectNavBar">
      <Header/>
      <StudentOrganism/>
      <Form/>
    </div>
  );
}
}
export default App;