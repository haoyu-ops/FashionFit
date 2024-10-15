import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Edit2 } from 'lucide-react';

// Mock user data
const mockUser = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  phone: "+1 234 567 8900",
  birthdate: "1990-01-01",
  height: 165,
  weight: 60,
  bodyType: "Hourglass",
  favoriteStyles: ["Casual Chic", "Bohemian"],
  mbti: "INFP"
};

const Profile: React.FC = () => {
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Here you would typically send the updated user data to your backend
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Profile</h1>
          {!isEditing && (
            <button onClick={handleEdit} className="flex items-center text-indigo-600 hover:text-indigo-800">
              <Edit2 size={20} className="mr-2" />
              Edit Profile
            </button>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <User className="text-gray-400 mr-4" size={24} />
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="flex-grow p-2 border rounded"
              />
            ) : (
              <span>{user.name}</span>
            )}
          </div>

          <div className="flex items-center">
            <Mail className="text-gray-400 mr-4" size={24} />
            <span>{user.email}</span>
          </div>

          <div className="flex items-center">
            <Phone className="text-gray-400 mr-4" size={24} />
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="flex-grow p-2 border rounded"
              />
            ) : (
              <span>{user.phone}</span>
            )}
          </div>

          <div className="flex items-center">
            <Calendar className="text-gray-400 mr-4" size={24} />
            {isEditing ? (
              <input
                type="date"
                name="birthdate"
                value={user.birthdate}
                onChange={handleChange}
                className="flex-grow p-2 border rounded"
              />
            ) : (
              <span>{user.birthdate}</span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
              {isEditing ? (
                <input
                  type="number"
                  name="height"
                  value={user.height}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              ) : (
                <span>{user.height} cm</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
              {isEditing ? (
                <input
                  type="number"
                  name="weight"
                  value={user.weight}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              ) : (
                <span>{user.weight} kg</span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Body Type</label>
            {isEditing ? (
              <select
                name="bodyType"
                value={user.bodyType}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="Hourglass">Hourglass</option>
                <option value="Pear">Pear</option>
                <option value="Apple">Apple</option>
                <option value="Rectangle">Rectangle</option>
                <option value="Inverted Triangle">Inverted Triangle</option>
              </select>
            ) : (
              <span>{user.bodyType}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Favorite Styles</label>
            <div className="mt-1 flex flex-wrap gap-2">
              {user.favoriteStyles.map((style, index) => (
                <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">
                  {style}
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">MBTI Personality Type</label>
            {isEditing ? (
              <input
                type="text"
                name="mbti"
                value={user.mbti}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            ) : (
              <span>{user.mbti}</span>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setIsEditing(false)}
              className="mr-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;