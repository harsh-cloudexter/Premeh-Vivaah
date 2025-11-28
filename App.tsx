import React from "react";
import Hero from "./src/components/Hero";
import Countdown from "./src/components/Countdown";
import Events from "./src/components/Events";
import Footer from "./src/components/Footer";
import Shlokas from "./src/components/Slokas";
import Story from "./src/components/Story";
import TravelInfo from "./src/components/TravelInfo";
import RSVP from "./src/components/RSVP";

const App: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <Shlokas />
      <div className="relative flex justify-center items-center ">
        {/* Background image with 5% opacity */}
        <div className="absolute inset-0 bg-[url('/black-scales.png')] bg-cover bg-center opacity-5"></div>

        {/* Content above */}
        <img src="/logo1.png" className=" h-80  md:h-105 relative z-10" />
      </div>

      <Events />

      <TravelInfo />
      <Story />
      <div className="relative flex flex-col justify-center items-center mb-4 ">
        {/* Background image with 5% opacity */}
        <div className="absolute inset-0 bg-[url('/black-scales.png')] bg-cover bg-center opacity-5"></div>
        <h2 className="text-3xl md:text-5xl font-script text-wedding-red mb-12 drop-shadow-md">
          With love from
        </h2>
        <img
          src="/afcare_logo.png"
          className=" h-20  md:h-40 relative z-10 "
        ></img>
      </div>
      <Countdown />
      <RSVP />
      <Footer />
    </main>
  );
};

export default App;
