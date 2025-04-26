import React from 'react';

const section1 = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center min-h-screen bg-gradient-to-b from-purple-300 to-purple-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-white rounded-full shadow-lg">
        <img 
          src="https://res.cloudinary.com/dnyrrcacd/image/upload/v1745634778/porto%20commerce%20web-v1/logo-nobg_lzhhbj.png" 
          alt="Purple Technology Logo"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain transition-all duration-300 hover:scale-105 pointer-events-none select-none" 
        />
      </div>

      <div className="w-full max-w-2xl text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-900 mb-4 sm:mb-6 leading-tight">
          Welcome to our <span className="text-purple-600">Commpany Profile</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-purple-800 mb-4 sm:mb-4 leading-relaxed">
          Where we building your professional business a high quality website.
        </p>
        
        <p className="text-sm sm:text-md text-purple-700 mb-6 sm:mb-8">
          Interested on our product? contact us from the link below!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 justify-center">
          <button className="bg-purple-600 hover-glow hover:bg-purple-700 text-white font-medium sm:font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-md transition ease-in-out duration-500 transform hover:scale-105 text-sm sm:text-base hover:shadow-purple-500">
            Our Services
          </button>
          
          
          <button className="border-2 hover-glow hover:bg-purple-400 hover:text-white ease-in-out border-purple-600 text-purple-900 hover:shadow-purple-500 font-medium sm:font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105 text-sm sm:text-base">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default section1;