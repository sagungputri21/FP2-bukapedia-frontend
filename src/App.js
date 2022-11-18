import './App.css';
import { Route, Routes } from 'react-router-dom';

import Landing from './pages/landing';
import Home from './pages/home';
import Login from './pages/login/login';
import AdminPage from './pages/adminPage';
import UserPage from './pages/userPage';


function App() {
  
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element ={<Landing/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element ={<Login/>}/>
        <Route path='/adminPage' element ={<AdminPage/>}/>
        <Route path='/userPage' element ={<UserPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
