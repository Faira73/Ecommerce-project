import './App.css';
import { HomePage } from './pages/HomePage';
import { OrdersPage} from './pages/OrdersPage';
import { CheckOutPage } from './pages/checkout/CheckOutPage';
import { TrackingPage } from './pages/TrackingPage';
import { Routes, Route } from 'react-router';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {

  return (
    <Routes>  
      <Route index element={ <HomePage/> } />
      <Route path="/checkout" element={ <CheckOutPage/> } />
      <Route path="/orders" element={ <OrdersPage /> } />
      <Route path="/tracking" element={ <TrackingPage /> }/>
      <Route path="*" element={ <NotFoundPage /> } />
    </Routes>
    
  )
}

export default App
