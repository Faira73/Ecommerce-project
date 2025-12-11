import './App.css';
import axios from 'axios';
import { useState, useEffect} from 'react';
import { HomePage } from './pages/HomePage';
import { OrdersPage } from './pages/OrdersPage';
import { CheckOutPage } from './pages/checkout/CheckOutPage';
import { TrackingPage } from './pages/TrackingPage';
import { Routes, Route } from 'react-router';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items')
      .then((response) => {
        setCart(response.data);
      });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path="/checkout" element={<CheckOutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  )
}

export default App
