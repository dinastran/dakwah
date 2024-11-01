import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

interface FormData {
  nama: string;
  sektor: string;
  status: string;
  kehadiran: string;
  alasan: string;
  membawa_kontakan: string;
  nama_kontakan: string;
}

const AttendanceForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nama: '',
    sektor: '',
    status: '',
    kehadiran: '',
    alasan: '',
    membawa_kontakan: '',
    nama_kontakan: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzwcXvI2-tAlR9LqeN9rtcsL9r7_N_ntPwdd1DLVaUfazu0hCt8Lwydxf_h8evMqgPrUQ/exec', {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.result === 'success') {
        setShowSuccess(true);
        setTimeout(() => {
          // Prepare WhatsApp message
          let waMessage = `Assalamualaikum wr wb%0A`;
          waMessage += `Ust saya sudah isi Form kehadirannya, berikut datanya:%0A%0A`;
          waMessage += `Nama: ${formData.nama}%0A`;
          waMessage += `Sektor: ${formData.sektor}%0A`;
          waMessage += `Status: ${formData.status}%0A`;
          waMessage += `Kehadiran: ${formData.kehadiran}%0A`;
          if (formData.alasan) {
            waMessage += `Alasan Tidak Hadir: ${formData.alasan}%0A`;
          }
          waMessage += `Membawa Kontakan: ${formData.membawa_kontakan}%0A`;
          if (formData.nama_kontakan) {
            waMessage += `Nama Kontakan: ${formData.nama_kontakan}%0A`;
          }

          // Get WhatsApp number based on sector
          const waNumbers: { [key: string]: string } = {
            'Cangkuang': '6281214718545',
            'Banjaran': '6285724304558',
            'Pangalengan': '6285294130558'
          };

          const waNumber = waNumbers[formData.sektor];
          if (waNumber) {
            window.location.href = `https://api.whatsapp.com/send?phone=${waNumber}&text=${waMessage}`;
          }
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
          Nama
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          required
          value={formData.nama}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>

      <div>
        <label htmlFor="sektor" className="block text-sm font-medium text-gray-700">
          Sektor
        </label>
        <select
          id="sektor"
          name="sektor"
          required
          value={formData.sektor}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        >
          <option value="">Pilih Sektor</option>
          <option value="Banjaran">Banjaran</option>
          <option value="Cangkuang">Cangkuang</option>
          <option value="Pangalengan">Pangalengan</option>
        </select>
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          id="status"
          name="status"
          required
          value={formData.status}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        >
          <option value="">Pilih Status</option>
          <option value="Karyawan">Karyawan</option>
          <option value="Pelajar">Pelajar</option>
        </select>
      </div>

      <div>
        <label htmlFor="kehadiran" className="block text-sm font-medium text-gray-700">
          Kehadiran
        </label>
        <select
          id="kehadiran"
          name="kehadiran"
          required
          value={formData.kehadiran}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        >
          <option value="">Pilih Kehadiran</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
      </div>

      {formData.kehadiran === 'Tidak Hadir' && (
        <div>
          <label htmlFor="alasan" className="block text-sm font-medium text-gray-700">
            Alasan Tidak Hadir
          </label>
          <textarea
            id="alasan"
            name="alasan"
            rows={3}
            value={formData.alasan}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
      )}

      <div>
        <label htmlFor="membawa_kontakan" className="block text-sm font-medium text-gray-700">
          Membawa Kontakan
        </label>
        <select
          id="membawa_kontakan"
          name="membawa_kontakan"
          required
          value={formData.membawa_kontakan}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        >
          <option value="">Pilih Jawaban</option>
          <option value="Ya">Ya</option>
          <option value="Tidak">Tidak</option>
        </select>
      </div>

      {formData.membawa_kontakan === 'Ya' && (
        <div>
          <label htmlFor="nama_kontakan" className="block text-sm font-medium text-gray-700">
            Nama Kontakan
          </label>
          <input
            type="text"
            id="nama_kontakan"
            name="nama_kontakan"
            value={formData.nama_kontakan}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <AlertCircle className="mr-2 h-4 w-4 animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              <Check className="mr-2 h-4 w-4" />
              Kirim
            </>
          )}
        </button>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <Check className="h-12 w-12 text-green-500" />
            </div>
            <p className="text-center text-lg font-medium">
              Data Berhasil Disimpan & Akan dikirim ke WhatsApp
            </p>
          </div>
        </div>
      )}
    </form>
  );
};

export default AttendanceForm;