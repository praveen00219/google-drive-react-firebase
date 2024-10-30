import React from "react";
import landSplash from "../assets/landing-splash.jpg";
import { Link } from "react-router-dom";

function DriveNotLogged() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-col items-center bg-white p-8 text-center md:flex-row md:justify-around md:text-left">
        <div className="md:w-2/3">
          <div>
            <h1 className="text-5xl md:text-6xl text-gray-700">
              Easy and secure access to all of your content
            </h1>
            <p className="mt-4 text-gray-600">
              Store, share and collaborate on files and folders from any mobile
              device, tablet, or computer.
            </p>
          </div>
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

        <div className="mt-10 md:mt-0 md:w-2/3 flex items-center justify-center">
          <img src={landSplash} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DriveNotLogged;
