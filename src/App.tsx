import React from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import {store} from "./store/store";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
      </Provider>);

}

export default App;
