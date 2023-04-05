import React, { lazy, Suspense } from "react";
import "./Home.css";
import AmaizingServices from "../../Components/Home/AmaizingServices/AmaizingServices";
import LearnHow from "../../Components/Home/LearnHow/LearnHow";
// import Testimonials from "../../Components/Testimonials/Testimonialss";

const Navbar = lazy(() => import("../../Components/Navbar/Navbar"));
const HeroSection = lazy(() =>
  import("../../Components/Home/HeroSection/HeroSection")
);
const GetQouteForm = lazy(() =>
  import("../../Components/GetQouteForm/GetQouteForm")
);
const WhyUs = lazy(() => import("../../Components/Home/whyChooseUs/WhyUs"));
const Testimonials = lazy(() =>
  import("../../Components/Testimonials/Testimonialss.jsx")
);
const Destinations = lazy(() =>
  import("../../Components/destinations/Destinations.jsx")
);

const Home = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Navbar />
      <HeroSection />
      <GetQouteForm />
      <WhyUs />
      <AmaizingServices/>
      <Destinations />
      <LearnHow/>
      <Testimonials />
    </Suspense>
  );
};

export default Home;
