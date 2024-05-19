import React, { useState, useEffect, lazy, Suspense } from "react";
import { Button, Navbar } from "@material-tailwind/react";
import { Loading } from "./screens/Loading";
import { UserNavbar } from "./components/Navbar";
function App() {
  return (
    <div className="w-screen">
      <div className="my-0 md:my-4">
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
