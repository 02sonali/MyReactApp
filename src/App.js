import React from 'react';
import './App.css';
import Header from "./components/HeaderComponent";
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePageComponent";
import Admin from "./components/admin/AdminComponent";

import {ThemeProvider} from './ThemeContext';

// import ImageGrid from './components/ImageGridComponent';

function App() {
  const theme="light";
  /*** to demonstrate simple routing without react-router ***/

  // const route = window.location.pathname;
  // if(route === "/gallery") {
  //   return <div className="App">
  //     <ImageGrid/>
  //   </div>
  // } else {
    return (
      <div className="App" >
        <ThemeProvider value={theme}>
          <Header></Header>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/admin" component={Admin}></Route>
          </Switch>
        </ThemeProvider>
      </div>
    );
  // }
}

export default App;
