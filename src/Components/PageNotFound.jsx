import React from "react";
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";

function PageNotFound() {
  return (
    <div className="flex-1 text-center h-[75vh] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold flex items-center text-gray-700">
          <WarningOutlinedIcon className="text-red-400 mr-2" />
          <span className="text-red-400 mr-1">404! </span> Page Not Found
        </h1>
        <p className="text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <p className="text-gray-600 text-sm font-semibold">
          (Page under process...)
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
