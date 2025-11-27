import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Star } from "lucide-react";

const RSVP: React.FC = () => {
  const phoneNumber = "8108396132";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
    "Hi! I would like to RSVP for Premraj & Mehal's wedding."
  )}`;
  const telLink = `tel:+91${phoneNumber}`;

  // Ornamental Corner Component
  const CornerOrnament = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 100 100"
      className={`w-16 h-16 md:w-24 md:h-24 text-wedding-gold opacity-60 ${className}`}
    >
      <path
        d="M10,10 Q40,10 50,30 Q60,10 90,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10,10 Q10,40 30,50 Q10,60 10,90"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="10" cy="10" r="4" fill="currentColor" />
      <path
        d="M20,20 Q40,20 45,35 Q50,20 80,20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M20,20 Q20,40 35,45 Q20,50 20,80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );

  return (
    <section className="py-24 bg-wedding-red relative overflow-hidden flex items-center justify-center">
      {/* Background Texture - Red Velvet Look */}
      <div className="absolute inset-0 bg-[url('./diamond-upholstery.png')] opacity-20"></div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/30 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-wedding-cream relative rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-8 border-double border-wedding-gold/40 p-8 md:p-20 text-center"
        >
          {/* Ornamental Corners */}
          <div className="absolute top-2 left-2 pointer-events-none">
            <CornerOrnament />
          </div>
          <div className="absolute top-2 right-2 rotate-90 pointer-events-none">
            <CornerOrnament />
          </div>
          <div className="absolute bottom-2 right-2 rotate-180 pointer-events-none">
            <CornerOrnament />
          </div>
          <div className="absolute bottom-2 left-2 -rotate-90 pointer-events-none">
            <CornerOrnament />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="w-8 h-8 text-wedding-gold mx-auto mb-6 fill-current opacity-40 animate-spin-slow" />
              <h2 className="text-6xl md:text-8xl font-script text-wedding-red mb-2 drop-shadow-sm">
                R.S.V.P
              </h2>
              <p className="text-gray-500 font-serif tracking-[0.2em] text-xs uppercase">
                Répondez s'il vous plaît
              </p>
            </motion.div>

            <div className="w-full max-w-lg mx-auto">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-wedding-gold/50 to-transparent my-6"></div>
              <p className="text-gray-700 font-serif text-lg md:text-xl leading-relaxed italic">
                "The honor of your presence is requested.
                <br />
                Please confirm your attendance to help us prepare for your
                arrival."
              </p>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-wedding-gold/50 to-transparent my-6"></div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="py-4"
            >
              <p className="text-wedding-gold font-bold tracking-widest uppercase text-xs mb-8">
                Kindly Reply Via
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-green-500/30 transition-all w-full sm:w-auto min-w-[200px]"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>WhatsApp</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={telLink}
                  className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-black/30 transition-all w-full sm:w-auto min-w-[200px]"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Now</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
