import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { GALLERY_IMAGES } from "../../constants";
import { Flower, X, ChevronLeft, ChevronRight, Circle } from "lucide-react";

const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0); // For the carousel
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null); // For the modal

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

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

  // --- Carousel Logic ---
  const handleNextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const handlePrevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // --- Lightbox Logic ---
  const handleNextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % GALLERY_IMAGES.length : 0
      );
    }
  };

  const handlePrevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null
          ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
          : 0
      );
    }
  };

  // Handle keyboard navigation & Preload Images
  useEffect(() => {
    // Keyboard support
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "ArrowRight") handleNextLightbox();
        if (e.key === "ArrowLeft") handlePrevLightbox();
        if (e.key === "Escape") setLightboxIndex(null);
        return;
      }

      if (e.key === "ArrowRight") handleNextSlide();
      if (e.key === "ArrowLeft") handlePrevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);

    // Image Preloading Optimization
    if (lightboxIndex !== null) {
      const nextIndex = (lightboxIndex + 1) % GALLERY_IMAGES.length;
      const prevIndex =
        (lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;

      const preloadImage = (src: string) => {
        const img = new Image();
        img.src = src;
      };

      // Preload next and previous full-res images
      preloadImage(GALLERY_IMAGES[nextIndex].src);
      preloadImage(GALLERY_IMAGES[prevIndex].src);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, activeIndex]);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-wedding-cream relative overflow-hidden min-h-[900px] flex flex-col justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

      {/* --- Parallax Background Elements --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Rotating Mandalas */}
        <motion.div
          style={{ y: yMoveUp, rotate }}
          className="absolute -top-20 -right-32 opacity-[0.06] z-0"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Mandala_6.svg"
            className="w-[35rem] h-[35rem]"
            alt="Mandala"
          />
        </motion.div>
        <motion.div
          style={{ y: yMoveDown, rotate: rotateReverse }}
          className="absolute -bottom-20 -left-40 opacity-[0.06] z-0"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Mandala_6.svg"
            className="w-[45rem] h-[45rem]"
            alt="Mandala"
          />
        </motion.div>

        {/* Floating Flowers */}
        <motion.div
          style={{ y: yMoveFast, x: -50 }}
          className="absolute top-20 left-[10%] opacity-10 text-wedding-red"
        >
          <Flower className="w-16 h-16" />
        </motion.div>

        {/* Floating Diyas */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`diya-${i}`}
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -60 * (i + 1)]),
            }}
            className="absolute z-0"
            initial={{
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 90}%`,
            }}
          >
            <div className="opacity-60 drop-shadow-lg scale-75">
              <svg width="40" height="40" viewBox="0 0 50 40" fill="none">
                <path
                  d="M25 0C25 0 20 10 20 15C20 18 22 20 25 20C28 20 30 18 30 15C30 10 25 0 25 0Z"
                  fill="#FFD700"
                  className="animate-pulse origin-bottom"
                />
                <path
                  d="M25 5C25 5 23 10 23 13C23 14 24 15 25 15C26 15 27 14 27 13C27 10 25 5 25 5Z"
                  fill="#FFA500"
                />
                <path d="M5 20Q25 45 45 20H5Z" fill="#8B4513" />
              </svg>
            </div>
          </motion.div>
        ))}

        {/* Drifting Petals */}
        {[...Array(15)].map((_, i) => {
          const isRose = i % 2 === 0;
          const yMotion =
            i % 3 === 0 ? petalY1 : i % 3 === 1 ? petalY2 : petalY3;
          const size = Math.random() * 10 + 10;
          return (
            <motion.div
              key={`petal-${i}`}
              style={{ y: yMotion, width: size, height: size }}
              animate={{
                x: [0, Math.random() * 40 - 20, 0],
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                x: {
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              initial={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0,
              }}
              whileInView={{ opacity: isRose ? 0.6 : 0.7 }}
              viewport={{ once: true }}
              className={`absolute rounded-tr-[100%] rounded-bl-[100%] shadow-sm ${
                isRose
                  ? "bg-wedding-red shadow-red-900/10"
                  : "bg-yellow-50 shadow-yellow-900/10"
              }`}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-wedding-gold"></div>
            <span className="text-wedding-red uppercase tracking-[0.3em] font-serif text-sm font-bold">
              Timeless Memories
            </span>
            <div className="h-[1px] w-12 bg-wedding-gold"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-script text-gray-900 drop-shadow-sm">
            Captured Moments
          </h2>
        </motion.div>

        {/* --- CAROUSEL CONTAINER --- */}
        <div className="relative w-full h-[500px] md:h-[600px] perspective-1000 flex items-center justify-center">
          {/* Nav Buttons */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-0 md:left-10 z-30 p-3 bg-white/80 hover:bg-white rounded-full text-wedding-red shadow-xl backdrop-blur-sm transition-all hover:scale-110"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute right-0 md:right-10 z-30 p-3 bg-white/80 hover:bg-white rounded-full text-wedding-red shadow-xl backdrop-blur-sm transition-all hover:scale-110"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            {GALLERY_IMAGES.map((img, idx) => {
              let offset = idx - activeIndex;

              // Logic to show nearby slides
              const isActive = idx === activeIndex;

              // Optimization: Don't render far-away slides to save DOM nodes
              if (Math.abs(offset) > 2) return null;

              return (
                <CarouselCard
                  key={img.id}
                  img={img}
                  offset={offset}
                  isActive={isActive}
                  onClick={() => {
                    if (isActive) {
                      setLightboxIndex(idx);
                    } else {
                      setActiveIndex(idx);
                    }
                  }}
                />
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-3">
            {GALLERY_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`transition-all duration-300 ${
                  i === activeIndex
                    ? "text-wedding-red scale-125"
                    : "text-wedding-gold/40 hover:text-wedding-gold"
                }`}
              >
                <Circle
                  className={`w-3 h-3 ${
                    i === activeIndex ? "fill-current" : ""
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm"
            onClick={() => setLightboxIndex(null)}
          >
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <button
              onClick={handlePrevLightbox}
              className="absolute left-4 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNextLightbox}
              className="absolute right-4 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Container for Crossfade */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-10 pointer-events-none">
              {/* Placeholder Background (Blurred Thumbnail) for perceived performance */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <img
                  src={GALLERY_IMAGES[lightboxIndex].thumbnail}
                  className="max-w-full max-h-[70vh] object-contain opacity-50 blur-xl"
                  alt=""
                />
              </div>

              <AnimatePresence mode="popLayout">
                <motion.img
                  key={lightboxIndex}
                  src={GALLERY_IMAGES[lightboxIndex].src}
                  alt={GALLERY_IMAGES[lightboxIndex].alt}
                  // Eager load active lightbox image
                  loading="eager"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="max-w-full max-h-[70vh] object-contain shadow-2xl rounded-sm pointer-events-auto mb-8 z-10"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>

              {/* Description Text in Lightbox */}
              <div className="absolute bottom-16 left-0 right-0 text-center px-4 pointer-events-none z-50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightboxIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block max-w-3xl"
                  >
                    <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10">
                      <h3 className="text-wedding-gold font-script text-3xl mb-3 drop-shadow-md">
                        {GALLERY_IMAGES[lightboxIndex].alt}
                      </h3>
                      <p className="text-white/95 font-serif text-lg md:text-xl italic drop-shadow-md leading-relaxed">
                        "{GALLERY_IMAGES[lightboxIndex].description}"
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute bottom-6 left-0 right-0 text-center text-white/50 font-sans tracking-widest text-xs uppercase">
                {lightboxIndex + 1} / {GALLERY_IMAGES.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface CarouselCardProps {
  img: (typeof GALLERY_IMAGES)[0];
  offset: number;
  isActive: boolean;
  onClick: () => void;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  img,
  offset,
  isActive,
  onClick,
}) => {
  // Determine card styling based on offset
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const xBase = isMobile ? 280 : 420;
  const x = offset * xBase;

  // Visual transforms
  const scale = isActive ? 1.1 : 0.85;
  const opacity = isActive ? 1 : 0.5;
  const zIndex = isActive ? 20 : 10 - Math.abs(offset);
  const rotateY = offset * -5;
  const blur = isActive ? 0 : 2;

  return (
    <motion.div
      layout
      initial={false}
      animate={{
        x: `${x}px`,
        scale,
        opacity,
        zIndex,
        rotateY,
        filter: `blur(${blur}px)`,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 1,
      }}
      className="absolute top-0 bottom-0 flex items-center justify-center cursor-pointer origin-center"
      style={{
        width: isMobile ? "260px" : "350px",
        height: isMobile ? "380px" : "500px",
        left: "50%",
        marginLeft: isMobile ? "-130px" : "-175px",
      }}
      onClick={onClick}
    >
      <div
        className={`bg-white p-3 md:p-4 shadow-2xl transition-all duration-500 relative overflow-hidden h-full w-full ${
          isActive ? "shadow-wedding-gold/20" : ""
        }`}
      >
        {isActive && (
          <>
            <div className="absolute top-3 left-3 w-8 h-8 border-t-[3px] border-l-[3px] border-wedding-gold z-20"></div>
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-[3px] border-r-[3px] border-wedding-gold z-20"></div>
          </>
        )}

        <div className="relative overflow-hidden w-full h-full border border-gray-100 bg-gray-100">
          <img
            src={img.thumbnail}
            alt={img.alt}
            loading="lazy"
            decoding="async" // Decode off-main-thread for smoother carousel animations
            className="absolute inset-0 w-full h-full object-cover"
          />

          <motion.div
            animate={{ opacity: isActive ? 0 : 1 }}
            className="absolute inset-0 bg-gray-200 mix-blend-saturation"
          />
        </div>

        <motion.div
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
          className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-4 text-center border-t border-wedding-gold/20"
        >
          <h3 className="font-script text-xl text-wedding-red">{img.alt}</h3>
          <p className="font-serif text-[10px] md:text-xs text-gray-600 italic line-clamp-1">
            "{img.description}"
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Gallery;
