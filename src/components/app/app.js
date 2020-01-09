import React, { Component } from 'react';
import MonthList from '../month-list';

import './app.css';

export default class App extends Component {  
  render() {    
    return (
      <div className="main-container">
        <MonthList />
      </div>
    );
  }
}