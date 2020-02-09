import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Link } from "react-router-dom";
import '../App.css';

/*
  This file contains the common navigation banner between different pages.
*/
const BANNER_TITLE="FIRST LIGHT STUDIOS";
const NAV_LINKS=[
  {text:"Home", href:"/"},
  {text:"Contact", href:"/contact"}
];
const SINGLE_CONTACT_BUTTON= {text:"Contact", href:"/contact"};
const SHOW_ALL_NAVLINKS=false;
class SingleContactButton extends Component{
  render(){
    return(
    <div className='SingleContactButton'>
      <Link to={SINGLE_CONTACT_BUTTON.href}>{SINGLE_CONTACT_BUTTON.text}</Link>
    </div>);
  }
}
class MultiContactButton extends Component{
  render(){
    let navBannerLinks=NAV_LINKS.map((obj)=>{
      return <NavBannerLink text={obj.text} href={obj.href}/>
    });
    return(
      <div>
      {navBannerLinks}
      </div>
    );
  }
}
class NavBannerLink extends Component{
  render(){
    return <div>
      <Link to={this.props.href}>{this.props.text}</Link>
    </div>;
  }
}
class ChooseMultiOrSingleLinks extends Component{
  render(){
    if(SHOW_ALL_NAVLINKS){
      return <MultiContactButton/>;
    }else{
      return <SingleContactButton/>;
    }
  }
}
class NavBanner extends Component{

  render(){
    return(
      <div className="NavBanner">
        <h1>{BANNER_TITLE}</h1>
        {<ChooseMultiOrSingleLinks/>}
      </div>
    )
  }
}

export default NavBanner;
