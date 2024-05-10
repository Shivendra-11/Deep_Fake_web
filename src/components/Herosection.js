import React from 'react';

const Homesection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-blue-300 to-blue-200 p-24">
      {/* Text container */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold text-white mb-4">
          <span className='text-dark '>VERIFICATION</span> WITH AI DETECTION
        </h1>
        <div className="space-y-4 p-4 bg-white bg-opacity-80 hover:shadow-md shadow-md rounded-lg">
          <p className="text-lg text-gray-800">
            Detect AI-generated images & audio for your business - and yourself - with DeepGuard
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">
            Upload Image
          </button>
        </div>
      </div>
      {/* Image container */}
      <div className="flex-1 flex justify-center">
        <img
          className="rounded-lg shadow-lg max-w-full w-[900px] h-auto align-middle border-none"
          src="https://assets-global.website-files.com/63da3362f67ed6f71c9489c1/660e3681e2e07aa3f2fb35e9_%E1%84%83%E1%85%B5%E1%86%B8%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3_deepfake-detector%201.png"
          alt="Descriptive Alt Text"
        />
      </div>
    </div>
  );
}

export default Homesection;
