import React from "react";

function Recent() {
  return (
    <div className="flex-1">
      <div className="text-center w-[75vw] h-[75vh] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <p className="text-gray-600 text-sm font-semibold">
            No items uploaded in recent !
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recent;
