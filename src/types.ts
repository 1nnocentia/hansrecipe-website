export enum Category {
  DRINK = 'Minuman',
  FOOD = 'Makanan',
  CONDIMENT = 'Bumbu & Pelengkap',
  DESSERT = 'Camilan & Dessert',
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: string;
  image: string;
  size: string[];
  benefits: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
