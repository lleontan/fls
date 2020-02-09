import React,{Component} from "react";
import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect, Link} from "react-router-dom";
import MainPage from "./Components/MainPage";
import ContactPage from "./Components/ContactPage";
import NavBanner from "./Components/NavBanner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
  }
  render() {
    return (
        <div>
          <NavBanner/>
          <main>
            <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route path="/contact" component={ContactPage}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
    );
  }
}

export default App;
