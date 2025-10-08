import React from 'react';
import { Heart, Search } from 'lucide-react';
import { Button } from '../components/ui/button';

const Favorites = () => {
  return (
    <div className="bg-gray-50 min-h-full">
      <div className="bg-white px-4 py-4 border-b">
        <h1 className="text-xl font-bold mb-2">Meus Favoritos</h1>
        <p className="text-gray-600 text-sm">0 profissionais salvos</p>
      </div>

      <div className="px-4 py-4">
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Nenhum favorito ainda</h3>
          <p className="text-gray-600 mb-6">
            Salve os profissionais que você mais gosta para encontrá-los facilmente.
          </p>
          <Button className="bg-gradient-to-r from-pink-500 to-violet-600">
            <Search className="h-4 w-4 mr-2" />
            Descobrir profissionais
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
