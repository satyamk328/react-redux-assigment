import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";

// configuring store and connecting redux to react through provider


ReactDOM.render(
	<Provider store={store}>
	  <Router><App /></Router>
	</Provider>,
	document.getElementById("root")
  );
  
serviceWorker.unregister();



