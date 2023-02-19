import React from "react";
import DigikalaCategoriesSection from "../Components/MainPageComponents/DigikalaCategoriesSection/DigikalaCategoriesSection";
import DiscountImageSection from "../Components/MainPageComponents/DiscountImagesSection/DiscountImageSection";
import ImageSliderSection from "../Components/MainPageComponents/ImageSliderSection/ImageSliderSection";
import MarketSuggestions from "../Components/MainPageComponents/MarketSuggestions/MarketSuggestions";
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
      <MarketSuggestions />
      <DiscountImageSection />
      <DigikalaCategoriesSection />
    </div>
  );
}
