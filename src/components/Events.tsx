import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { WEDDING_EVENTS } from "../../constants";
import { MapPin, Clock, Calendar, Flower } from "lucide-react";
import { EventDetails } from "../../types";

const Events: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Parallax transforms for background elements
  const yMoveUp = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const yMoveDown = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const yMoveFast = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateReverse = useTransform(scrollYProgress, [0, 1], [360, 0]);

  // Petal Parallax Layers
  const petalY1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const petalY2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const petalY3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-wedding-cream relative overflow-hidden"
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

      {/* --- Parallax Background Elements --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Rotating Mandalas - Top Left */}
        <motion.div
          style={{ y: yMoveUp, rotate }}
          className="absolute -top-32 -left-32 opacity-[0.06] z-0"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Mandala_6.svg"
            className="w-[35rem] h-[35rem]"
            alt="Mandala Decoration"
          />
        </motion.div>

        {/* Large Rotating Mandalas - Center Right */}
        <motion.div
          style={{ y: yMoveDown, rotate: rotateReverse }}
          className="absolute top-1/4 -right-40 opacity-[0.06] z-0"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Mandala_6.svg"
            className="w-[45rem] h-[45rem]"
            alt="Mandala Decoration"
          />
        </motion.div>

        {/* Extra Mandala - Middle Left */}
        <motion.div
          style={{ y: yMoveFast, rotate: rotate }}
          className="absolute top-1/2 -left-20 opacity-[0.04] z-0"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Mandala_6.svg"
            className="w-[30rem] h-[30rem]"
            alt="Mandala Decoration"
          />
        </motion.div>

        {/* Extra Mandala - Bottom Right */}
        <motion.div
          style={{ y: yMoveUp, rotate: rotateReverse }}
          className="absolute bottom-10 -right-20 opacity-[0.05] z-0"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Mandala_6.svg"
            className="w-[40rem] h-[40rem]"
            alt="Mandala Decoration"
          />
        </motion.div>

        {/* Medium Rotating Mandala - Bottom Left */}
        <motion.div
          style={{ y: yMoveFast, rotate: rotate }}
          className="absolute bottom-0 -left-10 opacity-[0.05] z-0"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Mandala_6.svg"
            className="w-80 h-80"
            alt="Mandala Decoration"
          />
        </motion.div>

        {/* Floating Flowers */}
        <motion.div
          style={{ y: yMoveFast, x: -50 }}
          className="absolute top-3/4 left-[10%] opacity-10 text-wedding-red"
        >
          <Flower className="w-16 h-16" />
        </motion.div>

        <motion.div
          style={{ y: yMoveUp, x: 50 }}
          className="absolute top-1/4 right-[15%] opacity-10 text-wedding-orange"
        >
          <Flower className="w-12 h-12" />
        </motion.div>

        <motion.div
          style={{ y: yMoveDown }}
          className="absolute bottom-20 left-[20%] opacity-5 text-wedding-gold"
        >
          <Flower className="w-24 h-24" />
        </motion.div>

        {/* Floating Diyas (Oil Lamps) */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`diya-${i}`}
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -60 * (i + 1)]),
            }} // Varying parallax speed
            className="absolute z-0"
            initial={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
            }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0], // Gentle bobbing
                filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"], // Candle flicker effect
              }}
              transition={{
                y: {
                  duration: 3 + Math.random(),
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                filter: {
                  duration: 0.5 + Math.random(),
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="opacity-70 drop-shadow-lg"
            >
              <svg width="40" height="40" viewBox="0 0 50 40" fill="none">
                {/* Flame */}
                <path
                  d="M25 0C25 0 20 10 20 15C20 18 22 20 25 20C28 20 30 18 30 15C30 10 25 0 25 0Z"
                  fill="#FFD700"
                  className="animate-pulse origin-bottom"
                />
                <path
                  d="M25 5C25 5 23 10 23 13C23 14 24 15 25 15C26 15 27 14 27 13C27 10 25 5 25 5Z"
                  fill="#FFA500"
                />
                {/* Clay Lamp Body */}
                <path d="M5 20Q25 45 45 20H5Z" fill="#8B4513" />
                <path
                  d="M5 20Q25 45 45 20"
                  stroke="#D2691E"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M8 22Q25 40 42 22"
                  stroke="#5C3317"
                  strokeWidth="1"
                  opacity="0.5"
                  fill="none"
                />
              </svg>
            </motion.div>
          </motion.div>
        ))}

        {/* Floating Marigolds */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`marigold-${i}`}
            style={{
              y: useTransform(
                scrollYProgress,
                [0, 1],
                [0, -150 * ((i % 3) + 1)]
              ),
            }}
            className="absolute z-0"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                x: [0, 20, 0],
              }}
              transition={{
                rotate: {
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                },
                x: {
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="opacity-80 drop-shadow-md"
            >
              <svg width="32" height="32" viewBox="0 0 40 40">
                {/* Outer ruffled circle */}
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill={i % 2 === 0 ? "#FFA500" : "#FFD700"}
                  stroke={i % 2 === 0 ? "#FF8C00" : "#E6C200"}
                  strokeWidth="2"
                  strokeDasharray="5 3"
                />
                {/* Inner ruffled circle */}
                <circle
                  cx="20"
                  cy="20"
                  r="12"
                  fill={i % 2 === 0 ? "#FFD700" : "#FFA500"}
                  stroke={i % 2 === 0 ? "#E6C200" : "#FF8C00"}
                  strokeWidth="1"
                  strokeDasharray="3 2"
                />
                {/* Center */}
                <circle cx="20" cy="20" r="4" fill="#D2691E" />
              </svg>
            </motion.div>
          </motion.div>
        ))}

        {/* Drifting Petals (Rose & Jasmine) */}
        {[...Array(20)].map((_, i) => {
          const isRose = i % 3 !== 0; // Mix of Rose and Jasmine
          const layer = i % 3;
          const yMotion =
            layer === 0 ? petalY1 : layer === 1 ? petalY2 : petalY3;
          const size = Math.random() * 10 + 10; // 10px to 20px

          return (
            <motion.div
              key={`petal-${i}`}
              style={{ y: yMotion, width: size, height: size }}
              animate={{
                x: [0, Math.random() * 40 - 20, 0], // Gentle horizontal sway
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                x: {
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              initial={{
                top: `${Math.random() * 120 - 10}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0,
              }}
              whileInView={{ opacity: isRose ? 0.7 : 0.8 }}
              viewport={{ once: true }}
              className={`absolute rounded-tr-[100%] rounded-bl-[100%] shadow-sm ${
                isRose
                  ? "bg-wedding-red shadow-red-900/10"
                  : "bg-yellow-50 shadow-yellow-900/10"
              }`}
            />
          );
        })}

        {/* Gold Dust / Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            style={{
              y: useTransform(
                scrollYProgress,
                [0, 1],
                [0, (i % 2 === 0 ? -1 : 1) * (100 + i * 50)]
              ),
            }}
            className={`absolute rounded-full bg-wedding-gold/30 blur-[1px]`}
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-1 bg-wedding-red mx-auto mb-4"
          />
          <span className="text-wedding-red uppercase tracking-[0.3em] font-serif text-sm font-bold">
            The Royal Itinerary
          </span>
          <h2 className="text-5xl md:text-7xl font-script text-gray-900 mt-4 mb-6 drop-shadow-sm">
            Wedding Celebrations
          </h2>
          <p className="text-gray-500 font-sans max-w-2xl mx-auto">
            Join us in the festivities as we embark on this beautiful journey of
            love, tradition, and togetherness.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-wedding-gold/20 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY: scaleY }}
              className="w-full h-full bg-wedding-red origin-top"
            />
          </div>

          <div className="space-y-16 md:space-y-32">
            {WEDDING_EVENTS.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EventCard = ({
  event,
  index,
}: {
  event: EventDetails;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  // Staggered animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3, // Delays the children animations relative to each other
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const markerVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15%" }}
      className={`flex flex-col md:flex-row items-center gap-10 md:gap-0 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content Side */}
      <motion.div
        variants={childVariants}
        className={`w-full md:w-1/2 ${
          isEven ? "md:pr-20 md:text-right" : "md:pl-20 md:text-left"
        } text-center group`}
      >
        <div className="space-y-5 relative">
          <h3 className="text-3xl md:text-4xl font-serif text-wedding-red leading-tight group-hover:text-red-700 transition-colors">
            {event.title}
          </h3>

          <div
            className={`flex flex-col gap-3 text-gray-600 ${
              isEven ? "md:items-end" : "md:items-start"
            } items-center`}
          >
            <div className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full border border-wedding-gold/20">
              <Calendar className="w-4 h-4 text-wedding-orange" />
              <span className="font-sans font-medium text-sm tracking-wide">
                {event.date}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-wedding-gold" />
              <span className="font-sans text-sm">{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-wedding-gold" />
              <span className="font-sans text-sm font-semibold">
                {event.location}
              </span>
            </div>
          </div>

          <div
            className={`w-12 h-[2px] bg-wedding-gold/50 mx-auto ${
              isEven ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
            }`}
          ></div>

          <p className="text-gray-600 font-serif leading-relaxed text-lg italic">
            "{event.description}"
          </p>
        </div>
      </motion.div>

      {/* Center Marker (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20">
        <motion.div
          variants={markerVariants}
          className="w-10 h-10 bg-wedding-cream rounded-full border-2 border-wedding-gold flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]"
        >
          <div className="w-3 h-3 bg-wedding-red rounded-full animate-pulse"></div>
        </motion.div>
      </div>

      {/* Image Side */}
      <motion.div
        variants={childVariants}
        className={`w-full md:w-1/2 ${isEven ? "md:pl-20" : "md:pr-20"}`}
      >
        <motion.div whileHover={{ y: -10 }} className="relative">
          {/* Image Frame - Arch Shape */}
          <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-xl border-[6px] border-double border-wedding-gold/40 shadow-2xl h-80 md:h-96 w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10 transition-opacity duration-500 hover:opacity-30"></div>
            <motion.img
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.8 }}
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay Text on Image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <p className="text-wedding-cream font-script text-2xl opacity-90">
                Celebration
              </p>
            </div>
          </div>

          {/* Decorative background circle behind image */}
          <div
            className={`absolute top-10 -z-10 w-full h-full border-2 border-wedding-red/10 rounded-t-[10rem] rounded-b-xl ${
              isEven ? "-right-4 rotate-3" : "-left-4 -rotate-3"
            }`}
          ></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Events;
