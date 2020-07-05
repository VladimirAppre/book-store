import React from "react";
import {Route, Switch} from 'react-router-dom'
import HomePage from "../pages/home-page";
import ShopHeader from "../shop-header";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

import './app.css';

const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader />
      <Switch>
        <Route
          path='/'
          exact
          component={HomePage}/>

        <Route
          path='/cart'
          component={ShoppingCartTable}/>
      </Switch>
    </main>

  );
};

export default App;