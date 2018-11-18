import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>App Component</h1>
          <Header />
          <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
          <Contact name="Jane Doe" email="janedoe@gmail.com" phone="555-556-555" />
      </div>
    );
  }
}

export default App;
