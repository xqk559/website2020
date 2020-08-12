import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  state = {
    dontclick : null,
  }
  render() {
    return (
      <Router history={this.history}>
        <div className="App">
          <header className="Menu1">
            <nav className="MyRow">
              <ul className="List"><a href="/" className="Link" class="btn btn-secondary" role="button" aria-pressed="true">Home</a></ul>
              <ul className="List"><a href="https://docs.google.com/document/d/1bV1kvFRinTEv72zRznAptFIcL3CW0q2ckHVhPQxeang/edit?usp=sharing" className="Link" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" role="button" aria-pressed="true" >Resume</a></ul>
              <ul className="List"><a href="https://github.com/xqk559" className="Link" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" role="button" aria-pressed="true">GitHub</a></ul>
              <ul className="List"><a href="/Contact" class="btn btn-secondary" role="button" aria-pressed="true">Contact</a></ul>
              <ul class="dropdown" className="List">
                <button className="List" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Projects
                </button>
                <div className="List" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="https://habitual-f64a5.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Habitual</a>
                  <a class="dropdown-item" href="https://hindsight2020-19f09.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Hindsight BC</a>
                  <a class="dropdown-item" href="https://burgerbuilder-cea69.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Burger Builder</a>
                </div>
              </ul>
            </nav>
          </header>
          <Route path="/" exact render={() =>
            <body className="Body1">
              <br></br>
              <img src = { require ('./photo.png')} height= "200" width= "200" alt=""/>
              <br></br>
              <b className="BigText">Keith Davis</b>
              <br></br>
              <div class='blurb'>I am a front-end web developer with experience in React, <br></br>React Native, Angular, Firebase, Python, C#, and .NET.</div>
              <div></div>
              <br></br>
            </body>} />
          <Route path="/Resume" exact render={() => <h1>Resume</h1>} />
          <Route path="/Contact" exact render={() =>
            <div>
              <h1 style={{marginTop: 75}}>Contact</h1>
              <br></br>
              <p>Email: xqk559@gmail.com</p>
              <p>GitHub: <a href="https://github.com/xqk559" target="_blank" rel="noopener noreferrer">https://github.com/xqk559</a></p>
            </div>} />
        </div>
      </Router>
    );
  }
}

export default App;
