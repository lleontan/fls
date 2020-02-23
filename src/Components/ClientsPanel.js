import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import '../App.css';
import '../ImageBlocks.css';
import '../ClientsPanel.css';


const INCLUDES_CLIENTS_TITLE = "Includes Businesses Such As";
const CLIENTS = [
  {
    title: "Kodak",
    href: "https://www.kodak.com/corp/default.htm",
    altText: "Kodak",
    src: "/images/KodakLogo.png"
  },{
    title: "Golite",
    href: "https://golite.com/",
    altText: "Golite",
    src: "/images/GoliteLogo.jpg"
  }, {
    title: "Thicker Fuller Hair",
    href: "https://www.thickerfullerhair.com/",
    altText: "Thicker Fuller Hair",
    src: "/images/ThickerFullerHairLogo.png"
  }, {
    title: "Zest Soap",
    href: "https://zest.com/",
    altText: "Zest",
    src: "/images/ZestLogo.jpg"
  }
];
class ClientImageBlock extends Component {
  render() {
    let propsData = this.props.data;
    return (
      <div className="ClientImageBlock ImageBlock">
        <a href={propsData.href}>
          <img src={propsData.src} title={propsData.altText}></img>
          <span>{propsData.title}</span>
        </a>
      </div>
    );
  }
}
let clientsList = () => {
  return CLIENTS.map((element,index) => {
    return <ClientImageBlock key={index+"ClientImageBlock"}data={element}/>;
  });
}
class ClientsImageBlockContainer extends Component {
  render() {
    return (<div className="ClientsPanel WrappedImageBlockRow">
      {clientsList()}
    </div>);
  }
}
class ClientsPanel extends Component {

  render() {
    return (
      <div className="ClientsPanel">
        <span className="CenteredDiv TopMargin2em BoldSubtitle">{INCLUDES_CLIENTS_TITLE}</span>
        <div className="FullScreenWidthLine"></div>
        <ClientsImageBlockContainer/>
      </div>
    )
  }
}
export default ClientsPanel;
