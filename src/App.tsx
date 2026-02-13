import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import About from './components/About';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { Section, Heading, Button } from './components/shared/UI';
import { PRODUCTS } from './constants';
import { useProductActions } from './viewmodels/hooks';
import { THEME } from './config/theme';

const App: React.FC = () => {
  const { generalInquiry } = useProductActions();

  return (
    <div className="min-h-screen bg-earth">
      <Navbar />
      
      <main>
        <Hero />
        
        <Section bg="bg-sage text-white" className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div><div className="text-4xl font-serif font-bold mb-2">100%</div><p className="text-white/70">Alami Tanpa Pengawet</p></div>
            <div><div className="text-4xl font-serif font-bold mb-2">Raw & Living</div><p className="text-white/70">Kaya Enzim & Probiotik</p></div>
            <div><div className="text-4xl font-serif font-bold mb-2">Local Sourced</div><p className="text-white/70">Mendukung Petani Lokal</p></div>
          </div>
        </Section>

        <Section id="products">
          <div className="text-center mb-16">
            <Heading className="mb-4">Koleksi Fermentasi Kami</Heading>
            <p className="text-gray-600 max-w-2xl mx-auto">Pilih dari beragam produk fermentasi kami yang dirancang untuk mendukung kesehatan usus dan memberikan cita rasa unik.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </Section>

        <About />

        <Section bg="bg-earth/50">
          <div className="max-w-4xl mx-auto text-center">
            <Heading className="mb-8">Siap Memulai Perjalanan Hidup Sehatmu?</Heading>
            <p className="text-lg text-gray-600 mb-10">Konsultasikan kebutuhan probiotikmu atau langsung pesan menu favoritmu melalui WhatsApp kami.</p>
            <Button onClick={generalInquiry} className="px-12 py-5 text-xl shadow-xl mx-auto">Hubungi Kami Sekarang</Button>
          </div>
        </Section>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
