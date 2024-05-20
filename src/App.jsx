import React, { useState, useEffect, lazy, Suspense } from "react";
import { Loading } from "./screens/Loading";
import { UserNavbar } from "./components/Navbar";
function App() {
  return (
    <div className="w-screen">
      <div className="absolute flex w-full mt-2 md:mt-4 px-4 md:mx-0">
        <UserNavbar />
      </div>
      <div className="text-center">
        <div className="p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded ">
          This is a sample content.
        </div>
      </div>
    </div>
  );
}

export default App;
