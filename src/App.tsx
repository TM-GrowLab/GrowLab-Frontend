import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LogIn } from './components/LogIn';
import { Feed } from './pages/Feed';
import { AanmeldGegevens } from './components/Registreren/AanmeldGegevens';
import { MyProfilePage } from './pages/MyProfilePage';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LogIn} />
        <Route path="/myProfile" Component={MyProfilePage} />
        <Route path="/feed" Component={Feed} />

        <Route path="/aanmeldgegevens" Component={AanmeldGegevens} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
