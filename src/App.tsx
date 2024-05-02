import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { LogIn } from './components/LogIn';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LogIn} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
