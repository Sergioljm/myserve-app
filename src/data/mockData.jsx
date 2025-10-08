export const serviceCategories = [
  {
    id: 1,
    name: 'Cabelo',
    icon: '💇‍♀️',
    services: ['Corte', 'Coloração', 'Escova', 'Penteados'],
    color: 'bg-gradient-to-r from-pink-400 to-rose-500'
  },
  {
    id: 2,
    name: 'Barbearia', 
    icon: '✂️',
    services: ['Corte Tradicional', 'Corte Moderno', 'Barba'],
    color: 'bg-gradient-to-r from-blue-400 to-indigo-500'
  },
  {
    id: 3,
    name: 'Maquiagem',
    icon: '💄',
    services: ['Maquiagem Social', 'Festa/Eventos', 'Noiva'],
    color: 'bg-gradient-to-r from-purple-400 to-pink-500'
  },
  {
    id: 4,
    name: 'Sobrancelhas',
    icon: '🤩',
    services: ['Design', 'Micropigmentação', 'Henna'],
    color: 'bg-gradient-to-r from-amber-400 to-orange-500'
  },
  {
    id: 5,
    name: 'Estética Facial',
    icon: '✨',
    services: ['Limpeza de Pele', 'Peeling', 'Cílios'],
    color: 'bg-gradient-to-r from-emerald-400 to-teal-500'
  },
  {
    id: 6,
    name: 'Unhas',
    icon: '💅',
    services: ['Manicure', 'Pedicure', 'Nail Art'],
    color: 'bg-gradient-to-r from-rose-400 to-pink-500'
  }
];

// Resto do arquivo continua igual...
export const professionals = [
  {
    id: 1,
    name: 'Ana Silva',
    category: 'Cabelo',
    rating: 4.9,
    reviewCount: 127,
    price: 'A partir de R$ 35',
    location: 'Centro - 1.2km',
    services: ['Corte Feminino', 'Escova', 'Coloração'],
    workPhotos: [
      'https://via.placeholder.com/300x300/f472b6/ffffff?text=Cabelo+1',
      'https://via.placeholder.com/300x300/ec4899/ffffff?text=Cabelo+2',
      'https://via.placeholder.com/300x300/db2777/ffffff?text=Cabelo+3'
    ],
    profilePhoto: 'https://via.placeholder.com/150x150/f472b6/ffffff?text=Ana',
    bio: 'Especialista em coloração e cortes modernos. 8 anos de experiência.',
    availability: ['09:00', '10:30', '14:00', '15:30'],
    isOnline: true
  },
  {
    id: 2,
    name: 'Carlos Santos',
    category: 'Barbearia',
    rating: 4.8,
    reviewCount: 89,
    price: 'A partir de R$ 25',
    location: 'Vila Nova - 0.8km',
    services: ['Corte Masculino', 'Barba', 'Bigode'],
    workPhotos: [
      'https://via.placeholder.com/300x300/3b82f6/ffffff?text=Barba+1',
      'https://via.placeholder.com/300x300/2563eb/ffffff?text=Barba+2'
    ],
    profilePhoto: 'https://via.placeholder.com/150x150/3b82f6/ffffff?text=Carlos',
    bio: 'Barbeiro tradicional e moderno. Especialista em degradê.',
    availability: ['08:00', '09:30', '11:00', '13:30'],
    isOnline: true
  }
];

export const mockUser = {
  id: 1,
  name: 'João Silva',
  email: 'joao@email.com',
  photo: 'https://via.placeholder.com/150x150/8b5cf6/ffffff?text=JS'
};
