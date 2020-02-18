import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import '../App.css';
import '../FooterPanel.css';
import '../ImageBlocks.css';

import BiparteImageBlock from "./BiparteImageBlock";

const WEBSITE_TITLE = "FIRST LIGHT STUDIOS";
class FooterMain extends Component {

  render() {
    return (
      <div className="FooterMain MediumBodyFontSize TopBottomMargin2em">
        <div className="VerticallyCentered">
          <h1>{WEBSITE_TITLE}</h1>
        </div>
        <div>
          <BiparteImageBlock
            imgSrc="images/mail.png"
            linkText="hello@firstlightstudios.website"
            href="mailto:hello@firstlightstudios.website"/>

          <BiparteImageBlock imgSrc="images/phone.png" linkText="206-237-1962"/>
        </div>
      </div>
    )
  }
}
class FooterPanel extends Component {

  render() {
    return (<div className="FooterPanel">
      <FooterMain/>
    </div>)
  }
}
export default FooterPanel;
