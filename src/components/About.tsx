import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className = "flex flex-col lg:flex-row items-center gap-16">
                    <div className = "lg:w-1/2 relative">
                        <div className= "relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
                                alt= "About Hans' Recipe"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className = "absolute -bottom-8 -right-8 w-64 h-64 bg-sage/10 rounded-3xl -z-10 rotate-6"></div>
                    </div>

                    <div className = "lg:w-1/2">
                        <h2 className = "text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                            Kami Kembali,  <span className="italic text-sage">Kami Peduli</span>
                        </h2>
                        <div className = "space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Han's Recipe memulai perjalanan sebagai penyedia kue dan gorengan.
                                Namun, rasa ingin tahu kami akan kesehatan membawa kami ke dunia fermentasi—sebuah seni purba yang menyelaraskan rasa dengan kesejahteraan tubuh.
                            </p>
                            <p>
                                Kami percaya bahwa apa yang kita makan membentuk kehidupan kita.
                                Melalui proses fermentasi alami tanpa pengawet, kami mengubah bahan sederhana menjadi sumber probiotik yang kaya dan kompleks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;