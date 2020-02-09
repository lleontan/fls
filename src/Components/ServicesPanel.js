import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
/*
  This file the design of the services panel found in the main page.
*/
const SERVICES_HEADER="What we do";
const SERVICES_LIST=[{
  title:"Service 1",
  src:"/logo512.png",
  altText:"Service 1 alt text"
},{
  title:"Service 2",
  src:"/logo512.png",
  altText:"Service 1 alt text"
},{
  title:"Service 3",
  src:"/logo512.png",
  altText:"Service 1 alt text"
},{
  title:"Service 4",
  src:"/logo512.png",
  altText:"Service 1 alt text"
},{
  title:"Service 5",
  src:"/logo512.png",
  altText:"Service 1 alt text"
},{
  title:"Service 6",
  src:"/logo512.png",
  altText:"Service 1 alt text"
}];
class ServicesImageBlock extends Component{

  render(){
    let propsData=this.props.data;
    return(
    <div className="ServicesImageBlock">
        <img src={propsData.src} title={propsData.altText}></img>
        <span>{propsData.title}</span>
    </div>);
  }
}
let servicesList=()=>{
    return SERVICES_LIST.map((element)=>{
      return <ServicesImageBlock data={element}/>;
    });
  }
class ServicesBlock extends Component{

  render(){
    return(
    <div className="ServicesBlock">
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
