import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
/*
  This file the design of the services panel found in the main page.
*/
const CONTACT_FORM_HEADER="Sign Up Today!";

class ContactFormPanel extends Component{
  render(){
    return (
      <div className="ContactFormPanel">
        <h2>{CONTACT_FORM_HEADER}</h2>
    </div>);
  }
}

export default ContactFormPanel;
