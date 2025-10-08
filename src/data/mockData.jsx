export const serviceCategories = [
  {
    id: 1,
    name: 'Cabelo',
    icon: '✂️',
    services: ['Corte', 'Coloração', 'Escova', 'Penteados'],
    color: 'from-pink-400 to-rose-500'
  },
  {
    id: 2,
    name: 'Barbearia',
    icon: '💈',
    services: ['Corte Tradicional', 'Corte Moderno', 'Barba'],
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 3,
    name: 'Maquiagem',
    icon: '💄',
    services: ['Maquiagem Social', 'Festa/Eventos', 'Noiva'],
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 4,
    name: 'Sobrancelhas',
    icon: '👁️',
    services: ['Design', 'Micropigmentação', 'Henna'],
    color: 'from-amber-400 to-orange-500'
  },
  {
    id: 5,
    name: 'Estética Facial',
    icon: '🧴',
    services: ['Limpeza de Pele', 'Peeling', 'Cílios'],
    color: 'from-emerald-400 to-teal-500'
  },
  {
    id: 6,
    name: 'Unhas',
    icon: '💅',
    services: ['Manicure', 'Pedicure', 'Nail Art'],
    color: 'from-rose-400 to-pink-500'
  }
];

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
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&h=300&fit=crop'
    ],
    profilePhoto: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?w=150&h=150&fit=crop',
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
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=300&h=300&fit=crop'
    ],
    profilePhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    bio: 'Barbeiro tradicional e moderno. Especialista em degradê.',
    availability: ['08:00', '09:30', '11:00', '13:30'],
    isOnline: true
  }
];

export const mockUser = {
  id: 1,
  name: 'João Silva',
  email: 'joao@email.com',
  photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
};
