import React from "react";

const GoogleOnePlans = () => {
  return (
    <div className="flex-1">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Try Google One at a discount
          </h1>
          <p className="text-center text-gray-600 mb-6">
            All Google accounts include 15 GB of storage. Cancel at any time.
          </p>

          {/* Tabs for Monthly and Annual */}
          <div className="flex justify-center space-x-4 mb-6">
            <button className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-600 rounded-md">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md">
              Annual <span className="text-xs">(Save up to 55%)</span>
            </button>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Current Plan */}
            <div className="bg-gray-50 border rounded-lg p-4 text-center">
              <div className="text-xl font-semibold mb-2">15 GB</div>
              <p className="text-gray-500 mb-2">Current</p>
              <p className="text-gray-600">
                15 GB of storage for Photos, Drive and Gmail
              </p>
            </div>

            {/* Discounted Plan */}
            <div className="border rounded-lg p-4 text-center shadow-lg border-blue-500">
              <div className="text-blue-600 font-semibold mb-1">
                Recommended
              </div>
              <div className="text-xl font-semibold mb-2">Lite (30 GB)</div>
              <p className="line-through text-gray-400">₹59</p>
              <p className="text-3xl font-bold text-green-600">₹15/mo</p>
              <p className="text-gray-500 mb-2">for 2 months</p>
              <p className="text-xs text-green-500 mb-4">
                Save up to ₹88 with offer
              </p>
              <button className="bg-blue-600 text-white rounded-full py-2 px-6 mb-2 hover:bg-blue-700 transition">
                Get discount
              </button>
              <p className="text-gray-600 mt-2">
                30 GB of storage for Photos, Drive and Gmail
              </p>
            </div>

            {/* Basic Plan */}
            <div className="bg-gray-50 border rounded-lg p-4 text-center">
              <div className="text-xl font-semibold mb-2">Basic (100 GB)</div>
              <p className="text-gray-600">
                100 GB of storage for Photos, Drive and Gmail
              </p>
            </div>

            {/* Standard Plan */}
            <div className="bg-gray-50 border rounded-lg p-4 text-center">
              <div className="text-xl font-semibold mb-2">
                Standard (200 GB)
              </div>
              <p className="text-gray-600">
                200 GB of storage for Photos, Drive and Gmail
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleOnePlans;
