import React, { useState } from 'react';
import { Heart, Share2 } from 'lucide-react';

// Mock data for outfits
const mockOutfits = [
  { id: 1, title: "Casual Chic", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", likes: 120 },
  { id: 2, title: "Office Ready", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", likes: 95 },
  { id: 3, title: "Night Out", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", likes: 150 },
  { id: 4, title: "Weekend Getaway", image: "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", likes: 80 },
];

const Outfits: React.FC = () => {
  const [outfits, setOutfits] = useState(mockOutfits);

  const handleLike = (id: number) => {
    setOutfits(outfits.map(outfit => 
      outfit.id === id ? { ...outfit, likes: outfit.likes + 1 } : outfit
    ));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Trending Outfits</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {outfits.map(outfit => (
          <div key={outfit.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={outfit.image} alt={outfit.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{outfit.title}</h3>
              <div className="flex justify-between items-center">
                <button 
                  className="flex items-center text-gray-600 hover:text-red-500"
                  onClick={() => handleLike(outfit.id)}
                >
                  <Heart className="mr-1" size={20} />
                  <span>{outfit.likes}</span>
                </button>
                <button className="text-gray-600 hover:text-indigo-600">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Outfits;