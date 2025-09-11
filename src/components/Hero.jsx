// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section relative h-screen flex items-center justify-center">
      <div 
        className="hero-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1602524818609-2d5b2c42f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="hero-content relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Experience the Finest Pickles
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Handcrafted with traditional recipes and the finest ingredients
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Shop Now
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
            Explore Recipes
          </button>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
        }
        .animate-fade-in {
          animation: fadeInUp 1s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;