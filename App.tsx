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
        <img
          src="/logo1.png"
          className="w-30 h-40 md:w-40 md:h-56 relative z-10"
        />
      </div>

      <Events />

      <TravelInfo />
      <Story />
      <Countdown />
      <RSVP />
      <Footer />
    </main>
  );
};

export default App;
