import React from "react";
import ImageSliderSection from "../Components/MainPageComponents/ImageSliderSection/ImageSliderSection";
import Navbar from "../Components/MainPageComponents/Navigation/Navbar";
import ServicesSection from "../Components/MainPageComponents/ServicesSection/ServicesSection";
import SuggestionSection from "../Components/MainPageComponents/SuggestionsSection/SuggestionSection";

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <ImageSliderSection />
      <ServicesSection />
      <SuggestionSection />
    </div>
  );
}
