import React from 'react'

const Multicard = () => {
    const images = [
        { src: 'https://www.aiornot.com/_next/image?url=%2Fimages%2Fimages-slider%2Fimage-one-img-thumb.webp&w=384&q=75', alt: 'Image description 1' },
        { src: 'https://www.aiornot.com/_next/image?url=%2Fimages%2Fimages-slider%2Fimage-two-img-thumb.webp&w=384&q=75', alt: 'Image description 2' },
        { src: 'https://www.aiornot.com/_next/image?url=%2Fimages%2Fimages-slider%2Fimage-three-img-thumb.webp&w=384&q=75', alt: 'Image description 1' },
        { src: 'https://www.aiornot.com/_next/image?url=%2Fimages%2Fimages-slider%2Fimage-four-img-thumb.webp&w=384&q=75', alt: 'Image description 2' },
        { src: 'https://www.aiornot.com/_next/image?url=%2Fimages%2Fimages-slider%2Fimage-five-img-thumb.webp&w=384&q=75', alt: 'Image description 2' },
        
        

        // Add more image objects here
      ];
      

    return (


        <>
<div className='py-16 bg-gray-200 ' >
<h1 className="text-2xl  font-bold text-center text-blue-500 smt-8 mb-4">
    
  Check for AI in the images below or upload your own to find out!
</h1>

          
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {images.map((image, index) => (



            <div key={index} className="w-64 h-80 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:scale-105">
             
              <img
                className="w-full h-full object-cover"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
        </div>
        </>
      );
}

export default Multicard
