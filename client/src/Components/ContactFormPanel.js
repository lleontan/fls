import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import '../ContactFormPanel.css';
/*
  This file the design of the services panel found in the main page.
*/
const CONTACT_FORM_HEADER = "Sign Up Today!";
const ALT_TITLE = "Schedule your Amazon Seller evaluation";
const TITLE_DESCRIPTION = "Identify Areas for Growth Within Your Amazon Campaigns";

const MONTHLY_AMAZON_SALES = [
  {
    value: 0,
    text: "Under $50000"
  }, {
    value: 50000,
    text: "$50000-$100000"
  }, {
    value: 100000,
    text: "$100000-$250000"
  }, {
    value: 250000,
    text: "$250000-$500000"
  }, {
    value: 500000,
    text: "$500000-$1M"
  }, {
    value: 1000000,
    text: "$1M+"
  }, {
    value: "NA",
    text: "Not Currently Selling on Amazon"
  }
];
const AMAZON_AD_SPEND = [
  {
    value: 0,
    text: "Under $5000/Month"
  }, {
    value: 5000,
    text: "$5000-$15000/Month"
  }, {
    value: 15000,
    text: "$15000-$50000/Month"
  }, {
    value: 50000,
    text: "$50000-$100000/Month"
  }, {
    value: 100000,
    text: "$100000-$250000/Month"
  }, {
    value: 250000,
    text: "$250000+/Month"
  }
];
function listToDropDown(elements) {
  //Returns the "option" elements given a list of values and text
  return elements.map((element, index) => {
    return <option key={index} value={element.value}>{element.text}</option>
  });
}
class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("Submission event");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="FlexColumn">
        <div>
          <div className="BoldSubtitle">
          <span>Name</span>
          <span className="RedText">*</span>
          </div>
          <div className="FlexRow">
            <div className="FlexColumn">
              <input type="text" required="required"></input>
              <span className="TinyFixedSizeSubtitle">First</span>
            </div>
            <div className="FlexColumn">
              <input type="text" required="required"></input>
              <span className="TinyFixedSizeSubtitle">Last</span>
            </div>
          </div>
        </div>

        <div>
          <span className="BoldSubtitle">Work Email</span>
          <span className="RedText">*</span>
          <div className="FlexRow">
            <input type="email" required="required"></input>
          </div>
        </div>

        <div>
          <div className="BoldSubtitle">
          <span className>Phone</span>
          <span className="RedText">*</span>
          </div>
          <div className="FlexRow">
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required="required"></input>
          </div>
        </div>
        <div className="FlexRow FixedWidth17em SpaceBetween">
          <select name="amazonSalesInput" id="amazonSalesInput" defaultValue={'Monthly Amazon Sales'}>
            <option value="Monthly Amazon Sales" disabled="disabled">Monthly Amazon Sales</option>
            {listToDropDown(MONTHLY_AMAZON_SALES)}
          </select>
          <select id="amazonAdSpend" name="amazonAdSpend" defaultValue={'Monthly Ad Spending'}>
            <option value="Monthly Ad Spending" disabled="disabled">Monthly Ad Spending</option>
            {listToDropDown(AMAZON_AD_SPEND)}
          </select>
        </div>
        <div>
          <textarea placeholder="Tell us a bit about your amazon business" rows="10" cols="90"></textarea>
        </div>
        <div>
          <input type="submit" value="Schedule an evalutation"></input>
        </div>
      </form>
    );
  }
}
class ContactFormPanel extends Component {
  render() {
    return (
      <div className="ContactFormPanel">
        <h2>{ALT_TITLE}</h2>
        <ContactForm/>
      </div>
    );
  }
}

export default ContactFormPanel;
