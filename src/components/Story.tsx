// // import React, { useRef } from "react";
// // import { motion, useScroll, useTransform, Variants } from "framer-motion";
// // import { Sparkles, Heart } from "lucide-react";

// // const Story: React.FC = () => {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start end", "end start"],
// //   });

// //   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
// //   const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

// //   // Animation variants for paragraphs
// //   const fadeInUp: Variants = {
// //     hidden: { opacity: 0, y: 30 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.8, ease: "easeOut" },
// //     },
// //   };

// //   return (
// //     <section
// //       ref={containerRef}
// //       className="py-24 md:py-32 bg-wedding-cream relative overflow-hidden"
// //     >
// //       {/* Background Pattern */}
// //       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>

// //       {/* Decorative Blur */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-wedding-red/5 rounded-full blur-[100px] pointer-events-none"></div>

// //       <div className="container mx-auto px-4 relative z-10 max-w-4xl">
// //         {/* Title Section */}
// //         <motion.div
// //           style={{ opacity, y }}
// //           className="text-center mb-12 md:mb-14"
// //         >
// //           <motion.div
// //             initial={{ scale: 0 }}
// //             whileInView={{ scale: 1 }}
// //             viewport={{ once: true }}
// //             className="w-16 h-16 mx-auto text-wedding-gold"
// //           >
// //             <Heart className="w-full h-full fill-current opacity-20" />
// //           </motion.div>

// //           <h2 className="text-4xl md:text-6xl font-serif text-wedding-red ">
// //             Our Story
// //           </h2>
// //           <p className="font-script text-2xl md:text-4xl text-wedding-gold mt-6">
// //             "When Devi decides, distance disappears."
// //           </p>
// //           <div className="w-24 h-[1px] bg-wedding-red/30 mx-auto mt-8"></div>
// //         </motion.div>

// //         {/* Content Section */}
// //         <div className="space-y-10 md:space-y-10 text-center md:text-lg leading-relaxed font-sans text-gray-700 relative ">
// //           {/* The Vertical Line "Thread" */}
// //           <div className="absolute top-10 bottom-10 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-wedding-gold/30 to-transparent -translate-x-1/2 hidden md:block"></div>

// //           <motion.p
// //             variants={fadeInUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: "-10%" }}
// //             className="relative bg-wedding-cream/80 backdrop-blur-sm p-4 inline-block shadow-sm rounded-lg border border-white/50 mt-6"
// //           >
// //             "For five long years,{" "}
// //             <span className="text-wedding-red font-semibold">Premraj</span>{" "}
// //             searched sincerely—meeting many, hoping for a connection, yet the
// //             right vibe always felt unreal. The perfect girl seemed imaginary,
// //             and emotional alignment felt like a myth."
// //           </motion.p>

// //           <motion.p
// //             variants={fadeInUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: "-10%" }}
// //             className="relative bg-wedding-cream/80 backdrop-blur-sm p-4 inline-block shadow-sm rounded-lg border border-white/50 mt-6"
// //           >
// //             "Then one serene day in June 2025, inside the peaceful space of the
// //             ashram, destiny revealed its plan."
// //           </motion.p>

// //           <motion.div
// //             variants={fadeInUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: "-10%" }}
// //             className="relative"
// //           >
// //             <p className=" mt-6">
// //               "His family arranged a simple video call.
// //               <br />
// //               But what appeared on the screen was anything but simple."
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             variants={fadeInUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: "-10%" }}
// //             className="relative py-8"
// //           >
// //             <h3 className="text-5xl md:text-7xl font-script text-wedding-red drop-shadow-md ">
// //               Mehal.
// //             </h3>
// //             <p className="text-xl italic text-gray-600 mt-6">
// //               "Graceful. Grounded. Real.
// //               <br />A presence that felt divinely sent."
// //             </p>
// //           </motion.div>

