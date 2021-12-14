import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/components/main.css"
import Header from './components/Header';


function App() {

  const [count, setCount] = useState( 0 )
  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
      
      <BrowserRouter>
        <Header count={count} />
        <Routes>
          <Route path="/" element={<Home value={handleClick} />} />
          <Route path="/cart" element={<Cart value={handleClick} />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
