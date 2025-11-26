import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flower } from "lucide-react";

const DurgaSymbol = () => (
  <svg
    viewBox="0 0 200 240"
    className="w-32 h-40 md:w-48 md:h-60 text-wedding-red fill-current drop-shadow-xl"
  >
    {/* Third Eye Outline */}
    <path
      d="M100 20 C85 60 85 110 100 150 C115 110 115 60 100 20 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    {/* Third Eye Pupil */}
    <circle cx="100" cy="85" r="12" />

    {/* Left Eyebrow */}
    <path
      d="M20 120 Q55 80 90 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />

    {/* Right Eyebrow */}
    <path
      d="M180 120 Q145 80 110 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />

    {/* Left Eye */}
    <path
      d="M25 150 Q55 130 85 150 Q55 170 25 150 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
    />
    <circle cx="55" cy="150" r="10" />

    {/* Right Eye */}
    <path
      d="M115 150 Q145 130 175 150 Q145 170 115 150 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
    />
    <circle cx="145" cy="150" r="10" />

    {/* Nose Ring (Nath) - Stylized */}
    <path
      d="M125 200 A 20 20 0 1 1 155 220"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <rect x="150" y="205" width="16" height="12" rx="2" fill="currentColor" />
  </svg>
);

const VERSES = [
  {
    sanskrit: "वाग्देवी सह साक्षी, दैवीकृपया सम्पन्नं समागमम्।",
    meaning: "With Devi as the witness, this union is blessed.",
  },
  {
    sanskrit: "द्वौ शरीरौ, एकं चेतः — तदेव मंगलारंभः।",
    meaning:
      "Two bodies, one heart — the true beginning of a sacred household.",
  },
  {
    sanskrit: "समर्पणं, श्रद्धा, प्रेम — एतेषु आधारितो दांपत्यधर्मः।",
    meaning: "Surrender, sincerity, love — these are the pillars of marriage.",
  },
];

const Shlokas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms (Reused from Events for consistency)
  const yMoveUp = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yMoveDown = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateReverse = useTransform(scrollYProgress, [0, 1], [360, 0]);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-wedding-cream relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('./black-scales.png')]"></div>

      {/* --- Parallax Background Elements (Ambient) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Mandalas */}
        {/* <motion.div
          style={{ y: yMoveUp, rotate }}
          className="absolute -top-20 -left-20 opacity-[0.04] z-0"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Mandala_6.svg"
            className="w-[30rem] h-[30rem]"
            alt=""
          />
        </motion.div>
        <motion.div
          style={{ y: yMoveDown, rotate: rotateReverse }}
          className="absolute top-1/2 -right-32 opacity-[0.04] z-0"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Mandala_6.svg"
            className="w-[40rem] h-[40rem]"
            alt=""
          />
        </motion.div> */}

        {/* Floating Flowers/Petals */}
        <motion.div
          style={{ y: yMoveDown, x: -30 }}
          className="absolute top-20 right-[10%] opacity-10 text-wedding-red"
        >
          <Flower className="w-12 h-12" />
        </motion.div>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`petal-${i}`}
            style={{
              y: useTransform(
                scrollYProgress,
                [0, 1],
                [0, -100 * ((i % 2) + 1)]
              ),
            }}
            className={`absolute rounded-full w-3 h-3 ${
              i % 2 === 0 ? "bg-wedding-red" : "bg-wedding-orange"
            } opacity-40`}
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        {/* Divine Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12 relative"
        >
          <motion.div
            animate={{
              filter: [
                "drop-shadow(0 0 10px rgba(196,30,58,0.3))",
                "drop-shadow(0 0 25px rgba(196,30,58,0.6))",
                "drop-shadow(0 0 10px rgba(196,30,58,0.3))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="./devi1.png" className="w-[22rem] h-[22rem] " alt="" />
            {/* <DurgaSymbol /> */}
          </motion.div>
          {/* Halo Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-wedding-red/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        {/* Verses */}
        <div className="space-y-16 max-w-4xl">
          {VERSES.map((verse, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-wedding-red leading-relaxed drop-shadow-sm">
                  {verse.sanskrit}
                </h3>

                <div className="flex items-center gap-4 w-full justify-center opacity-60">
                  <div className="h-[1px] w-12 md:w-24 bg-wedding-gold"></div>
                  <div className="w-2 h-2 rotate-45 bg-wedding-gold"></div>
                  <div className="h-[1px] w-12 md:w-24 bg-wedding-gold"></div>
                </div>

                <p className="text-lg md:text-2xl font-sans italic text-gray-700 font-light">
                  "{verse.meaning}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shlokas;
