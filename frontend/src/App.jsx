  import './App.css';
  import React, { useState, useEffect } from 'react';
  import { Hero } from './components/Hero';
  import { Route , Routes} from 'react-router-dom';
  import Login from './components/Login';
  import Signup from './components/Signup';
  import Dashboard from './components/Dashboard';
  import { Details } from './components/Details';
  import DualScrollPicker from './components/DualScrollPicker';
  import Profile from './components/Profile'; 
  import FloatingChatbot from './components/Chat';

  function App() {

  return (
        <Routes>
           <Route path='/' element={<Hero />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/details' element={<Details />} />
          <Route path='/wheel' element={<DualScrollPicker />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<FloatingChatbot />} />
        </Routes>
  );
}

export default App;
