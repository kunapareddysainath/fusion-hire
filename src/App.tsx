import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import ScrollToTop from './ScrollToTop';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Outlet /> {/* Nested routes render here */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
