import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import StyleTest from './pages/StyleTest';
import Outfits from './pages/Outfits';
import Profile from './pages/Profile';
import VirtualFittingRoom from './pages/VirtualFittingRoom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/style-test" element={<StyleTest />} />
            <Route path="/outfits" element={<Outfits />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/virtual-fitting-room" element={<VirtualFittingRoom />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;