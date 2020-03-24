import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
/*
  This file the design of the services panel found in the main page.
*/
const SERVICES_HEADER="What we do";
const SERVICES_LIST=[{
  title:"Content generation",
  src:"images/ContentGeneration.jpeg",
  altText:"Content generation"
},{
  title:"SEO optimization",
  src:"images/Optimization.jpeg",
  altText:"SEO optimization"
},{
  title:"Marketing strategy",
  src:"images/MarketingStrategy.jpg",
  altText:"Marketing strategy"
},{
  title:"Inventory management",
  src:"images/InventoryManagement.jpeg",
  altText:"Inventory management"
},{
  title:"Digital marketing",
  src:"images/DigitalMarketing.jpeg",
  altText:"Digital marketing"
},{
  title:"Creative",
  src:"images/CreativeDesign.jpeg",
  altText:"Creative"
}];
class ServicesImageBlock extends Component{

  render(){
    let propsData=this.props.data;
    return(
    <div className="ServicesImageBlock ImageBlock">
        <img src={propsData.src} title={propsData.altText}></img>
        <span>{propsData.title}</span>
    </div>);
  }
}
let servicesList=()=>{
    return SERVICES_LIST.map((element,index)=>{
      return <ServicesImageBlock key={index+"ServicesImageBlock"}data={element}/>;
    });
  }
class ServicesBlock extends Component{

  render(){
    return(
    <div className="ServicesBlock WrappedImageBlockRow">
      {servicesList()}
    </div>);
  }
}
class ServicesPanel extends Component{
  render(){
    return (
      <div className="ServicesPanel">
      <h2>{SERVICES_HEADER}</h2>
      <ServicesBlock/>
    </div>);
  }
}

export default ServicesPanel;
