import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,
  Route, Redirect,
  Link } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Routes />, document.getElementById('root'));
