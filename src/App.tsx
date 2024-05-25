import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LogIn } from './components/LogIn';
import { Feed } from './pages/Feed';
import { AanmeldGegevens } from './components/Registreren/AanmeldGegevens';
import { CoachingDashboardStarter } from './pages/CoachingDashBoardStarter';
import PostPage from './pages/PostPage';
import CoachingClassPage from './pages/CoachingClassPage';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/dashboard" element={<CoachingDashboardStarter />} />
        <Route path="/aanmeldgegevens" element={<AanmeldGegevens />} />
        <Route path="/post/:postUUID" element={<PostPage />} />
        <Route path="/class/:classUUID" element={<CoachingClassPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
