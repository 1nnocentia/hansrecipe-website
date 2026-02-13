import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sage text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-6">Han's Recipe</h3>
            <p className="text-white/70 max-w-sm mb-8 leading-relaxed">
              Kami adalah rumah bagi makanan dan minuman fermentasi berkualitas. 
              Membawa tradisi sehat ke meja makan modern Anda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/50 transition-colors">Instagram</a>
              <a href="#" className="hover:text-white/50 transition-colors">TikTok</a>
              <a href="#" className="hover:text-white/50 transition-colors">Facebook</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Navigasi</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#products" className="hover:text-white">Koleksi</a></li>
              <li><a href="#about" className="hover:text-white">Tentang Kami</a></li>
              <li><a href="#benefits" className="hover:text-white">Manfaat</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Kontak</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +{WHATSAPP_NUMBER}
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Makassar, Indonesia
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Han's Recipe. Crafted for Your Well-being.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