// //           <motion.p
// //             variants={fadeInUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: "-10%" }}
// //             className="relative bg-wedding-cream/80 backdrop-blur-sm p-4 inline-block shadow-sm rounded-lg border border-white/50 mt-6"
// //           >
// //             "Everything he had prayed for—
// //             <span className="text-wedding-red font-serif mx-1">Devi</span>
// //             delivered in abundance."
// //           </motion.p>

// //           <motion.p
// //             variants={fadeInUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: "-10%" }}
// //             className="relative bg-wedding-cream/80 backdrop-blur-sm p-4 inline-block shadow-sm rounded-lg border border-white/50 mt-6"
// //           >
// //             "It felt like a dream… until Mehal literally pinched him and turned
// //             that dream into reality."
// //           </motion.p>

// //           <motion.p
// //             variants={fadeInUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: "-10%" }}
// //             className="relative bg-wedding-cream/80 backdrop-blur-sm p-4 inline-block shadow-sm rounded-lg border border-white/50 mt-6"
// //           >
// //             "Since then, conversations have flowed effortlessly, energies have
// //             aligned naturally, and two journeys have slowly woven into one."
// //           </motion.p>

// //           <motion.div
// //             variants={fadeInUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: "-10%" }}
// //             className="pt-10"
// //           >
// //             <Sparkles className="w-8 h-8 text-wedding-gold mx-auto  animate-spin-slow" />
// //             <p className="font-serif text-xl md:text-2xl text-wedding-red mt-6">
// //               "Their story began on a screen,
// //               <br />
// //               but now it will be written in the sacred fire."
// //             </p>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Story;

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, Variants } from "framer-motion";
// import { Sparkles, Heart, CheckCircle2 } from "lucide-react";

// const Story: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
//   const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

//   // Animation variants for paragraphs
//   const fadeInUp: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       ref={containerRef}
//       className="py-24 md:py-32 bg-wedding-cream relative overflow-hidden"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>

//       {/* Decorative Blur */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-wedding-red/5 rounded-full blur-[100px] pointer-events-none"></div>

//       <div className="container mx-auto px-4 relative z-10 max-w-4xl">
//         {/* Title Section */}
//         <motion.div
//           style={{ opacity, y }}
//           className="text-center mb-16 md:mb-24"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             className="w-16 h-16 mx-auto mb-4 text-wedding-red"
//           >
//             <Heart className="w-full h-full fill-current opacity-20 animate-pulse" />
//           </motion.div>

//           <p className="font-serif text-sm md:text-base tracking-[0.3em] text-wedding-gold uppercase mb-2">
//             Premraj <span className="text-red-500 text-lg">❤</span> Mehal
//           </p>
//           <h2 className="text-5xl md:text-7xl font-serif text-wedding-red mb-6 drop-shadow-sm">
//             OUR STORY
//           </h2>
//           <p className="font-script text-2xl md:text-4xl text-gray-800">
//             "When Devi decides, distance disappears"
//           </p>
//           <div className="w-24 h-[1px] bg-wedding-red/30 mx-auto mt-8"></div>
//         </motion.div>

//         {/* Content Section */}
//         <div className="space-y-10 md:space-y-10 text-center leading-relaxed font-sans text-gray-700 relative">
//           {/* The Vertical Line "Thread" */}
//           <div className="absolute top-10 bottom-10 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-wedding-gold/40 to-transparent -translate-x-1/2 hidden md:block"></div>

//           {/* Stanza 1 */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-10%" }}
//             className="relative bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-wedding-gold/20 shadow-sm max-w-lg mx-auto"
//           >
//             <p className="text-lg md:text-xl font-serif italic text-gray-800">
//               "For five long years, Premraj waited.
//               <br />
//               Many faces… one destiny."
//             </p>
//           </motion.div>

//           {/* Stanza 2 */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-10%" }}
//             className="relative max-w-md mx-auto"
//           >
//             <p className="text-wedding-red font-script text-3xl">
//               "Some souls arrive only when
//               <br />
//               hearts are ready."
//             </p>
//           </motion.div>

