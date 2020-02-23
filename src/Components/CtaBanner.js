import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
/*
*/
class CtaBanner extends Component{
  render(){
    return (
      <div className="CtaBanner">
        <span className={this.props.additionalClasses}>{this.props.text}</span>
      </div>);
  }
}

export default CtaBanner;
