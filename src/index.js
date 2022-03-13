import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom"

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.min.js"

// must be after bootstrap
import './index.css';

// fontawsome
import "@fortawesome/fontawesome-free/css/all.min.css"
import "@fortawesome/fontawesome-free/js/all.min.js"


ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    
      <App />
    </BrowserRouter>
  

  </React.StrictMode>,
  document.getElementById('root')
);


