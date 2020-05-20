import React from 'react';
import './App.css';
import Header from "./components/HeaderComponent";
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePageComponent";
import ProductPage from "./components/ProductPageComponent";
import Admin from "./components/admin/AdminComponent";

import {ThemeProvider} from './ThemeContext';
import ProductDetails from './components/ProductDetails';

function App() {
  const theme="light";
  /*** to demonstrate simple routing without react-router ***/

  // const route = window.location.pathname;
  // if(route === "/gallery") {
  //   return <div className="App">
  //     <ProductGrid/>
  //   </div>
  // } else {
    return (
      <div className="App" >
        <ThemeProvider value={theme}>
          <Header></Header>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/products" exact component={ProductPage}></Route>
            <Route path="/admin" component={Admin}></Route>
            <Route path="/product/:id" component={ProductDetails}></Route>
          </Switch>
        </ThemeProvider>
      </div>
    );
  // }
}

export default App;
