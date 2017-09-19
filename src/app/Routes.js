import React from "react";

import {BrowserRouter as Router,
        Switch,
        Route} from "react-router-dom";

import {App} from "./App";

import Home from "./components/Home";
//import About from "./components/About";


import CartRoutes from "./cart/Routes";
import ProductRoutes from "./product/Routes";


import Loadable from 'react-loadable';

function Loading() {
    return (
        <div>Loading ...</div>
    )
}

const LoadableAboutComponent = Loadable({
    loader: () => import('./components/About'),
    loading: Loading,
  });

 
 /* const LoadableProductComponent = Loadable({
    loader: () => import('./product/Routes'),
    loading: Loading,
  });
  */

//functional component
export default function Routes() {
    return (
        <Router>
            <App appTitle= "React App">
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={LoadableAboutComponent} />
                    {/*<Route path="/cart" component={cartRoutes} />*/}
                    <CartRoutes />
                    <Route path="/products" component={ProductRoutes} />
            </App>
        </Router>
    )
}