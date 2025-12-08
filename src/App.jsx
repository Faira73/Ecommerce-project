import './App.css';
import { HomePage } from './pages/HomePage';
import { OrdersPage} from './pages/OrdersPage';
import { CheckOutPage } from './pages/checkout/CheckOutPage';
import { TrackingPage } from './pages/TrackingPage';
import { Routes, Route } from 'react-router';

function App() {

  return (
    <Routes>  
      <Route index element={ <HomePage/> } />
      <Route path="/checkout" element={ <CheckOutPage/> } />
      <Route path="/orders" element={ <OrdersPage /> } />
      <Route path="/tracking" element={ <TrackingPage /> }/>
    </Routes>
    
  )
}

export default App
