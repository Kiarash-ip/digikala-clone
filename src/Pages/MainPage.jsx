import React, { useEffect } from "react";
import DigikalaCategoriesSection from "../Components/MainPageComponents/DigikalaCategoriesSection/DigikalaCategoriesSection";
import DiscountImageSection_2 from "../Components/MainPageComponents/DiscountImageSection-2/DiscountImageSection_2";
import DiscountImageSection from "../Components/MainPageComponents/DiscountImagesSection/DiscountImageSection";
import ImageSliderSection from "../Components/MainPageComponents/ImageSliderSection/ImageSliderSection";
import MarketSuggestions from "../Components/MainPageComponents/MarketSuggestions/MarketSuggestions";
import Navbar from "../Components/MainPageComponents/Navigation/Navbar";
import ServicesSection from "../Components/MainPageComponents/ServicesSection/ServicesSection";
import SuggestionSection from "../Components/MainPageComponents/SuggestionsSection/SuggestionSection";
import DigikalaSuggestionsSection from "../Components/MainPageComponents/DigikalaSuggestionsSection/DigikalaSuggestionsSection";
import PopularBrandSection from "../Components/MainPageComponents/PopularBrandsSection/PopularBrandSection";
import FooterSection from "../Components/MainPageComponents/FooterSection/FooterSection";
import useResize from "../customHooks/useResize";
import NavbarMobile from "../Components/MainPageComponents/Navigation/NavbarMobile";

export default function MainPage() {
  const { width } = useResize();

  return (
    <div>
      {/* {width < 1024 ? <NavbarMobile /> : } */}
      <Navbar />
      <ImageSliderSection />
      <ServicesSection />
      <SuggestionSection />
      <MarketSuggestions />
      <DiscountImageSection />
      <DigikalaCategoriesSection />
      <DiscountImageSection_2 />
      <DigikalaSuggestionsSection />
      <PopularBrandSection />
      <FooterSection />
    </div>
  );
}
