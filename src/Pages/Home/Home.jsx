import React, { lazy, Suspense } from "react";
import "./Home.css";

const Navbar = lazy(() => import("../../Components/Navbar/Navbar"));
const HeroSection = lazy(() =>
  import("../../Components/Home/HeroSection/HeroSection")
);
const GetQouteForm = lazy(() =>
  import("../../Components/GetQouteForm/GetQouteForm")
);
const WhyUs = lazy(() => import("../../Components/Home/whyChooseUs/WhyUs"));
const Home = () => {
  return (
    <Suspense fallback={<div></div>}>
        <Navbar />
        <HeroSection />
        <GetQouteForm />
        <WhyUs />
    </Suspense>
  );
};

export default Home;
