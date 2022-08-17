import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import VideoCall from "./pages/meeting";
import JoinMeeting from "./pages/join";
import Navbar from './MainContent/Navbar/Navbar.js';
import Footer from './MainContent/Footer/Footer.js'
import Body from './MainContent/Body/Body.js';
import DoctorDetails from './components/DoctorDetails.js';

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar></Navbar>

          <Switch>
            <Route exact path="/" component={Body}></Route>
            <Route path="/DoctorDetails/:id" component={DoctorDetails}></Route>
            <Route path="/ji" component={JoinMeeting} />
            <Route exact path="/video/:id" component={VideoCall} />
          </Switch>
          <Footer></Footer>
        </Router>
      </>
    );
  }
}
