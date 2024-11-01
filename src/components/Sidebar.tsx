import React from 'react';
import { X, Home, Users, BookOpen, ClipboardCheck, BookMarked, MessageSquare, Link } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { icon: Home, label: 'Beranda', href: '#' },
    { icon: Users, label: 'List Kontakan', href: '#' },
    { icon: ClipboardCheck, label: 'Asesment Internal', href: '#' },
    { icon: BookOpen, label: 'Kehadiran JM HS', href: '#' },
    { icon: BookMarked, label: 'Stifin', href: '#' },
    { icon: MessageSquare, label: 'Mutabaah', href: '#' },
    { icon: BookOpen, label: 'Panduan Halqah', href: '#' },
    { icon: ClipboardCheck, label: 'Laporan Guru', href: '#' },
    { icon: Link, label: 'Link WA Generator', href: '#' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
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
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;