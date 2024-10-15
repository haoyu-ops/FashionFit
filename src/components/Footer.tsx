import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">FashionFit</h3>
            <p className="text-sm">Discover your perfect style with personalized recommendations.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="/about" className="hover:text-indigo-400">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-indigo-400">Contact</a></li>
              <li className="mb-2"><a href="/privacy" className="hover:text-indigo-400">Privacy Policy</a></li>
              <li className="mb-2"><a href="/terms" className="hover:text-indigo-400">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400"><Facebook /></a>
              <a href="#" className="hover:text-indigo-400"><Instagram /></a>
              <a href="#" className="hover:text-indigo-400"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          &copy; 2024 FashionFit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;