
import React from "react";

import {Route, 
        Switch,
        } from "react-router-dom";

        
import Cart 
        from "./containers/Cart";

 
export default function Routes(props) {
    return (
       <Route path="/cart" component={Cart}  >
                
       </Route>
    )
}
