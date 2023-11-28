import { Route, Routes } from 'react-router-dom';
import './App.css';
import Order from './customer/Order/Order';
import OrderDetails from './customer/Order/OrderDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import HomePage from './customer/pages/homepage/HomePage';
import CustomerRouters from './customer/Routers/CustomerRouters';

function App() {
  return (
    <div className=''>

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
      {/* <Navigation/> */}
    
    <div>
      
    </div>
    {/* <Footer/>  */}
    </div>
  );
}

export default App;
