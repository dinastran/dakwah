// src/components/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Home, Users, BookOpen, ClipboardCheck, BookMarked, MessageSquare, Link as LinkIcon } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { icon: Home, label: 'Beranda', path: '/' },
    { icon: Users, label: 'List Kontakan', path: '/contacts' },
    { icon: ClipboardCheck, label: 'Asesment Internal', path: '/assessment' },
    { icon: BookOpen, label: 'Kehadiran JM HS', path: '/attendance' },
    { icon: BookMarked, label: 'Stifin', path: '/stifin' },
    { icon: MessageSquare, label: 'Mutabaah', path: '/mutabaah' },
    { icon: BookOpen, label: 'Panduan Halqah', path: '/guide' },
    { icon: ClipboardCheck, label: 'Laporan Guru', path: '/reports' },
    { icon: LinkIcon, label: 'Link WA Generator', path: '/wa-generator' },
  ];

  return (
    <>
      {/* Overlay ketika sidebar terbuka di mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out z-50 lg:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-full flex flex-col">
          {/* Header Sidebar */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center px-4 py-2 text-sm font-medium transition-colors duration-150
                    ${isActive 
                      ? 'bg-green-50 text-green-600' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                  onClick={() => setIsOpen(false)} // Tutup sidebar setelah klik menu
                >
                  <Icon className="h-5 w-5 mr-3" aria-hidden="true" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Footer Sidebar (opsional) */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="/logo.png" // Ganti dengan path logo Anda
                  alt="Logo"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Da'wah Center</p>
                <p className="text-xs text-gray-500">Version 1.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
