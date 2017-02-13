import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import About from './components/About'
import Projects from './components/Projects'
import Map from './components/Map'
import Notes from './components/Notes'
import './css/index.css';

ReactDOM.render(
  (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Projects}/>
      <Route path='about' component={About}/>
      <Route path='projects' component={Projects}/>
      <Route path='map' component={Map}/>
      <Route path='notes' component={Notes}/>
    </Route>
  </Router>
  ),
  document.getElementById('app'))
