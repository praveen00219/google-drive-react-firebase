import React from "react";
import landSplash from "../assets/landing-splash.jpg";
import { Link } from "react-router-dom";

function DriveNotLogged() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-gray-50">
      <div className="flex flex-col items-center bg-white p-6 md:p-8 lg:p-12 shadow-md rounded-lg text-center md:flex-row md:text-left md:space-x-8">
        {/* Text Container */}
        <div className="md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700 font-semibold">
            Easy and secure access to all of your content
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
            Store, share, and collaborate on files and folders from any mobile
            device, tablet, or computer.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Link to="/login">
              <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
                Go to Drive
              </button>
            </Link>
            <button className="px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-md hover:bg-blue-200">
              Try Drive for your team
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="md:w-1/2 lg:w-3/5 flex items-center justify-center">
          <img
            src={landSplash}
            alt="Drive Landing"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default DriveNotLogged;
