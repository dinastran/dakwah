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
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-0`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">Menu Dakwah</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100 lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-3 p-3 rounded-lg w-full transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'bg-green-50 text-green-600'
                      : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  <Icon size={20} />
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
