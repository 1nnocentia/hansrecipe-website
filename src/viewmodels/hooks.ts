import { useState } from 'react';
import { ChatMessage, Product } from '../types';
import { getFermentationAdvice } from '../services/gemini';
import { WHATSAPP_NUMBER } from '../constants';

export const useAIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Halo! Saya asisten Han. Ada yang ingin kamu tanyakan tentang manfaat makanan fermentasi kami?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await getFermentationAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response || 'Maaf, terjadi kesalahan.' }]);
    setIsTyping(false);
  };

  return { isOpen, toggle, messages, input, setInput, sendMessage, isTyping };
};

export const useProductActions = () => {
  const orderProduct = (product: Product) => {
    const message = `Halo Han's Recipe! Saya tertarik untuk memesan ${product.name}. Bisa berikan info lebih lanjut?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const generalInquiry = () => {
    const message = "Halo Han's Recipe, saya ingin bertanya tentang produk fermentasi.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return { orderProduct, generalInquiry };
};
