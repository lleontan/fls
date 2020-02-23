import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../ImageBlocks.css';

import '../App.css';

import ServicesPanel from './ServicesPanel';
import BusinessStrategyPanel from './BusinessStrategyPanel';
import ContactFormPanel from './ContactFormPanel';
import StaggeredTextLines from './StaggeredTextLines';
import ClientsPanel from './ClientsPanel';

/*
  This file contains the content body of the front page of the website.
*/
const SLOGAN_TEXT="YOUR AMAZON AGENCY";
const MULTI_LINE_SLOGAN=["YOUR","AMAZON","ADVERTISING","AGENCY"];
const BANNER_IMAGE_DATA={
  src:"/assortedGoods.jpg",
  altText:"Banner Photo"
};
const MISSION_STATEMENT="We Are...";
const MISSION_STATEMENT_SECONDLINE="";      //Note, if equals "" no line will be displayed.
const MISSION_DETAILS="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumde Finibus Bono";
const MISSION_CLOSING="We work by helping people from the";
const MISSION_CONCLUSION="World's Top Brands";
class BannerImage extends Component{
  render(){
    return(
    <div className="BannerImage FullScreenWidth">
      <div className="Secondary">
        <div className="SpaceBetween TopBottomMarginHalfem">
        <StaggeredTextLines lines={MULTI_LINE_SLOGAN} additionalClasses="" leftMargin={0}/>
        <img src={BANNER_IMAGE_DATA.src} title={BANNER_IMAGE_DATA.altText}></img>
      </div>
      </div>
    </div>);
  }
}
class MissionStatement extends Component{
  render(){
    return(
    <div className="MissionStatement">
      <div className="Primary LeftRightMargin3em FlexColumn">
        <div className="MissionStatementOpening">
          <h3>{MISSION_STATEMENT}</h3>
          <h3>{MISSION_STATEMENT_SECONDLINE}</h3>
        </div>
        <p>{MISSION_DETAILS}</p>
        <span className="MissionStatementClosing EmphasisFont">{MISSION_CLOSING}</span>
        <span className="MissionStatementConclusion EmphasisFont LargeBodyFontSize">{MISSION_CONCLUSION}</span>
      </div>
    </div>);
  }
}

class MainPage extends Component{
  render(){
    return (
      <div className="MainPage">
        <BannerImage/>
        <div className="Primary">
          <MissionStatement/>
          <div className="TopBottomMargin1em"></div>
          <ClientsPanel/>
          <ServicesPanel/>
          <BusinessStrategyPanel/>
          <ContactFormPanel/>
        </div>
    </div>);
  }
}

export default MainPage;
