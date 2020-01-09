import React, { Component } from 'react';
import UserService from '../../services/user-service'

import './month-list.css';

export default class MonthList extends Component {

  userService = new UserService();

  state = {
    data: null,
    isLoaded: false
  };  

  componentDidMount() {
    this.userService
      .getAllUsers()
      .then((res) =>this.sortMonth(res))
      .then((res) => {
        this.setState({
            data:res,
            isLoaded: true
          });        
      });
  }

  sortMonth(users){
    let result = [];
    for(let i =0; i < 12; i++) {
      result.push([]);
    }
    users.forEach((item) => {
      result[item.month].push(`${item.firstname} ${item.lastname}`)
    });    
    return result;
  }

  renderMonth(users){
    return users.map((user) => {      
      return (
        user.map((month) => {
          return <span key={month}>{month}</span>
        })
      );
    })
  }  

  renderItems(arr) {
    return arr.map((month,i) => {
      let colorStatus = month.length;
      if (month.length > 11){
        colorStatus = 11
      }
      return (
        <div key={i} className={`month-group item-${i} tooltip length-${colorStatus}`}>
          {new Date(2019,i,10).toLocaleString('en', { month: 'long' })}
          <div className="tooltiptext">{month}</div>          
        </div>
      );
    });
  }  

  render() {    
    const { isLoaded, data } = this.state;    
    return (          
        isLoaded ? this.renderItems(this.renderMonth(data)) : "Wait please, data is loading..."
    );
  }
}