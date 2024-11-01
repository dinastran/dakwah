import React from 'react';
import { Users, ClipboardCheck, UserCheck, Brain } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Selamat Datang di Da'wah Center</h1>
        <p className="text-gray-600 mt-2">Pusat Manajemen dan Pengembangan Da'wah</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Users, label: 'Total Anggota', value: '1,234', color: 'bg-blue-500' },
          { icon: ClipboardCheck, label: 'Asesment Selesai', value: '856', color: 'bg-green-500' },
          { icon: UserCheck, label: 'Kehadiran Bulan Ini', value: '92%', color: 'bg-yellow-500' },
          { icon: Brain, label: 'Peserta Stifin', value: '328', color: 'bg-purple-500' },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Aktivitas Terkini</h2>
        <div className="space-y-4">
          {[
            { title: 'Halaqah Mingguan', time: '2 jam yang lalu', desc: 'Pembahasan Tafsir Surat Al-Kahfi' },
            { title: 'Asesment Internal', time: '5 jam yang lalu', desc: '15 anggota baru telah menyelesaikan asesment' },
            { title: 'Laporan Guru', time: '1 hari yang lalu', desc: 'Evaluasi pembelajaran bulan Ramadhan' },
            { title: 'Mutabaah Update', time: '2 hari yang lalu', desc: 'Target hafalan tercapai 85%' },
          ].map((activity, index) => (
            <div key={index} className="flex items-start border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">{activity.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{activity.desc}</p>
                <span className="text-xs text-gray-500 mt-1">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;