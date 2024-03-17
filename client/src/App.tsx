import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';
import FailedSignin from './components/Login/FailedSignin';
import FailedSignup from './components/Login/FailedSignup';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Signin /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/failedsignin" element={ <FailedSignin /> } />
        <Route path="failedsignup" element={ <FailedSignup /> } />

        {/* Make these private access routes later */}

        <Route path="/home" element={ <Dashboard /> } />
      </Routes>
    </div>
  );
}

export default App;
