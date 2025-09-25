// components/LandingPage.jsx
import React from 'react';
import Hero from './Hero';
import FeaturedCategories from './FeaturedCategories';
import BestSellers from './BestSellers';
import NewArrivals from './NewArrivals';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import Features from './Features';

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