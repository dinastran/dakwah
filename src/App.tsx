// src/App.tsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import AttendancePage from './components/attendance/AttendancePage';
import Dashboard from './components/Dashboard';
import { Menu } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <div className="hidden lg:flex">
        <Sidebar 
          isOpen={true}
          setIsOpen={() => {}}
          onNavigate={handleNavigation}
          currentPage={currentPage}
        />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar for mobile */}
        <header className="bg-white shadow-sm lg:hidden">
          <div className="px-4 py-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-500 focus:outline-none focus:text-gray-700"
            >
              <Menu size={24} />
            </button>
          </div>
        </header>

        {/* Mobile sidebar */}
        <Sidebar 
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          onNavigate={handleNavigation}
          currentPage={currentPage}
        />

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {currentPage === 'dashboard' && <Dashboard />}
            {currentPage === 'attendance' && <AttendancePage />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
