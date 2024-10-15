import React from 'react';
import { Link } from 'react-router-dom';
import { User, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-600">FashionFit</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/style-test" className="text-gray-600 hover:text-indigo-600">Style Test</Link></li>
            <li><Link to="/outfits" className="text-gray-600 hover:text-indigo-600">Outfits</Link></li>
            <li><Link to="/virtual-fitting-room" className="text-gray-600 hover:text-indigo-600">Virtual Fitting Room</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="text-gray-600 cursor-pointer" />
          <Link to="/profile">
            <User className="text-gray-600 cursor-pointer" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;