import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LogIn } from './components/LogIn';
import { Feed } from './pages/Feed';
import { AanmeldGegevens } from './components/Registreren/AanmeldGegevens';
import { MyProfilePage } from './pages/MyProfilePage';
import { CoachingDashboardStarter } from './pages/CoachingDashBoardStarter';
import { CoachingDashboardCoach } from './pages/CoachingDashBoardCoach';
import PostPage from './pages/PostPage';
import CoachingClassPage from './pages/CoachingClassPage';
import CreatePost from './components/Post/CreatePost';
import { UserPage } from './pages/UserPage';
import MainLayout from './components/MainLayout'; 
import {MyConnectionsPage} from './pages/MyConnectionsPage';
import { FeedStartups } from './pages/FeedStartups';
import  ProfileStartup  from './pages/ProfileStartup';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/login" element={<MainLayout><LogIn /></MainLayout>} />
        <Route path="/feed" element={<MainLayout><Feed /></MainLayout>} />
        <Route path="/startup/:UUID" element={<MainLayout><ProfileStartup /></MainLayout>} />
        <Route path="/feedStartups" element={<MainLayout><FeedStartups /></MainLayout>} />
        <Route path="/post/new" element={<MainLayout><CreatePost /></MainLayout>} />
        <Route path="/dashboard" element={<MainLayout><CoachingDashboardStarter /></MainLayout>} />
        <Route path="/coachDashboard" element={<MainLayout><CoachingDashboardCoach /></MainLayout>} />
        <Route path="/aanmeldgegevens" element={<MainLayout><AanmeldGegevens /></MainLayout>} />
        <Route path="/post/:postUUID" element={<MainLayout><PostPage /></MainLayout>} />
        <Route path="/class/:classUUID" element={<MainLayout><CoachingClassPage /></MainLayout>} />
        <Route path="/myProfile" element={<MainLayout><MyProfilePage /></MainLayout>} />
        <Route path="/user/:userUUID" element={<MainLayout><UserPage /></MainLayout>} />
        <Route path="/connections" element={<MainLayout><MyConnectionsPage /></MainLayout>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
