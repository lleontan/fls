import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
/*
  This file the design of the services panel found in the main page.
*/
const BUSINESS_STRATEGY_HEADER="CTA Banner";
const BUSINESS_STRATEGY_SUBTITLE="How we do it";

const LEFT_COMPONENT=
  {
    src:"images/OurStrategy.jpeg",
    altText:"Our Strategy",
    title:"Our Strategy"
  }
;
const RIGHT_COMPONENT=
  {
    src:"images/Tech.jpeg",
    altText:"Tech",
    title:"Tech"

};
const EQUALS_COMPONENT=
  {
    src:"images/StockMarket.jpeg",
    altText:"StockMarket",
    title:"Sales & Growth"

};
const PLUS_SIGN=
  {
    src:"/placeHolderPlusSign.png",
    altText:"PlusSign",
    title:""

};
const EQUALS_SIGN=
  {
    src:"/placeHolderEqualsSign.png",
    altText:"Minus Sign",
    title:""

};
const CLOSING_PITCH_LINES=["Case price month to month",
"Set up in 2 weeks. No long-term contracts"];
class StrategyImageBlock extends Component{

  render(){
    let propsData=this.props.data;
    return(
    <div className="StrategyImageBlock">
        <img src={propsData.src} title={propsData.altText}></img>
        <span>{propsData.title}</span>
    </div>);
  }
}
let closingLinesList=()=>{
    return CLOSING_PITCH_LINES.map((element)=>{
      return <span>{element}</span>;
    });
  }

class BusinessStrategyPanel extends Component{
  render(){
    return (
      <div className="BusinessStrategyPanel">
      <h2>{BUSINESS_STRATEGY_HEADER}</h2>
      <h3>{BUSINESS_STRATEGY_SUBTITLE}</h3>
      <div className="SuccessEquation">
        <StrategyImageBlock data={LEFT_COMPONENT}/>
        <StrategyImageBlock data={PLUS_SIGN}/>
        <StrategyImageBlock data={RIGHT_COMPONENT}/>
        <StrategyImageBlock data={EQUALS_SIGN}/>
        <StrategyImageBlock data={EQUALS_COMPONENT}/>
      </div>
      <div className="ClosingPitchLines">
        {closingLinesList()}
      </div>
    </div>);
  }
}

export default BusinessStrategyPanel;
