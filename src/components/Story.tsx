import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

const Story: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  // Animation variants for paragraphs
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-wedding-cream relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>

      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-wedding-red/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        {/* Title Section */}
        <motion.div
          style={{ opacity, y }}
          className="text-center mb-12 md:mb-14"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 mx-auto text-wedding-gold"
          >
            <Heart className="w-full h-full fill-current opacity-20" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-serif text-wedding-red ">
            Our Story
          </h2>
          <p className="font-script text-2xl md:text-4xl text-wedding-gold mt-6">
            "When Devi decides, distance disappears."
          </p>
          <div className="w-24 h-[1px] bg-wedding-red/30 mx-auto mt-8"></div>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-10 md:space-y-10 text-center md:text-lg leading-relaxed font-sans text-gray-700 relative ">
          {/* The Vertical Line "Thread" */}
          <div className="absolute top-10 bottom-10 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-wedding-gold/30 to-transparent -translate-x-1/2 hidden md:block"></div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-wedding-cream/80 backdrop-blur-sm p-4 inline-block shadow-sm rounded-lg border border-white/50 mt-6"
          >
            "For five long years,{" "}
            <span className="text-wedding-red font-semibold">Premraj</span>{" "}
            searched sincerely—meeting many, hoping for a connection, yet the
            right vibe always felt unreal. The perfect girl seemed imaginary,
            and emotional alignment felt like a myth."
          </motion.p>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-wedding-cream/80 backdrop-blur-sm p-4 inline-block shadow-sm rounded-lg border border-white/50 mt-6"
          >
            "Then one serene day in June 2025, inside the peaceful space of the
            ashram, destiny revealed its plan."
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="relative"
          >
            <p className=" mt-6">
              "His family arranged a simple video call.
              <br />
              But what appeared on the screen was anything but simple."
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="relative py-8"
          >
            <h3 className="text-5xl md:text-7xl font-script text-wedding-red drop-shadow-md ">
              Mehal.
            </h3>
            <p className="text-xl italic text-gray-600 mt-6">
              "Graceful. Grounded. Real.
              <br />A presence that felt divinely sent."
            </p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-wedding-cream/80 backdrop-blur-sm p-4 inline-block shadow-sm rounded-lg border border-white/50 mt-6"
          >
            "Everything he had prayed for—
            <span className="text-wedding-red font-serif mx-1">Devi</span>
            delivered in abundance."
          </motion.p>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-wedding-cream/80 backdrop-blur-sm p-4 inline-block shadow-sm rounded-lg border border-white/50 mt-6"
          >
            "It felt like a dream… until Mehal literally pinched him and turned
            that dream into reality."
          </motion.p>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-wedding-cream/80 backdrop-blur-sm p-4 inline-block shadow-sm rounded-lg border border-white/50 mt-6"
          >
            "Since then, conversations have flowed effortlessly, energies have
            aligned naturally, and two journeys have slowly woven into one."
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="pt-10"
          >
            <Sparkles className="w-8 h-8 text-wedding-gold mx-auto  animate-spin-slow" />
            <p className="font-serif text-xl md:text-2xl text-wedding-red mt-6">
              "Their story began on a screen,
              <br />
              but now it will be written in the sacred fire."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
