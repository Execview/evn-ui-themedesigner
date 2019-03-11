import React, { Component } from 'react';
import { days, months } from '../store/constants';
import './DateCell.css';

export default class DateCellDisplay extends Component {
  render() {
    const myDate = new Date(this.props.data);
    const toReturn = this.props.data !== '' ? days[myDate.getDay()] + ' ' + myDate.getDate() + '/' + months[myDate.getMonth()] + '/' + myDate.getFullYear() : 'Date Unknown';
    return (<div className="cell-container no-select"><p style={this.props.style} className="cell-text">{toReturn}</p></div>);
  }
}
