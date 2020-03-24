import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
/*
  This component takes 2 arguments in props
    -A number leftMargin
    -A string of classnames to add to the default StaggeredTextLines class
    -A array of Strings to display
*/


class StaggeredTextLines extends Component{

  lineList(elements, leftMargin){
      return elements.map((element,index)=>{
        let marginNum=index*leftMargin;
        let margin=marginNum+"em";
        let elementStyle={marginLeft:margin};
        return <span key={index+"staggeredTextLines"} style={elementStyle}>{element}</span>;
      });
  }
  render(){
    return(
    <div className={"StaggeredTextLines "+this.props.additionalClasses}>
        {this.lineList(this.props.lines,this.props.leftMargin)}
    </div>);
  }
}
export default StaggeredTextLines;