//           {/* Destiny Logs In */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-10%" }}
//             className="relative py-4"
//           >
//             <div className="inline-block bg-wedding-gold text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-md">
//               May 2025
//             </div>
//             <h3 className="text-2xl font-serif text-wedding-red mb-4 uppercase tracking-wider">
//               Destiny Logs In
//             </h3>
//             <p className="text-lg text-gray-600 bg-white/80 p-4 rounded-lg inline-block border border-gray-100">
//               "Inside an ashram…
//               <br />a simple video call changed everything."
//             </p>
//           </motion.div>

//           {/* Love Appeared */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-10%" }}
//             className="relative py-8"
//           >
//             <div className="inline-block bg-wedding-red text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-md">
//               14th May 2025
//             </div>
//             <h3 className="text-2xl font-serif text-wedding-red mb-2 uppercase tracking-wider">
//               Love Appeared
//             </h3>

//             <div className="mt-8 mb-6 transform hover:scale-105 transition-transform duration-500">
//               <h2 className="text-6xl md:text-8xl font-script text-wedding-gold drop-shadow-md mb-2">
//                 Mehal
//               </h2>
//               <p className="text-xl font-serif text-gray-800 tracking-wide uppercase">
//                 "Graceful. Grounded. Real."
//               </p>
//             </div>

//             <p className="text-lg italic text-gray-600 max-w-md mx-auto mt-6">
//               "He didn’t just see her —<br />
//               he felt her."
//             </p>
//           </motion.div>

//           {/* Reality Check */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-10%" }}
//             className="relative bg-wedding-red/5 p-8 rounded-2xl border-2 border-wedding-red/10 max-w-lg mx-auto"
//           >
//             <h3 className="text-xl font-bold text-gray-800 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
//               Reality Check <span className="text-2xl">😄</span>
//             </h3>
//             <div className="flex items-center justify-center gap-3 text-lg md:text-xl font-medium text-wedding-red">
//               <span>Dream or real?</span>
//               <span className="hidden md:inline text-gray-300">|</span>
//               <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
//                 Pinch successful{" "}
//                 <CheckCircle2 className="w-5 h-5 text-green-500" />
//               </span>
//             </div>
//           </motion.div>

//           {/* Screen to Fire */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-10%" }}
//             className="relative py-8"
//           >
//             <h3 className="text-xl md:text-3xl font-serif text-gray-800 mb-6 uppercase tracking-widest border-b-2 border-wedding-gold/30 inline-block pb-2">
//               From Screen to Sacred Fire 🔥
//             </h3>
//             <p className="font-script text-4xl text-wedding-red">
//               "Two paths. One fate."
//             </p>
//           </motion.div>

//           {/* Footer */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-10%" }}
//             className="pt-10"
//           >
//             <Sparkles className="w-10 h-10 text-wedding-gold mx-auto mb-6 animate-spin-slow" />
//             <p className="font-serif text-2xl md:text-4xl text-wedding-red tracking-widest uppercase font-bold">
//               Forever Begins Now
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Story;

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Search,
  Video,
  Heart,
  CheckCircle2,
  Flame,
  Star,
  Quote,
} from "lucide-react";

