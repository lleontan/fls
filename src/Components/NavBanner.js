import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Link } from "react-router-dom";
import '../App.css';

/*
  This file contains the common navigation banner between different pages.
*/
const NAV_LINKS=[
  {text:"Home", href:"/"},
  {text:"Contact", href:"/contact"}
];
class NavBannerLink extends Component{

  render(){
    return <div>
      <Link to={this.props.href}>{this.props.text}</Link>
    </div>;
  }
}
class NavBanner extends Component{
  render(){
    let navBannerLinks=NAV_LINKS.map((obj)=>{
      return <NavBannerLink text={obj.text} href={obj.href}/>
    });
    return(
    <div>
      {navBannerLinks}
    </div>);
  }
}

export default NavBanner;
