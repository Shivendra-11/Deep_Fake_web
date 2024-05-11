import React from 'react';

const Homesection = () => {
  return (
    <div
      className="flex items-center  justify-center min-h-screen bg-cover bg-center p-3  "
      style={{
        backgroundImage: "url('https://assets-global.website-files.com/63da3362f67ed6f71c9489c1/660b981f619f8fc095561cce_circle_bg2.png')"
      }}
    >
      {/* Text container */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold text-white mb-4">
          <span className='text-dark '>DETECTING </span><span  className='text-purple-600' > DEEPFAKES USING AI</span> 
        </h1>
        <div className="space-y-4 p-4 bg-white bg-opacity-80 hover:shadow-md shadow-md rounded-lg">
          <p className="text-lg text-gray-800">
            Detect AI-generated Medias for your business - and yourself - with DeepGuard.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1">
            Upload Video
          </button>
        </div>
      </div>
      {/* Image container */}
      <div className="flex-1 flex justify-center">
        <img
          className="rounded-lg shadow-lg max-w-full w-[900px] h-auto align-middle border-none"
          src={require("./images/home.jpg")}
          alt="Descriptive Alt Text"
        />
      </div>
    </div>
  );
}

export default Homesection;
