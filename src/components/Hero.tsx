import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { COUPLE } from "../../constants";

// Helper component for elegant character-by-character animation
const AnimatedText = ({ text, delay }: { text: string; delay: number }) => {
  return (
    <motion.div
      className="font-script text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-2xl leading-tight justify-center gap-x-[0.25em] z-10"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                  filter: "blur(10px)",
                  rotateX: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  rotateX: 0,
                  transition: { type: "spring", damping: 15, stiffness: 60 },
                },
              }}
              className="inline-block origin-bottom"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  // Background moves slower than scroll (0% -> 50%)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Background zooms in slightly as we scroll (1.1 -> 1.25)
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  // Text moves faster than scroll (0% -> 100%)
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Fade out content as we scroll
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center"
    >
      {/* Parallax Background */}
      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale, // Dynamic scale for zoom effect
          // Authentic Indian Hindu Wedding Couple in Traditional Red/Gold Attire
          backgroundImage: " url('./hero-bg.jpg')",
          // backgroundcolor: "linear-gradient(rgba(250, 245, 235, 0.5), rgba(250, 245, 235, 0.85)),",
          filter: " contrast(1.1) saturate(0.9)",
        }}
        // brightness(0.70) sepia(0.3)
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
      />
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-0 pointer-events-none" />

      {/* Main Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="z-10 text-white px-4 space-y-8 relative max-w-7xl mx-auto w-full flex flex-col items-center"
      >
        {/* Animated Ganesha */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <motion.img
            // animate={{
            //   y: [0, -5, 0],
            //   rotate: [0, 2, 0, -2, 0],
            // }}
            // transition={{
            //   duration: 6,
            //   repeat: Infinity,
            //   ease: "easeInOut",
            // }}
            src="./ganesh.png"
            alt="Ganesha"
            className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-2 drop-shadow-[0_0_25px_rgba(212,175,55,0.6)] bg-transparent"
          />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <p className="font-serif uppercase text-xs md:text-lg text-wedding-gold/90 mb-2 drop-shadow-md">
            The Royal Union Of
          </p>
        </motion.div>

        {/* Names Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6 z-20 w-full px-4">
          {/* Groom Name */}
          <AnimatedText text={COUPLE.groom} delay={0.8} />

          {/* Ampersand */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5, filter: "blur(5px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 2.0, duration: 0.8, type: "spring" }}
            className="text-wedding-gold font-serif text-3xl md:text-5xl mx-2"
          >
            &
          </motion.span>

          {/* Bride Name */}
          <AnimatedText text={COUPLE.bride} delay={1.2} />
        </div>

        {/* Date & Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col items-center gap-4 font-serif text-lg md:text-2xl tracking-wide text-gray-100"
        >
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-8 md:w-16 bg-wedding-gold block"></span>
            <p className="drop-shadow-lg">February 8, 2025</p>
            <span className="h-[1px] w-8 md:w-16 bg-wedding-gold block"></span>
          </div>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-wedding-gold drop-shadow-md">
            Aadhoi Datak • Gujarat
          </p>
        </motion.div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.0, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-white/70 text-[10px] uppercase tracking-[0.3em]">
          Scroll to Celebrate
        </span>
        <motion.div
          animate={{ height: [0, 40, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-wedding-gold"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
