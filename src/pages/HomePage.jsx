import React from "react";
import ImageSlider from "../components/common/ImageSlider";
import AboutContent from "../components/about/AboutContent";
import Services from "../components/services/Services";
import WorkingHours from "../components/about/WorkingHours";
import Barbers from "../components/about/Barbers";
import Pricing from "../components/services/Pricing";
import FeaturedServices from "../components/services/FeaturedServices";
import Testimonial from "../components/common/Testimonial";
import Footer from "../layout/Footer";

export default function HomePage() {
  return (
    <div className="bg-slate-950">
      <ImageSlider />
      <AboutContent />
      <Services />
      <WorkingHours />
      <Barbers />
      <Pricing />
      <FeaturedServices />
      <Testimonial />
      <Footer />
    </div>
  );
}
