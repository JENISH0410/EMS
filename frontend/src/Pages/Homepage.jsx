import React from 'react';

const Homepage = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen flex items-center justify-center relative"
    >

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full relative z-10 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to EMS</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your one-stop solution for employee management.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
