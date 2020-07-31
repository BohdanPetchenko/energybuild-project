import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux'

import { history } from "./history/index";
import store from "./store/index";

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <Header />
        <Footer />
      </Provider>
    </Router>

  );
}

export default App;
