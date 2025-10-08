import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Star, MapPin, Search, Heart } from 'lucide-react';
import { professionals } from '../data/mockData';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfessionals = professionals.filter(prof => 
    prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prof.services.some(service => 
      service.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Search Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Buscar profissional ou serviço..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-11 bg-gray-50 border-0 rounded-xl"
          />
        </div>
      </div>

      {/* Results */}
      <div className="px-4 py-4">
        <div className="mb-4">
          <p className="text-gray-600 text-sm">
            {filteredProfessionals.length} profissionais encontrados
          </p>
        </div>

        <div className="space-y-4">
          {filteredProfessionals.map((professional) => (
            <Link key={professional.id} to={`/professional/${professional.id}`}>
              <div className="bg-white rounded-2xl p-4 shadow-sm active:scale-98 transition-all">
                {/* Header */}
                <div className="flex items-start space-x-3 mb-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-200 to-violet-200 flex items-center justify-center">
                    <span className="font-semibold text-sm">{professional.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-base text-gray-900">{professional.name}</h3>
                      <Button variant="ghost" size="sm" className="p-2 -mr-2">
                        <Heart className="h-4 w-4 text-gray-400" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">{professional.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({professional.reviewCount})</span>
                      {professional.isOnline && (
                        <div className="bg-green-100 text-green-700 text-xs px-2 py-0 rounded-full">Online</div>
                      )}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      {professional.location}
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {professional.services.slice(0, 3).map((service, index) => (
                    <div key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {service}
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-pink-600">
                    {professional.price}
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-6"
                  >
                    Agendar
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
