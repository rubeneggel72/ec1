import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Default from "./components/Default";
import Cart from "./containers/Cart";
import HomeFilter from "./components/HomeFilter";

import { CartProvider } from './context/UseCartContext'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Switch>
            <Route exact path="/">{<Home />}</Route>
            <Route exact path="/filter/:filter">{<HomeFilter />}</Route>
            <Route exact path="/detail/:id"> {<ItemDetailContainer />}</Route>
            <Route exact path="/cart">{<Cart />}</Route>

            <Route>{<Default />}</Route>
          </Switch>

        </BrowserRouter>
      </CartProvider>
    </div>

  )
}
export default App;
