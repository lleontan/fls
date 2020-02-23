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
  {text:"Home", href:"/",additionalClassNames:""},
  {text:"Contact Us", href:"/contact", additionalClassNames:"HighlightBlueBox"}
];
const SINGLE_CONTACT_BUTTON= {text:"Contact Us", href:"/contact"};
const SHOW_ALL_NAVLINKS=true;
class SingleContactButton extends Component{
  render(){
    return(
    <div className='SingleContactButton BoxedLinkRect'>
      <Link to={SINGLE_CONTACT_BUTTON.href}>{SINGLE_CONTACT_BUTTON.text}</Link>
    </div>);
  }
}
class MultiContactButton extends Component{
  render(){
    let navBannerLinks=NAV_LINKS.map((obj)=>{
      return <NavBannerLink text={obj.text} href={obj.href} additionalClassNames={obj.additionalClassNames}/>
    });
    return(
      <div className="NavBannerLinksDiv">
      {navBannerLinks}
      </div>
    );
  }
}
class NavBannerLink extends Component{
  render(){
    return <div className="NavBannerLinkDiv">
      <Link to={this.props.href} className={this.props.additionalClassNames}>{this.props.text}</Link>
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
      <div className="NavBanner SecondaryColorEnforced">
        <div>
        {/*
          Note: This div controls the top and bottom margin for the navbar;
          */}
        <h1>{BANNER_TITLE}</h1>
        {<ChooseMultiOrSingleLinks/>}
        </div>
      </div>
    )
  }
}

export default NavBanner;
