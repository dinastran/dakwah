// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
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
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar for desktop */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar for mobile */}
        <Sidebar 
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          onNavigate={handleNavigation}
          currentPage={currentPage}
        />

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {/* Mobile menu button */}
          <div className="lg:hidden p-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-500 focus:outline-none focus:text-gray-700"
            >
              <Menu size={24} />
            </button>
          </div>

          <div className="container mx-auto px-6 py-8">
            {currentPage === 'dashboard' && <Dashboard />}
            {currentPage === 'attendance' && <AttendancePage />}
            {/* Add other pages here */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
