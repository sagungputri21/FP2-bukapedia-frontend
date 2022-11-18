import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Landing from './pages/landing';
import Home from './pages/home';
import Login from './pages/login/login';
import AdminPage from './pages/adminPage';
import Navigation from './components/navbar/Navbar';
import UserPage from './pages/userPage';
import PrivateRoute from './pages/login/privateRoutes';

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
        <Navigation/>
        <Routes>
          <Route path='/' element ={<Landing/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element ={<Login/>}/>
          <Route 
            path='/adminPage' 
            element ={
              <PrivateRoute>
                <AdminPage/>
              </PrivateRoute>

            }/>
          <Route path='userPage' element ={
            <PrivateRoute>
              <UserPage/>
            </PrivateRoute>
          }/>
        </Routes>
      </div>

    </GlobalStateProvider>
    
  );
}

export default App;
