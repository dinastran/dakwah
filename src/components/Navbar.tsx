// src/components/Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, BookOpen, ClipboardCheck, BookMarked, MessageSquare, Link as LinkIcon } from 'lucide-react';

const Navbar: React.FC = () => {
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
    <nav className="bg-white shadow-md hidden lg:block">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="font-bold text-xl text-gray-800">
                Da'wah Center
              </NavLink>
            </div>
          </div>
          <div className="flex">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium leading-5 
                    focus:outline-none transition duration-150 ease-in-out
                    ${isActive 
                      ? 'border-green-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  <Icon className="h-5 w-5 mr-1" />
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
