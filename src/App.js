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
import UpComing from './component/UpComing/UpComing';
import NotFound from './component/NotFound/NotFound';
import OrderReview from './component/OrderReview/OrderReview';
import ProductDites from './component/ProductDites/ProductDites';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route exact path="/product">
            <Product></Product>
          </Route>
          <Route path="/OrderReview">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/UpComing">
            <UpComing></UpComing>
          </Route>
          <Route exact path="/">
            <Product></Product>
          </Route>
          <Route exact path="/product/:productKey">
            <ProductDites></ProductDites>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
