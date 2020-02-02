import React from "react";
import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,
  Route, Redirect,
  Link } from "react-router-dom";
import MainPage from "./Components/MainPage.js";
import ContactPage from "./Components/ContactPage.js";
import NavBanner from "./Components/NavBanner.js";


function App() {
  return (
    <div>
    <NavBanner/>
         <main>
             <Switch>
               <Route exact path="/" render={MainPage}/>
               <Route path="/contact" component={ContactPage}/>
               <Redirect to="/"/>
             </Switch>
         </main>

         </div>
  );
}

export default App;
