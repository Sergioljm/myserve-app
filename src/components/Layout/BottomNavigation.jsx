import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Calendar, Heart, User } from 'lucide-react';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Início', path: '/' },
    { icon: Search, label: 'Buscar', path: '/services' },
    { icon: Calendar, label: 'Agendamentos', path: '/bookings' },
    { icon: Heart, label: 'Favoritos', path: '/favorites' },
    { icon: User, label: 'Perfil', path: '/profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-2 px-3 min-w-0 flex-1 ${
                isActive ? 'text-pink-600' : 'text-gray-500'
              }`}
            >
              <Icon className={`h-5 w-5 mb-1 ${isActive ? 'text-pink-600' : 'text-gray-500'}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-pink-600' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
