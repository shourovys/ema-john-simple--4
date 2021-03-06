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
import Inventory from './component/Inventory/Inventory';
import NotFound from './component/NotFound/NotFound';
import OrderReview from './component/OrderReview/OrderReview';
import ProductDites from './component/ProductDites/ProductDites';
import Login from './component/Login/Login';
import { AuthContextProvider, PrivateRoute } from './component/Login/UseAuth';
import Shipment from './component/Shipment/Shipment';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>

        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/product">
              <Product></Product>
            </Route>
            <Route path="/OrderReview">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
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
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
