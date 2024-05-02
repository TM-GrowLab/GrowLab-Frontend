import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { LogIn } from './components/LogIn';
import { Feed } from './components/Feed';
import { AanmeldGegevens } from './components/Registreren/AanmeldGegevens';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LogIn} />
        <Route path="/feed" Component={Feed} />

        <Route path="/aanmeldgegevens" Component={AanmeldGegevens} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
