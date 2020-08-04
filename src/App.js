import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Product from './component/Product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OrderReview from './component/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route exact to="/product">
            <Product></Product>
          </Route>
          <Route exact to="/">
            <Product></Product>
          </Route>
          <Route to="/OrderReview">
            <OrderReview></OrderReview>
          </Route>
          <Route to="/UpComing">
            <Product></Product>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
