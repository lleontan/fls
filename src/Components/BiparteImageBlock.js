import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

import '../App.css';


function LinkOrSpan(props) {
  if (props.href) {
    return <a href={props.href}>{props.text}</a>
  } else {
    return <span>{props.text}</span>
  }
}
class VariableLink extends Component {

  render() {
    return (<span>{LinkOrSpan(this.props)}</span>)
  }
}
class BiparteImageBlock extends Component {
  render() {
    return (
      <div className="BiparteImageBlock">
        <img src={this.props.imgSrc}/>
        <div className="FullScreenWidthLine"></div>
        <VariableLink href={this.props.href} text={this.props.linkText}/>
      </div>
    )
  }
}
export default BiparteImageBlock;
