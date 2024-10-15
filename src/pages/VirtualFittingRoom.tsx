import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Mock data for outfits
const mockOutfits = [
  { id: 1, name: "Casual Weekend", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
  { id: 2, name: "Office Chic", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
  { id: 3, name: "Evening Glamour", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
  { id: 4, name: "Sporty Look", image: "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" },
];

const VirtualFittingRoom: React.FC = () => {
  const [currentOutfit, setCurrentOutfit] = useState(0);

  const nextOutfit = () => {
    setCurrentOutfit((prev) => (prev + 1) % mockOutfits.length);
  };

  const prevOutfit = () => {
    setCurrentOutfit((prev) => (prev - 1 + mockOutfits.length) % mockOutfits.length);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Virtual Fitting Room</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="relative">
          <img
            src={mockOutfits[currentOutfit].image}
            alt={mockOutfits[currentOutfit].name}
            className="w-full h-96 object-cover rounded-lg"
          />
          <button
            onClick={prevOutfit}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={nextOutfit}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <ArrowRight size={24} />
          </button>
        </div>
        <h2 className="text-2xl font-semibold mt-4 text-center">{mockOutfits[currentOutfit].name}</h2>
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">How does this outfit look on you?</p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300">
              Love it!
            </button>
            <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">
              Not for me
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Outfit Details</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Top: White cotton blouse</li>
          <li>Bottom: High-waisted jeans</li>
          <li>Shoes: Brown leather ankle boots</li>
          <li>Accessories: Gold hoop earrings, leather watch</li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Styling Tips</h3>
        <p className="text-gray-700">
          This outfit is perfect for a casual day out. The white blouse keeps things fresh and clean, while the high-waisted jeans elongate your legs. The brown ankle boots add a touch of sophistication, and the gold accessories complement the overall look without overpowering it.
        </p>
      </div>
    </div>
  );
};

export default VirtualFittingRoom;