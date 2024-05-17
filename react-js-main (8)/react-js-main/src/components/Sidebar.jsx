import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 h-screen w-64">
      <div className="relative mb-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <button className="absolute top-0 right-0 bg-blue-500 text-white rounded-full p-2 transform translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
      <h2 className="text-xl font-bold mb-4">Johnny Dough</h2>
      <div className="flex flex-col w-full">
        <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded mb-2 hover:bg-gray-300">
          Profile
        </button>
        <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded mb-2 hover:bg-gray-300">
          Friends
        </button>
        <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded mb-2 hover:bg-gray-300">
          Notification
        </button>
        <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded mb-2 hover:bg-gray-300">
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;