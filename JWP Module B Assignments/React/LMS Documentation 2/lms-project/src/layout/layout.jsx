import React, { useState } from "react";
import Drawer from "./Screen/Drawer";

export default function Layout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">School Dashboard</h1>
        <button
          onClick={openDrawer}
          className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700"
        >
          Dashboard
        </button>
      </header>

      {/* Drawer */}
      {isDrawerOpen && <Drawer onClose={closeDrawer} />}

      {/* Main Content */}
      <main className="p-6">
        <h2 className="text-2xl font-semibold">Welcome</h2>
        <p className="mt-2">Click Dashboard to open drawer.</p>
      </main>
    </div>
  );
}
