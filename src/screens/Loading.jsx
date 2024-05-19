import React, { useState, useEffect } from "react";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full animate-pulse ">
        <p className="text-lg text-gray-700 mt-4">Loading...</p>
        <p className="text-3xl text-gray-700 mt-4 font-bold">TC</p>
      </div>
    </div>
  );
};