const Story: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const timelineEvents = [
    {
      icon: Search,
      year: "2020-25",
      title: "The Long Wait",
      content:
        "For five years, Premraj searched for a connection that felt like home. Many paths were crossed, but the destination remained elusive.",
      quote: "Some souls arrive only when hearts are ready.",
      image: "/1.jpg",
    },
    {
      icon: Video,
      date: "May '25",
      title: "Destiny Logs In",
      content:
        "In the serenity of an ashram, fate intervened. A simple video call was arranged—no expectations, just a leap of faith orchestrated by the divine.",
      quote: "When Devi decides, distance disappears.",
      image: "/2.jpg",
    },
    {
      icon: Heart,
      date: "14th May",
      title: "Love at First Sight",
      content:
        "Mehal appeared on the screen. Graceful. Grounded. Real. In that moment, he didn't just see her with his eyes; he felt her with his soul.",
      quote: "He felt her presence before he saw her face.",
      image: "/2.jpg",
    },
    {
      icon: CheckCircle2,
      date: "Reality",
      title: "The Pinch",
      content:
        "It felt too good to be true. A dream manifested into reality. A literal pinch confirmed what his heart already knew—she was the one.",
      quote: "Conversations flowed, energies aligned.",
      image: "/3.jpg",
    },
    {
      icon: Flame,
      date: "Forever",
      title: "Sacred Fire",
      content:
        "From a digital screen to the sacred wedding fire. Two separate journeys have now woven into a single, beautiful path forward.",
      quote: "Two paths. One fate.",
      image: "/1.jpg",
    },
  ];

  const Divider = () => (
    <div className="flex items-center justify-center gap-4 my-12 opacity-40">
      <div className="h-[1px] w-12 bg-wedding-red"></div>
      <div className="w-2 h-2 rotate-45 bg-wedding-red"></div>
      <div className="h-[1px] w-12 bg-wedding-red"></div>
    </div>
  );

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-wedding-cream relative overflow-hidden text-gray-800"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

      {/* Floating Elements */}
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <Star className="w-64 h-64 text-wedding-gold" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block border-b-2 border-wedding-gold pb-2 mb-4">
            <span className="text-wedding-red font-serif tracking-widest uppercase text-sm font-bold">
              A Match Made in Heaven
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-script text-gray-900 mb-6 drop-shadow-sm">
            Our Story
          </h2>
        </motion.div>

        {/* Chapters Container */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* VISUAL / DATE SEAL SIDE */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative group">
                      {/* Rotating Outer Ring */}
                      <div className="absolute inset-0 border-2 border-dashed border-wedding-gold/30 rounded-full animate-spin-slow"></div>

                      {/* The Seal */}
                      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-double border-wedding-gold bg-white shadow-xl flex flex-col items-center justify-center  transform transition-transform duration-500 group-hover:scale-105">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover  rounded-full"
                        />
                        {/* <event.icon className="w-8 h-8 text-wedding-red mb-2 opacity-80" />
                        <span className="font-script text-4xl md:text-5xl text-gray-800 leading-tight text-center">
                          {event.year || event.date}
                        </span>
                        {event.year && (
                          <span className="text-xs uppercase tracking-widest text-wedding-gold mt-2 font-bold">
                            Timeline
                          </span>
                        )} */}
                      </div>

                      {/* Background decoration */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-wedding-red/5 rounded-full blur-2xl -z-10"></div>
                    </div>
                  </div>

                  {/* CONTENT SIDE */}
                  <div
                    className={`w-full md:w-1/2 text-center ${
                      isEven ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-wedding-red mb-6">
                      {event.title}
                    </h3>

                    <p className="text-gray-700 font-sans text-lg leading-relaxed mb-8 opacity-90">
                      {event.content}
                    </p>

                    <div
                      className={`relative inline-block p-6 bg-white border border-wedding-gold/20 rounded-lg shadow-sm max-w-md`}
                    >
                      <Quote className="w-8 h-8 text-wedding-gold/40 absolute -top-4 -left-4 fill-current" />
                      <p className="font-serif italic text-lg text-gray-600 relative z-10">
                        "{event.quote}"
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Divider (except last item) */}
                {index !== timelineEvents.length - 1 && <Divider />}
              </div>
            );
          })}
        </div>

        {/* Footer Ornament */}
        <div className="mt-20 flex justify-center opacity-60">
          <Heart className="w-12 h-12 text-wedding-red" />
        </div>
      </div>
    </section>
  );
};

export default Story;
