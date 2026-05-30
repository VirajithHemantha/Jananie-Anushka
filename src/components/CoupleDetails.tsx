import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-brand-primary/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center mb-16 sm:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-4 mb-6 mt-4">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-brand-primary/60" />
            <span className="text-brand-primary uppercase tracking-[0.5em] text-[11px] font-semibold font-sans drop-shadow-sm">The Protagonists</span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-brand-primary/60" />
          </div>
          <h2 className="text-5xl sm:text-7xl font-display text-stone-800 tracking-tight drop-shadow-sm">
            Jananie <span className="italic text-brand-primary font-light mx-2">&</span> Anushka
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 relative z-10">
        {/* Groom Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-right flex-1 lg:pr-10"
        >
          <div className="mb-4 flex flex-col items-center lg:items-end">
            <span className="text-brand-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">The Groom</span>
            <h3 className="text-4xl sm:text-5xl font-display text-stone-800 mb-2 drop-shadow-sm">Anushka</h3>
            <p className="text-stone-500/90 font-serif italic text-base sm:text-lg">Son of Mr. Karunarathne Senadheera & Mrs. Badhra Dahanayaka</p>
          </div>
          <div className="hidden lg:flex justify-end mt-8">
            <Heart className="w-6 h-6 text-brand-pink/80 fill-brand-pink/30 transform hover:scale-110 transition-transform cursor-pointer drop-shadow-sm" />
          </div>
        </motion.div>

        {/* Center Divider (Desktop Only) */}
        <div className="hidden lg:flex items-center justify-center h-32 mx-4">
          <div className="w-[1.5px] h-full bg-gradient-to-b from-transparent via-brand-silver-deep/40 to-transparent relative flex items-center justify-center">
            <Heart className="absolute w-5 h-5 text-brand-silver-deep fill-brand-ivory" />
          </div>
        </div>

        {/* Horizontal Divider (Mobile Only) */}
        <div className="lg:hidden w-full flex justify-center py-4 opacity-50">
          <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
        </div>

        {/* Bride Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-center lg:text-left flex-1 lg:pl-10"
        >
          <div className="mb-4 flex flex-col items-center lg:items-start">
            <span className="text-brand-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">The Bride</span>
            <h3 className="text-4xl sm:text-5xl font-display text-stone-800 mb-2 drop-shadow-sm">Jananie</h3>
            <p className="text-stone-500/90 font-serif italic text-base sm:text-lg">Daughter of Mr. K K Chamika Sumithuru & Mrs. Sagarika Perera</p>
          </div>
          <div className="hidden lg:flex justify-start mt-8">
            <Heart className="w-6 h-6 text-brand-pink/80 fill-brand-pink/30 transform hover:scale-110 transition-transform cursor-pointer drop-shadow-sm" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
