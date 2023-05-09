import React from 'react';
import errorGif from '../../assets/error.gif';
import Navbar from '../../Components/Navbar/Navbar';

const ErrorPage = () => {
  return (
    <>
    <Navbar/>
    <div className="max-h-screen flex flex-col items-center justify-center  p-6">
      <img src={errorGif} alt="Error GIF" className=" w-[700px] md:w-96" />
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mt-8">Oops! Something went wrong.</h1>
      <p className="text-gray-700 mt-4 text-center max-w-md">
        We're sorry, but the page you are looking for cannot be found.
      </p>
      <button
        onClick={() => window.location.replace('/')}
        className="bg-[#008185] hover:bg-[#266265] text-white font-bold py-2 px-4 rounded mt-8 focus:outline-none md:w-full"
      >
        Back to Home
      </button>
    </div>
    </>
    
  );
};

export default ErrorPage;
