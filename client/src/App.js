import React,{Component} from "react";
import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect, Link} from "react-router-dom";
import MainPage from "./Components/MainPage";
import ContactPage from "./Components/ContactPage";
import NavBanner from "./Components/NavBanner";
import FooterPanel from "./Components/FooterPanel";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    console.log("Attempted express backend fetch");
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }else{
      console.log("Successful express backend fetch");
    }
    return body;
  };

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
          <FooterPanel/>
        </div>
    );
  }
}

export default App;
