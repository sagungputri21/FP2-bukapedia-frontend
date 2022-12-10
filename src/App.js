import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home';
import CartPage from './pages/user/CartPage';
import ProductDetail from './pages/user/DetailProduct';
import UpdateStockPage from './pages/admin/UpdateStock';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path='/admin/update-stock' element={<UpdateStockPage/>} />
      </Routes>
    </div>
  );
}

export default App;
