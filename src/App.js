import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/components/main.css"
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from "./redux/store"

function App() {


  return ( 
      <BrowserRouter>
        <Provider store={store}>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </Provider>
      </BrowserRouter>
  );
}

export default App;
