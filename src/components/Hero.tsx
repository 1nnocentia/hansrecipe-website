import React from 'react';
import { THEME } from '../config/theme';
import { Button, Heading } from './shared/UI';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-sage uppercase bg-sage/10 rounded-full">
            Evolusi Han's Recipe
          </span>
          <Heading level={1} className="mb-8 leading-tight">
            Dari Oven ke <span className="italic text-sage">Botol Fermentasi</span>
          </Heading>
          <p className="font-sans text-gray-600 leading-relaxed text-lg md:text-xl mb-10">
            Berawal dari kehangatan kue rumahan, kini Han's Recipe hadir dengan koleksi makanan dan minuman fermentasi yang mengutamakan keseimbangan rasa dan kesehatan tubuh kamu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => window.location.href = '#products'} className="px-10 py-4 shadow-lg hover:-translate-y-1">
              Jelajahi Menu Fermentasi
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '#about'} className="px-10 py-4">
              Cerita Kami
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 -left-20 w-64 h-64 bg-sage/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sage/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
