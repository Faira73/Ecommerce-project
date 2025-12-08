import './App.css';
import { HomePage } from './pages/HomePage';
import { OrdersPage} from './pages/OrdersPage';
import { CheckOutPage } from './pages/CheckOutPage';
import { Routes, Route } from 'react-router';

function App() {

  return (
    <Routes>  
      <Route index element={ <HomePage/> } />
      <Route path="checkout" element={ <CheckOutPage/> } />
      <Route path="/orders" element={ <OrdersPage /> } />
    </Routes>
    
  )
}

export default App
