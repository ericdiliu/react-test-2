import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

class App extends Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Router>
              <div>
                  <Route exact path='/' component={PostsIndex} />
                  <Route exact path='/posts/new' component={PostNew} />
                  <Route path='/posts/:id' component={PostShow} />
              </div>
          </Router>
      </div>
      </Provider>
    );
  }
}

export default App;
