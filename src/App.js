import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from  './components/NavBar';
import Login from './components/Login';
import Landing from './components/Landing';
import OrderManagement from './components/OrderManagement';
import PurchaseRequisitions from './components/PurchaseRequisitions';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        {/*<Route exact path ="/" component={Landing}/>*/}
        {/*<div className="container">*/}
        {/*  <Route exact path ="/login" component={Login}/>*/}
        {/*  <Route exact path ="/orders" component={OrderManagement}/>*/}
        {/*  <Route exact path ="/purchase" component={PurchaseRequisitions}/>*/}
        {/*</div>*/}
      </div>
    </Router>
  );
}

export default App;
