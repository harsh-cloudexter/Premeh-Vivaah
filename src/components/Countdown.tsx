import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { COUPLE } from "../../constants";

const Confetti: React.FC = () => {
  const colors = ["#C41E3A", "#D4AF37", "#FFFDD0", "#FF8C00"];
  const particleCount = 50;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 md:w-3 md:h-3 rounded-sm opacity-80"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            left: `${Math.random() * 100}%`,
            top: -20,
          }}
          animate={{
            y: ["0vh", "60vh"], // Fall distance
            rotate: [0, 360],
            x: [0, (Math.random() - 0.5) * 100], // Horizontal drift
          }}
          transition={{
            duration: Math.random() * 2 + 3, // Random speed between 3-5s
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5, // Random start delay
          }}
        />
      ))}
    </div>
  );
};

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [isWeddingStarted, setIsWeddingStarted] = useState(false);

  function getTimeRemaining() {
    const total =
      Date.parse(COUPLE.weddingDate) - Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    // Check immediately
    if (getTimeRemaining().total <= 0) {
      setIsWeddingStarted(true);
    }

    const timer = setInterval(() => {
      const remaining = getTimeRemaining();
      setTimeLeft(remaining);
      if (remaining.total <= 0) {
        setIsWeddingStarted(true);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-wedding-red py-16 md:py-24 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

      {isWeddingStarted && <Confetti />}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {!isWeddingStarted ? (
            <>
              <h2 className="text-3xl md:text-5xl font-script text-wedding-gold mb-12 drop-shadow-md">
                Counting Down to Forever
              </h2>

              <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
                {Object.entries(timeLeft).map(([unit, value]) => {
                  if (unit === "total") return null;
                  return (
                    <motion.div
                      key={unit}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 w-24 md:w-40 border border-wedding-gold/30 shadow-lg"
                    >
                      <div className="text-3xl md:text-6xl font-serif font-bold text-white mb-2">
                        {/* Ensure always 2 digits */}
                        {String(value).padStart(2, "0")}
                      </div>
                      <div className="text-[10px] md:text-sm uppercase tracking-widest text-wedding-gold">
                        {unit}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="py-10">
              <motion.h2
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="text-5xl md:text-7xl font-script text-wedding-gold mb-6 drop-shadow-lg"
              >
                The Celebration Has Begun!
              </motion.h2>
              <p className="text-xl md:text-2xl font-serif text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join us as we celebrate the union of {COUPLE.groom} &{" "}
                {COUPLE.bride}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Countdown;
