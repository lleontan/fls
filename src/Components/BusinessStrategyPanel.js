import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CtaBanner from './CtaBanner';
import MultilineSpanParagraph from './MultilineSpanParagraph'
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
const CLOSING_PITCH_LINES=["Transparent pricing. Month-to-month",
"Set up in 2 weeks. No long-term contracts"];
const ALTERNATE_CLOSING_LINES=[
  [{text:"Transparent pricing. Month-to-month.", additionalClasses:""}],
  [
    {text:"Set up in two weeks. ", additionalClasses:""},
    {text:"No long term contracts.", additionalClasses:"EmphasisFont SlightlyLargerBodyFontSize"}
  ],[
    {text:"Join Today!", additionalClasses:"altText LargeBodyFontSize EmphasisFont"}
  ]
];
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
      <CtaBanner additionalClasses="" text={BUSINESS_STRATEGY_HEADER}/>
      <h3>{BUSINESS_STRATEGY_SUBTITLE}</h3>
      <div className="SuccessEquation">
        <StrategyImageBlock data={LEFT_COMPONENT}/>
        <StrategyImageBlock data={PLUS_SIGN}/>
        <StrategyImageBlock data={RIGHT_COMPONENT}/>
        <StrategyImageBlock data={EQUALS_SIGN}/>
        <StrategyImageBlock data={EQUALS_COMPONENT}/>
      </div>
      <div className="ClosingPitchLines">
        {/*closingLinesList()*/}
        <MultilineSpanParagraph lines={ALTERNATE_CLOSING_LINES}/>
      </div>
      <CtaBanner additionalClasses="" text={BUSINESS_STRATEGY_HEADER}/>

    </div>);
  }
}

export default BusinessStrategyPanel;
