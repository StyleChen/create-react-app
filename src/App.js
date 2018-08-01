import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import * as pages from './pages';
sessionStorage.setItem('userId', 1)
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Route path="/" render={() => (sessionStorage.getItem('userId') ? <Redirect to="/home"></Redirect> : <Redirect to="/login"></Redirect>)}></Route> */}
          <Route path="/login" component={pages.Login}></Route>
          <Route path="/home" component={pages.Home}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
