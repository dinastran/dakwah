import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import AttendancePage from './components/attendance/AttendancePage';
import { Menu } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 left-4 p-2 rounded-lg bg-white shadow-md hover:bg-gray-50 lg:hidden z-50"
      >
        <Menu className="w-6 h-6 text-gray-600" />
      </button>

      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <main className="flex-1">
          <AttendancePage />
        </main>
      </div>
    </div>
  );
}

export default App;