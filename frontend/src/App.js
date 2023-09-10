import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} 
      from 'react-router-dom'
import ListCardComponent from './components/ListCardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCardComponent from './components/CreateCardComponent';
import ViewCardComponent from './components/ViewCardComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component =
                              {ListCardComponent}></Route>
                          <Route path = "/cards" component = 
                              {ListCardComponent}></Route>
                          <Route path = "/add-card/:id" component =
                              {CreateCardComponent}></Route>
                          <Route path = "/view-card/:id" component =
                              {ViewCardComponent}></Route>
                         </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
