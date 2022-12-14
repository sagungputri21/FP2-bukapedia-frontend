import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home';
import CartPage from './pages/user/CartPage';
import ProductDetail from './pages/user/DetailProduct';
import UpdateStockPage from './pages/admin/UpdateStock';
import Navigation from './components/navbar/Navbar';
import Login from './pages/login/login';
import PrivateRoute from './pages/login/privateRoutes';
import RekapPenjualan from './pages/admin/RekapPenjualan';

import {defaultGlobalState, globalStateContext, dispatchStateContext} from './globalState';

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    defaultGlobalState
  );
  return (
    <globalStateContext.Provider value={state}>
      <dispatchStateContext.Provider value={dispatch}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};

function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
          <Route path="/product/:id" element={<PrivateRoute><ProductDetail/></PrivateRoute>} />
          <Route path='/admin/update-stock' element= {<PrivateRoute><UpdateStockPage/></PrivateRoute>} />
          <Route path='/admin/rekap' element={<PrivateRoute><RekapPenjualan/></PrivateRoute>} /> */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path='/admin/update-stock' element= {<UpdateStockPage/>} />
          <Route path='/admin/rekap' element={<RekapPenjualan/>} />
          <Route path='/login' element ={<Login/>}/>
        </Routes>
      </div>
    </GlobalStateProvider>
    
  );
}

export default App;
