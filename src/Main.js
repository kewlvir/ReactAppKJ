
//bootstrapping

 
import {render} from "react-dom";
import React from "react";

//import App from "./app/App";

import Routes from "./app/Routes";

import store from "./app/Store";

import {Provider} from "react-redux";
  
render(<Provider store={store}>
            <Routes />
        </Provider>
            , 
       document.getElementById("root") //real dom
)