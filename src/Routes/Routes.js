import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {About,Home,Contact,ProductItem,Products} from '../components'
import NavBar from '../components/NavBar'
function Routes() {
  return (
    <Router>
      <NavBar/>
      <Switch>

        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/contact">
            <Contact/>
        </Route>
        <Route exact  path="/product">
            <Products/>
        </Route>
        <Route path="/product/:id">
            <ProductItem/>
        </Route>
        <Route path="*" component={()=><h1>404 not found</h1>}/>

      </Switch>
    </Router>
  );
}

export default Routes;
