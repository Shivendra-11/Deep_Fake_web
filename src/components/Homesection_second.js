import React from 'react'

const Homesection_second = () => {
    return (
        <>
        <div className='min-h-28' >

        <h1 class="text-center font-bold text-gray-800  text-4xl  mt-28 ">
  Fast, Accurate, and Reliable.
  Safeguard your digital world with confidence.
</h1>

        <div className="flex flex-row justify-center items-center h-screen">
          {/* Text and Heading Section */}
          <div className="flex-1 flex flex-col justify-center items-start p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">AI Video Detection</h1>
            <p className="text-lg text-gray-600">
            Our AI-generated Video detection service is designed to distinguish AI-created Videos from real human images, ensuring the authenticity of digital content.

As AI-generated Videos become increasingly lifelike, our deepfake detector plays a crucial role in maintaining digital integrity.
            </p>
          </div>
          {/* Image Section */}
         <div className="flex-1 flex justify-center items-center group">
  <img
    className="w-[650px] max-w-[700px] rounded-lg shadow-xl transition duration-900 ease-in-out transform group-hover:-translate-y-2"
    src="https://assets-global.website-files.com/63da3362f67ed6f71c9489c1/660e3673c43d03dd72a2a832_scan_detect-deepfake_%E1%84%83%E1%85%B5%E1%86%B8%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3%201.png"
    alt="Descriptive Alt Text"
  />
</div>


         
          
        </div>

       
        <div className="flex flex-row justify-center items-center h-screen group  "  >

 {/* Image Section */}
 <div className="flex-1 flex justify-center items-center">
            <img
              className=" w-[640px]  max-w-[700px] rounded-lg shadow-xl  transition duration-900 ease-in-out transform group-hover:-translate-y-2 "
              src="https://assets-global.website-files.com/63da3362f67ed6f71c9489c1/660e36b6f8924f06df28ed20_image%20478787-p-500.png"
              alt="Descriptive Alt Text"
            />
          </div>

          {/* Text and Heading Section */}
          <div className="flex-1 flex flex-col justify-center items-start p-2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">AI Face Detection</h1>
            <p className="text-lg text-gray-600">
            Our AI-generated face detection service is designed to distinguish AI-created faces from real human images, ensuring the authenticity of digital content.

As AI-generated images become increasingly lifelike, our deepfake detector plays a crucial role in maintaining digital integrity.
            </p>
          </div>
         

         
          
        </div>

        {/* third div */}
        <div className="flex flex-row justify-center items-center min-h-screen p-6  py-2 ">
          {/* Text and Heading Section */}
          <div className="flex-1 flex flex-col justify-center items-start py-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Deepfake Voice Detection</h1>
            <p className="text-lg text-gray-600">
            Our synthetic speech detection service identifies manipulated voices and audio by analyzing the spectral content of audio signals to detect inconsistencies that indicate alterations
            </p>
          </div>
          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center group ">
            <img
              className=" w-[650px]  max-w-[700px] rounded-lg shadow-xl  transition duration-900 ease-in-out transform group-hover:-translate-y-2"
              src="https://assets-global.website-files.com/63da3362f67ed6f71c9489c1/660e3694ca4a9923e1f84254_image%2046.png"
              alt="Descriptive Alt Text"
            />
          </div>

         
          
        </div>
        </div>

        </>
         

      );
}

export default Homesection_second;
