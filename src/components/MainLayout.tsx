import React from 'react';
import { NavBar } from './NavBar';
import { NavBarVisitor } from './NavBarVisitor';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
        {localStorage.getItem('token') ? (
            <NavBar />
        ) : (
            <NavBarVisitor />
        )}
      <main className={localStorage.getItem('token') ? "" : "visitorMain"} >{children}</main>
    </div>
  );
};

export default MainLayout;
