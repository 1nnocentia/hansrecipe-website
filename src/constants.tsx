import {Product, Category} from './types';

export const PRODUCTS: Product[] = [
    {
        id: 'kimchi-sawi',
        name: 'Kimchi Sawi',
        category: Category.FOOD,
        description: 'Sawi putih fermentasi dengan bumbu autentik Korea. Pedas, asam, dan renyah sempurna.',
        price: 'Rp 50.000',
        image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop',
        benefits: ['Kaya Vitamin C', 'Probiotik aktif', 'Rendah kalori'],
        size: ['500g']
    },
    {
        id: 'kimchi-lobak',
        name: 'Kimchi Lobak',
        category: Category.FOOD,
        description: 'Lobak fermentasi dengan bumbu autentik Korea. Pedas, asam, dan renyah sempurna.',
        price: 'Rp 50.000',
        image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop',
        benefits: ['Kaya Vitamin C', 'Probiotik aktif', 'Rendah kalori'],
        size: ['500g']
    },
    {
        id: 'teratai-salju',
        name: 'Fermented Snow Lotus',
        category: Category.DRINK,
        description: 'Teratai Salju atau Snow Lotus merupakan minuman fermentasi .....',
        price: 'Rp 75.000',
        image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop',
        benefits: ['Kaya Vitamin C', 'Probiotik aktif', 'Rendah kalori'],
        size: ['750ml']
    },
]

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;