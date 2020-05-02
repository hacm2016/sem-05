import React, { Component } from 'react';
import './App.css';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Form from './form/Form'
import FormResult from './form/FormResult'

class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">
        <Route exact path="/" component={Form}/>
        <Route path="/formresult/:usuario/:email/:comentario/:phone" component={FormResult}/>
      </div>
    </Router>

     
    );
  }
}

export default App;
