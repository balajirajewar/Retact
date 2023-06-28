import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Users from './User-list';
import UserProfile from './User-Profile';
import Page404 from './page404';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      
<BrowserRouter>
<Header/>
    <Routes>
      <Route path="/"  element={<Home/>}></Route>
      <Route path="/Users" element={<Users/>}></Route>
      <Route path="/UserProfile/:id" element={<UserProfile/>}></Route>
      <Route path='*' element={<Page404/>}></Route>
    </Routes>  
</BrowserRouter>


    </div>
 
  );
}

export default App;
