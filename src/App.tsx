import React from 'react';
import ProductListPage from './pages/TestPage';
import { NavBar } from './components/NavBar';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div>
        <ProductListPage />
      </div>
    </>
  );
};

export default App;
