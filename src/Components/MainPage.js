import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import ServicesPanel from './ServicesPanel';
import BusinessStrategyPanel from './BusinessStrategyPanel';
import ContactFormPanel from './ContactFormPanel';

/*
  This file contains the content body of the front page of the website.
*/
const SLOGAN_TEXT="FIRST LIGHT STUDIOS";
const BANNER_IMAGE_DATA={
  src:"/logo512.png",
  altText:"Banner Photo"
};
const MISSION_STATEMENT="We are ....";
const MISSION_DETAILS=".........";
const MISSION_CLOSING="We work by helping people from the";
const MISSION_CONCLUSION="World's Top Brands";
class BannerImage extends Component{
  render(){
    return(
    <div className="BannerImage">
      <div className="Secondary">
        <h2 className="Slogan">{SLOGAN_TEXT}</h2>
        <img src={BANNER_IMAGE_DATA.src} title={BANNER_IMAGE_DATA.altText}></img>
      </div>
    </div>);
  }
}
class MissionStatement extends Component{
  render(){
    return(
    <div className="MissionStatement">
      <div className="Primary">
        <h3>{MISSION_STATEMENT}</h3>
        <p>{MISSION_DETAILS}</p>
        <h4 className="MissionStatementClosing">{MISSION_CLOSING}</h4>
        <span className="MissionStatementConclusion">{MISSION_CONCLUSION}</span>
      </div>
    </div>);
  }
}
class MainPage extends Component{
  render(){
    return (
      <div className="MainPage">
      <BannerImage/>
      <MissionStatement/>
      <ServicesPanel/>
      <BusinessStrategyPanel/>
      <ContactFormPanel/>
    </div>);
  }
}

export default MainPage;
