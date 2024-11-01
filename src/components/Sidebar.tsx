// src/components/Sidebar.tsx
import React from 'react';
import { X, Home, Users, BookOpen, ClipboardCheck, BookMarked, MessageSquare, Link } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, onNavigate, currentPage }) => {
  const menuItems = [
    { icon: Home, label: 'Beranda', id: 'dashboard' },
    { icon: Users, label: 'List Kontakan', id: 'contacts' },
    { icon: ClipboardCheck, label: 'Asesment Internal', id: 'assessment' },
    { icon: BookOpen, label: 'Kehadiran JM HS', id: 'attendance' },
    { icon: BookMarked, label: 'Stifin', id: 'stifin' },
    { icon: MessageSquare, label: 'Mutabaah', id: 'mutabaah' },
    { icon: BookOpen, label: 'Panduan Halqah', id: 'guide' },
    { icon: ClipboardCheck, label: 'Laporan Guru', id: 'reports' },
    { icon: Link, label: 'Link WA Generator', id: 'wa-generator' },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out z-50 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:static lg:z-auto`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Menu Dakwah</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100 lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* Sidebar content */}
          <nav className="flex-1 overflow-y-auto py-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center w-full px-4 py-2 text-left
                    ${currentPage === item.id
                      ? 'bg-green-50 text-green-600'
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <Icon size={20} className="mr-3" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
