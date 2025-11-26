import React from "react";
import Hero from "./src/components/Hero";
import Countdown from "./src/components/Countdown";
import Events from "./src/components/Events";
import Footer from "./src/components/Footer";
import Shlokas from "./src/components/Slokas";
import Story from "./src/components/Story";

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <Shlokas />
      <Events />
      <Story />
      <Countdown />
      {/* <RSVP /> */}
      <Footer />
    </main>
  );
};

export default App;
