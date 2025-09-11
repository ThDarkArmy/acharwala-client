// components/LandingPage.jsx
import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import BestSellers from '../components/BestSellers';
import NewArrivals from '../components/NewArrivals';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Features from '../components/Features';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <NewArrivals />
      <Features />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default LandingPage;