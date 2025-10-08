import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { MapPin, Search, ChevronRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      id: 1,
      name: 'Cabelo',
      icon: '✂️',
      services: 6,
      color: 'bg-gradient-to-br from-pink-400 to-pink-500'
    },
    {
      id: 2,
      name: 'Barbearia',
      icon: '💈',
      services: 5,
      color: 'bg-gradient-to-br from-blue-400 to-blue-500'
    },
    {
      id: 3,
      name: 'Maquiagem',
      icon: '💄',
      services: 4,
      color: 'bg-gradient-to-br from-purple-400 to-purple-500'
    },
    {
      id: 4,
      name: 'Sobrancelhas',
      icon: '👁️',
      services: 4,
      color: 'bg-gradient-to-br from-orange-400 to-orange-500'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Hero Section */}
      <div className="px-4 py-6 bg-white">
        {/* Location */}
        <div className="flex items-center justify-center mb-6 text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">São Paulo, SP</span>
        </div>

        {/* Greeting */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Olá! 👋
          </h1>
          <p className="text-gray-500 text-base">
            Que serviço você está procurando hoje?
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8 max-w-sm mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Cabelo, barba, manicure..."
            className="pl-12 h-14 text-base bg-gray-50 border-0 rounded-2xl text-center"
            onClick={() => navigate('/services')}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">2.500+</div>
            <div className="text-sm text-gray-500">Profissionais</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">4.8 ⭐</div>
            <div className="text-sm text-gray-500">Avaliação</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">15k+</div>
            <div className="text-sm text-gray-500">Agendamentos</div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-6 bg-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Categorias</h2>
          <Button variant="ghost" size="sm" className="text-pink-500 font-medium">
            Ver todas
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {/* Categories Grid - 2x2 igual ao preview */}
        <div className="grid grid-cols-2 gap-4">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate('/services')}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 active:scale-95 transition-all duration-150"
            >
              <div className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center mb-4 shadow-sm`}>
                <span className="text-xl text-white">{category.icon}</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">
                {category.services} serviços
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
