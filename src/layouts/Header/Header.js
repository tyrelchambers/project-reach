import React, { Component } from 'react';
import './Header.scss';
import Navbar from '../Navbar/Navbar';

const brandImg = require('../../assets/project_reach.svg');

export default class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="brand">
          <img src={brandImg} alt=""/>
        </div>
        <Navbar/>
      </header>
    );
  }
}