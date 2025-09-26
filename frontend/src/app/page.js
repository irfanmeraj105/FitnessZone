import Blog from "./components/Blog";
import Faqs from "./components/Faqs";
import HeroSection from "./components/HeroSection";
import OurExperience from "./components/OurExperience";
import OurTrainers from "./components/OurTrainers";
import Testimonials from "./components/Testimonials";
import WeOffer from "./components/WeOffer";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <WeOffer />
      <OurTrainers />
      <Blog />
      <Faqs />
      <OurExperience />
      <Testimonials />
    </>
  );
}
