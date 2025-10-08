import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { MapPin, Search, ChevronRight } from 'lucide-react';
import { serviceCategories } from '../data/mockData';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-full">
      {/* Hero Section */}
      <div className="px-4 py-6 bg-gradient-to-br from-pink-50 to-violet-50">
        {/* Location */}
        <div className="flex items-center mb-4 text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">São Paulo, SP</span>
        </div>

        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Olá! 👋
          </h1>
          <p className="text-gray-600 text-base">
            Que serviço você está procurando hoje?
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Cabelo, barba, manicure..."
            className="pl-12 h-12 text-base bg-white border-0 shadow-sm rounded-xl"
            onClick={() => navigate('/services')}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/70 backdrop-blur rounded-xl p-4 text-center">
            <div className="text-xl font-bold text-gray-900">2.500+</div>
            <div className="text-xs text-gray-600">Profissionais</div>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-xl p-4 text-center">
            <div className="text-xl font-bold text-gray-900">4.8⭐</div>
            <div className="text-xs text-gray-600">Avaliação</div>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-xl p-4 text-center">
            <div className="text-xl font-bold text-gray-900">15k+</div>
            <div className="text-xs text-gray-600">Agendamentos</div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-6 bg-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Categorias</h2>
          <Button variant="ghost" size="sm" className="text-pink-600 -mr-2">
            Ver todas
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4">
          {serviceCategories.slice(0, 6).map((category) => (
            <div
              key={category.id}
              onClick={() => navigate('/services')}
              className="bg-gray-50 rounded-2xl p-4 active:scale-95 transition-all duration-150"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-3`}>
                <span className="text-xl">{category.icon}</span>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">
                {category.services.length} serviços
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
