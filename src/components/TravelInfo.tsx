import React from "react";
import { motion } from "framer-motion";
import { Train, Plane, Car, MapPin, Navigation } from "lucide-react";

const TravelInfo: React.FC = () => {
  const travelModes = [
    {
      id: "train",
      icon: Train,
      title: "By Train",
      label: "Nearest Railway Station",
      primary: "Samakhiyali (SIOB)",
      secondary: "Approx. 45 mins drive to venue",
    },
    {
      id: "air",
      icon: Plane,
      title: "By Air",
      label: "Nearest Airport",
      primary: "Kandla (IXY) / Gandhidham",
      secondary: "Connects via Mumbai/Ahmedabad",
    },
    {
      id: "road",
      icon: Car,
      title: "By Road",
      label: "Scenic Route",
      primary: "Mumbai → Ahmedabad → Gandhidham → Adhoi",
      secondary: "Excellent highway connectivity",
    },
  ];

  return (
    <section className="py-8 bg-wedding-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 bg-[url('./black-scales.png')]"></div>

      {/* Decorative Compass/Map elements */}
      <div className="absolute top-20 right-10 opacity-10">
        <Navigation className="w-64 h-64 text-wedding-gold rotate-45" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center p-3 bg-wedding-red/10 rounded-full mb-4">
            <MapPin className="w-8 h-8 text-wedding-red" />
          </div>
          <h2 className="text-4xl md:text-5xl font-script text-wedding-gold mb-3">
            Journey to the Celebration
          </h2>
          <p className="text-gray-600 font-serif max-w-2xl mx-auto text-lg">
            We are eagerly waiting to welcome you in our special celebration.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-8 md:left-1/2 top-10 bottom-10 w-[2px] border-l-2 border-dashed border-wedding-gold/30 -translate-x-1/2 hidden md:block"></div>

          {/* Vertical Connecting Line (Mobile) */}
          <div className="absolute left-8 top-10 bottom-10 w-[2px] border-l-2 border-dashed border-wedding-gold/30 -translate-x-1/2 md:hidden"></div>

          <div className="space-y-12">
            {travelModes.map((mode, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={mode.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon Marker */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-wedding-cream border-4 border-wedding-gold rounded-full flex items-center justify-center z-10 shadow-lg shrink-0">
                    <mode.icon className="w-7 h-7 text-wedding-red" />
                  </div>

                  {/* Spacer for desktop layout alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <div
                    className={`w-full md:w-1/2 pl-20 md:pl-0 ${
                      isEven
                        ? "md:pr-16 md:text-right"
                        : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div
                      className={`group bg-white p-6 rounded-xl shadow-lg border-t-4 border-wedding-red hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                    >
                      {/* Hover Gold Shine */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-wedding-gold via-yellow-300 to-wedding-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                      <h3 className="text-2xl font-serif text-wedding-red mb-1">
                        {mode.title}
                      </h3>
                      <p className="text-wedding-gold text-xs font-bold uppercase tracking-widest mb-4">
                        {mode.label}
                      </p>

                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 group-hover:border-wedding-gold/20 transition-colors">
                        <p className="text-gray-800 font-semibold text-lg leading-tight mb-1">
                          {mode.primary}
                        </p>
                        <p className="text-gray-500 text-sm italic">
                          {mode.secondary}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelInfo;
