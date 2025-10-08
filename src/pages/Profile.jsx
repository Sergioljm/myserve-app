import React from 'react';
import { Button } from '../components/ui/button';
import { User, Settings, CreditCard, Bell, HelpCircle, ChevronRight } from 'lucide-react';
import { mockUser } from '../data/mockData';

const Profile = () => {
  const menuItems = [
    { icon: User, label: 'Editar Perfil' },
    { icon: CreditCard, label: 'Cartões e Pagamento' },
    { icon: Bell, label: 'Notificações' },
    { icon: HelpCircle, label: 'Ajuda e Suporte' },
    { icon: Settings, label: 'Configurações' }
  ];

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-pink-500 to-violet-600 px-4 pt-6 pb-8">
        <div className="flex items-center space-x-4">
          <div className="h-16 w-16 border-4 border-white/20 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-xl text-white font-bold">
              {mockUser.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-white">{mockUser.name}</h1>
            <p className="text-white/80">{mockUser.email}</p>
            <div className="bg-white/20 text-white border-white/20 mt-2 text-xs px-2 py-1 rounded">
              Cliente Premium
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 -mt-4 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="font-bold text-lg">12</div>
            <div className="text-xs text-gray-600">Agendamentos</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="font-bold text-lg">4.9</div>
            <div className="text-xs text-gray-600">Avaliação</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="font-bold text-lg">R$ 180</div>
            <div className="text-xs text-gray-600">Economia</div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 space-y-2">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm">
            <button className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <item.icon className="h-5 w-5 text-gray-600" />
                <span className="font-medium">{item.label}</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        ))}
      </div>

      {/* Professional Mode */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-pink-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-violet-600 rounded-xl flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Modo Profissional</h3>
              <p className="text-sm text-gray-600">Ofereça seus serviços no MyServe</p>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-pink-500 to-violet-600">
            Quero me cadastrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
