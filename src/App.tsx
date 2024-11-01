// src/App.tsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import AttendancePage from './components/attendance/AttendancePage';
import Dashboard from './components/Dashboard';
import { Menu } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard'); // Add state for current page

  // Function to handle navigation
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 left-4 p-2 rounded-lg bg-white shadow-md hover:bg-gray-50 lg:hidden z-50"
      >
        <Menu className="w-6 h-6 text-gray-600" />
      </button>

      <div className="flex">
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen}
          onNavigate={handleNavigation}
          currentPage={currentPage}
        />
        <main className="flex-1">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'attendance' && <AttendancePage />}
        </main>
      </div>
    </div>
  );
}

export default App;
