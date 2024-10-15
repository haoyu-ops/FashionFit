import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shirt, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Discover Your Perfect Style</h1>
        <p className="text-xl mb-8">Personalized fashion recommendations based on your body type, preferences, and personality.</p>
        <Link to="/style-test" className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300">
          Take Style Test
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Sparkles className="mx-auto mb-4 text-indigo-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
          <p>Get outfit suggestions tailored to your unique style and body type.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Shirt className="mx-auto mb-4 text-indigo-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Virtual Fitting Room</h3>
          <p>Try on outfits virtually and see how they look on you before buying.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="mx-auto mb-4 text-indigo-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Community Insights</h3>
          <p>Share your style and get inspired by others in our fashion community.</p>
        </div>
      </section>

      <section className="bg-indigo-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Featured Outfits</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {/* Replace with actual outfit components or images */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-4 rounded-md shadow">
              <div className="bg-gray-300 h-48 mb-2 rounded"></div>
              <p className="font-semibold">Outfit {i}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;