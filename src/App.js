import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from './context';
import Header from './components/Header';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
            <h1>App Component</h1>
            <Header />
            <div className="container">
              <Contacts />
            </div>
        </div>
      </Provider>
    );
  }
}

export default App;
