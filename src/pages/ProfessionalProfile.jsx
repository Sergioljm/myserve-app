import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Star, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { professionals } from '../data/mockData';

const ProfessionalProfile = () => {
  const { id } = useParams();
  const [professional, setProfessional] = useState(null);
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    const prof = professionals.find(p => p.id === parseInt(id));
    if (prof) {
      setProfessional(prof);
    }
  }, [id]);

  const handleBooking = () => {
    if (!selectedService || !selectedTime) {
      alert('Selecione um serviço e horário');
      return;
    }
    alert(`Agendamento confirmado! ${selectedService} às ${selectedTime}`);
  };

  if (!professional) {
    return <div className="p-4">Profissional não encontrado</div>;
  }

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Header */}
      <div className="bg-white p-4">
        <div className="flex items-start space-x-4">
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-pink-200 to-violet-200 flex items-center justify-center">
            <span className="font-bold text-lg">{professional.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
          
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900">{professional.name}</h1>
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">{professional.rating}</span>
              </div>
              <span className="text-sm text-gray-500">({professional.reviewCount})</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              {professional.location}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-600">{professional.bio}</p>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white mt-4 p-4">
        <h3 className="font-semibold mb-3">Serviços oferecidos</h3>
        <div className="space-y-2">
          {professional.services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(service)}
              className={`w-full text-left p-3 rounded-lg border transition-colors ${
                selectedService === service
                  ? 'border-pink-500 bg-pink-50 text-pink-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Schedule */}
      <div className="bg-white mt-4 p-4">
        <h3 className="font-semibold mb-3">Horários disponíveis</h3>
        <div className="grid grid-cols-2 gap-2">
          {professional.availability.map((time, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(time)}
              className={`p-2 text-sm rounded-lg border transition-colors ${
                selectedTime === time
                  ? 'border-pink-500 bg-pink-50 text-pink-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 space-y-3">
        <Button 
          onClick={handleBooking}
          className="w-full bg-gradient-to-r from-pink-500 to-violet-600 text-white h-12"
        >
          <Calendar className="h-4 w-4 mr-2" />
          Agendar agora
        </Button>
        
        <Button variant="outline" className="w-full h-12">
          <MessageSquare className="h-4 w-4 mr-2" />
          Enviar mensagem
        </Button>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
