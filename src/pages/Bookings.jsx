import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const Bookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const mockBookings = [
    {
      id: 1,
      professionalName: 'Ana Silva',
      service: 'Corte + Escova',
      date: '2024-01-20',
      time: '10:00',
      status: 'confirmed',
      price: 'R$ 65'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b">
        <h1 className="text-xl font-bold mb-4">Meus Agendamentos</h1>
        
        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-2 text-sm font-medium rounded-md ${
              activeTab === 'upcoming'
                ? 'bg-white text-pink-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Próximos
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-2 text-sm font-medium rounded-md ${
              activeTab === 'past'
                ? 'bg-white text-pink-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Histórico
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'upcoming' && (
          <div className="space-y-4">
            {mockBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                    Confirmado
                  </div>
                  <span className="text-sm text-gray-500">#{booking.id.toString().padStart(4, '0')}</span>
                </div>

                <h3 className="font-semibold text-base mb-1">{booking.professionalName}</h3>
                <p className="text-sm text-gray-600 mb-3">{booking.service}</p>

                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(booking.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {booking.time}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="font-semibold text-pink-600">{booking.price}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'past' && (
          <div className="text-center py-12">
            <Clock className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhum histórico ainda</h3>
            <p className="text-gray-600">Seus agendamentos anteriores aparecerão aqui.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
