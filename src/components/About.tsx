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
                                Selama bertahun-tahun, Han's Recipe menemani momen manis Anda melalui Lumpia, Lapis Surabaya, dan aneka kue kering pilihan. Namun, rasa ingin tahu kami membawa kami lebih dalam ke dunia kuliner.
                            </p>
                            <p>
                                Kini, kami mendedikasikan dapur kami untuk seni fermentasi. Dengan tetap mempertahankan kualitas bahan terbaik, kami mengubah bahan pangan menjadi sumber nutrisi yang kaya akan probiotik, menciptakan harmoni antara kelezatan kuno dan gaya hidup modern.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;