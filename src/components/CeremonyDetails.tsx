import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, MapPin, Heart, Sparkles } from 'lucide-react';

export const CeremonyDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Premium ambient backdrop */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-radial from-brand-primary/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="text-brand-primary uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
                The Engagement
              </span>
              <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-brand-primary/60 to-transparent" />
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display text-stone-800 mb-8 leading-[1.1] drop-shadow-sm">
              A Celebration of <br />
              <span className="italic font-light text-brand-primary">Tradition & Love</span>
            </h2>

            <p className="text-stone-500/90 font-serif text-lg sm:text-xl leading-relaxed mb-16 max-w-lg">
              We are honored to invite you to witness our commitment as we exchange rings in our Engagement Ceremony, surrounded by the beauty of nature and the warmth of our loved ones.
            </p>

            {/* Premium Timeline */}
            <div className="relative space-y-12 ml-10 sm:ml-12 border-l-[1.5px] border-brand-primary/40 pl-10 sm:pl-12 py-4">

              {/* Calendar */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-primary/30 shadow-lg flex items-center justify-center group-hover:border-brand-primary group-hover:shadow-[0_4px_15px_rgba(70,130,180,0.3)] transition-all duration-500">
                  <Calendar className="w-5 h-5 text-brand-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-silver-deep transition-colors duration-500">Friday, September 11</h4>
                  <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold">The Year Two Thousand Twenty Six</p>
                </div>
              </div>

              {/* Clock */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-primary/30 shadow-lg flex items-center justify-center group-hover:border-brand-primary group-hover:shadow-[0_4px_15px_rgba(70,130,180,0.3)] transition-all duration-500">
                  <Clock className="w-5 h-5 text-brand-silver-deep group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-silver-deep transition-colors duration-500">10:00 AM - 11:00 AM</h4>
                  <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold">Engagement Ceremony</p>
                </div>
              </div>

              {/* Location */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-primary/30 shadow-lg flex items-center justify-center group-hover:border-brand-primary group-hover:shadow-[0_4px_15px_rgba(70,130,180,0.3)] transition-all duration-500">
                  <MapPin className="w-5 h-5 text-brand-silver-deep group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-silver-deep transition-colors duration-500">Cinnamon Lakeside</h4>
                  <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Reception Details */}
        <div className="lg:w-1/2 w-full relative mt-16 lg:mt-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-lg bg-white/80 backdrop-blur-xl p-8 sm:p-12 shadow-[0_30px_60px_rgba(70,130,180,0.1)] rounded-3xl border border-white relative overflow-hidden group"
          >
            {/* Elegant top accent line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-primary/40 via-brand-primary-light to-brand-primary/40" />

            <div className="relative">
              <Heart className="text-brand-pink w-8 h-8 mb-6 fill-brand-pink/20 drop-shadow-sm" />
              <Sparkles className="absolute top-0 right-4 w-4 h-4 text-brand-silver-deep animate-pulse" />
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-stone-800 mb-4 tracking-tight">The Reception</h3>
            <p className="text-stone-500/90 font-serif text-base sm:text-lg leading-relaxed mb-8">
              Followed by a celebratory lunch in the Dukes Court of Cinnamon Lakeside.
            </p>
            <div className="inline-block px-5 py-2.5 bg-brand-primary/10 rounded-full border border-brand-primary/30 shadow-sm">
              <span className="text-brand-primary font-sans font-bold tracking-[0.2em] text-[11px] uppercase block drop-shadow-sm">11:00 AM - 03:00 PM</span>
            </div>

            {/* Decorative BG element */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border border-brand-silver/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

