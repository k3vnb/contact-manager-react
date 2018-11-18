import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>App Component</h1>
          <Header />
          <div className="container">
            <Contacts />
          </div>
      </div>
    );
  }
}

export default App;
