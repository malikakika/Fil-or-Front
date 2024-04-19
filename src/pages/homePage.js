import React from "react";

import HeroSection from "../components/home/heroSection";

import CategoryPreviews from "../components/home/categoryPreviews";

function HomePage() {
  return (
    <div className="home">
    
      < HeroSection />
      < CategoryPreviews />
    </div>
  );
}

export default HomePage;
