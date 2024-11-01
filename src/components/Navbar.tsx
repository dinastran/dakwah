// src/components/Navbar.tsx
import React from 'react';
import { Home, Users, BookOpen, ClipboardCheck, BookMarked, MessageSquare, Link } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
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
    <nav className="bg-white shadow-md hidden lg:block">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-gray-800">Da'wah Center</span>
            </div>
          </div>
          <div className="flex">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
                  currentPage === item.id
                    ? 'border-green-500 text-gray-900 focus:border-green-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'
                }`}
              >
                <item.icon className="h-5 w-5 mr-1" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
