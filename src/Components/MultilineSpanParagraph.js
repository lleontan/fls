import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CtaBanner from './CtaBanner';
import '../App.css';
/*
  This file takes a list, of lists of objects.
  Each object should contain the spans text and any additional classes styling it.
*/
function returnSpansAsLine(elements){
  return elements.map((element)=>{
    return <span className={element.additionalClasses}>{element.text}</span>
  });
}
class MultilineSpanLine extends Component{

  render(){
    return(<p>
      {returnSpansAsLine(this.props.spans)}
      </p>);
  }
}
class MultilineSpanParagraph extends Component{
  render(){
    let lines=this.props.lines;
    let returnedLines=lines.map((element)=>{
      return <MultilineSpanLine spans={element}/>
    });
    return (
      <div className="MultilineSpanParagraph">
        {returnedLines}
      </div>
    );
  }
}

export default MultilineSpanParagraph;
