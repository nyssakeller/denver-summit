import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className='container'>
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
