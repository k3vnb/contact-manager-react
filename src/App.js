import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from './context';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
            <h1>App Component</h1>
            <Header />
            <div className="container">
              <AddContact />
              <Contacts />
            </div>
        </div>
      </Provider>
    );
  }
}

export default App;
