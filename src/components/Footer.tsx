import React from "react";
import { Heart } from "lucide-react";
import { COUPLE } from "../../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-script text-4xl md:text-5xl mb-6">
          {COUPLE.groom} & {COUPLE.bride}
        </h2>
        <p className="font-serif tracking-widest text-wedding-gold mb-8">
          {COUPLE.hashtag}
        </p>

        <div className="flex justify-center items-center gap-2 text-sm text-gray-400 font-sans">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
          <span>for the love of celebrations</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
