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
          <div className="bg-white/70 backdrop-blur rounded-xl p-4 text-center shadow-sm">
            <div className="text-xl font-bold text-gray-900">2.500+</div>
            <div className="text-xs text-gray-600">Profissionais</div>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-xl p-4 text-center shadow-sm">
            <div className="text-xl font-bold text-gray-900">4.8⭐</div>
            <div className="text-xs text-gray-600">Avaliação</div>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-xl p-4 text-center shadow-sm">
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

        {/* Categories Grid - IGUAL AO PREVIEW */}
        <div className="grid grid-cols-2 gap-4">
          {serviceCategories.slice(0, 6).map((category) => (
            <div
              key={category.id}
              onClick={() => navigate('/services')}
              className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 active:scale-95 transition-all duration-150 hover:shadow-xl"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-3 shadow-md`}>
                <span className="text-xl text-white">{category.icon}</span>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">
                {category.services.length} serviços
              </p>
              <div className="mt-2 flex items-center text-xs text-pink-600 font-medium">
                Ver profissionais
                <ChevronRight className="h-3 w-3 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Popular Services */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Mais procurados</h3>
          <div className="space-y-3">
            {[
              { name: 'Corte Feminino', price: 'A partir de R$ 35', category: '💇‍♀️' },
              { name: 'Barba & Bigode', price: 'A partir de R$ 25', category: '✂️' },
              { name: 'Manicure', price: 'A partir de R$ 30', category: '💅' },
              { name: 'Design de Sobrancelhas', price: 'A partir de R$ 40', category: '🤩' }
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 active:bg-gray-50 transition-colors"
                onClick={() => navigate('/services', { state: { searchTerm: service.name } })}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-lg">{service.category}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{service.name}</div>
                    <div className="text-sm text-gray-500">{service.price}</div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
