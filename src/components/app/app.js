import React from "react";
import {Route, Switch} from 'react-router-dom'
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import ShopHeader from "../shop-header";

import './app.css';

const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader numItems={2} total={1200}/>
      <Switch>
        <Route
          path='/'
          exact
          component={HomePage}/>

        <Route
          path='/cart'
          component={CartPage}/>
      </Switch>
    </main>

  );
};

export default App;