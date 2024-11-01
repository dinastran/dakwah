// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AttendancePage from './components/attendance/AttendancePage';
import { Menu } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Navbar for desktop */}
        <Navbar />

        {/* Main content area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar for mobile */}
          <Sidebar 
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
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
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/contacts" element={<div>List Kontakan Page</div>} />
                <Route path="/assessment" element={<div>Assessment Page</div>} />
                <Route path="/attendance" element={<AttendancePage />} />
                <Route path="/stifin" element={<div>Stifin Page</div>} />
                <Route path="/mutabaah" element={<div>Mutabaah Page</div>} />
                <Route path="/guide" element={<div>Panduan Halqah Page</div>} />
                <Route path="/reports" element={<div>Laporan Guru Page</div>} />
                <Route path="/wa-generator" element={<div>WA Generator Page</div>} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
