import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect, hashHistory} from 'react-router-dom';
import {createBrowserHistory } from 'history';

class App extends Component {
  state = {
    dontclick : null,
  }
  render() {

    let history = createBrowserHistory({
      basename: "", // The base URL of the app (see below)
      forceRefresh: false, // Set true to force full page refreshes
      keyLength: 6, // The length of location.key
      // A function to use to confirm navigation with the user (see below)
      getUserConfirmation: (message, callback) => callback(window.confirm(message))
    });

    return (
    <Router history={this.history}>
      <div className="App">
        <div>
          <header className="Menu1">
            <nav className="MyRow">
              <ul className="List"><a href="/" className="Link" class="btn btn-secondary" role="button" aria-pressed="true">Home</a></ul>
              <ul className="List"><a href="https://docs.google.com/document/d/1bV1kvFRinTEv72zRznAptFIcL3CW0q2ckHVhPQxeang/edit?usp=sharing" className="Link" target="_blank" class="btn btn-secondary" role="button" aria-pressed="true" >Resume</a></ul>
              <ul className="List"><a href="https://github.com/xqk559" className="Link" target="_blank" class="btn btn-secondary" role="button" aria-pressed="true">GitHub</a></ul>
              <ul className="List"><a href="/Contact" class="btn btn-secondary" role="button" aria-pressed="true">Contact</a></ul>
              <ul class="dropdown" className="List">
                <button className="List" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Projects
                </button>
                <div className="List" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="https://hindsight-bc.firebaseapp.com/" target="_blank">Hindsight BC</a>
                  <a class="dropdown-item" href="#">Habitual</a>
                </div>
              </ul>
            </nav>
          </header>
          <Route path="/" exact render={() =>
          <body className="Body1">
                    <br></br>
                    <img src = { require ('./photo.png')} height= "200" width= "200" />
                    <br></br>
                    <b className="BigText">Keith Davis</b>
                    <br></br>
                    <div>I am a full stack web developer with experience in React,</div>
                    <div>React Native, Python, Firebase, and currently relevant libraries.</div>
                    <br></br>
          </body>} />
          <Route path="/Resume" exact render={() => <h1>Resume</h1>} />
          <Route path="/Contact" exact render={() =>
            <div>
              <h1>Contact</h1>
              <br></br>
              <p>Email: xqk559@gmail.com</p>
              <p>GitHub: <a href="https://github.com/xqk559" target="_blank">https://github.com/xqk559</a></p>
              </div>} />
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
