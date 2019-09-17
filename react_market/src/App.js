import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home_page from './components/home_page';
import Products_page from './components/products_page';
import Details_product_page from './components/details_product_page';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route path="/" exact component={Home_page}></Route>
      <Route path="/products"  component={Products_page}></Route>
      <Route path="/details/:id"  component={Details_product_page}></Route>
  </BrowserRouter>  
    );
  }
}
export default App;
