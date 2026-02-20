/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ChevronRight, GraduationCap, Stars, MapPin, Calendar } from 'lucide-react';

const SENIORS = [
  "BANKURU DIVYA",
  "GUBBALA SUVARNA",
  "BANDREDDI NIKHITHA",
  "MEESALA BHAVYA SAI",
  "TENALI  DEEPIKA"
];

export default function App() {
  const [showInvitation, setShowInvitation] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-stone-800 font-sans selection:bg-rose-100 selection:text-rose-900">
      <AnimatePresence mode="wait">
        {!showInvitation ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-radial-[at_50%_50%] from-rose-50 to-transparent"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Heart className="text-rose-500 w-10 h-10 fill-rose-500/20" />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif italic mb-4 tracking-tight text-stone-900">
                Farewell Invitation

              </h1>
              
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowInvitation(true)}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full font-medium transition-all hover:bg-stone-800 shadow-xl shadow-stone-200"
            >
              Click to View Invitation
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-6 py-12 md:py-20"
          >
            {/* Header Section */}
            <header className="text-center mb-16">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-widest mb-6"
              >
                Farewell 2024
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-serif italic text-stone-900 mb-6">
                End of an Era
              </h2>
              <div className="h-px w-24 bg-stone-200 mx-auto mb-8" />
            </header>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-16 group"
            >
              <img
                src="https://res.cloudinary.com/dqjrhgnz1/image/upload/v1771591165/WhatsApp_Image_2026-02-20_at_10.41.28_AM_lsvvt2.jpg"
                alt="Farewell Group"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="flex items-center gap-2 text-sm font-medium opacity-90">
                  <Stars className="w-4 h-4" /> Memories that last forever
                </p>
              </div>
            </motion.div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-serif italic text-stone-900">A Heartfelt Farewell</h3>
                <p className="text-stone-600 leading-relaxed text-lg">
                 With great respect and warm hearts, we invite our beloved seniors to the farewell ceremony organized in your honor. To create more beautiful memories together and enjoy this special day with you.

Join us as we celebrate the wonderful moments we shared, express our gratitude, and wish you success in all your future endeavors. Your presence will make this occasion truly memorable.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3 text-stone-500">
                    <Calendar className="w-5 h-5 text-rose-400" />
                    <span>Sunday, Feb 22 </span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-500">
                    <MapPin className="w-5 h-5 text-rose-400" />
                    <span>Sir Crreddy Hostel</span>
                  </div>
                </div>
              </motion.div>

              {/* Seniors List */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-stone-50 rounded-3xl p-8 border border-stone-100"
              >
                <div className="flex items-center gap-2 mb-6 text-stone-900 font-medium uppercase tracking-wider text-sm">
                  <GraduationCap className="w-5 h-5 text-rose-500" />
                  Honoring Our Seniors
                </div>
                <ul className="space-y-4">
                  {SENIORS.map((name, index) => (
                    <motion.li
                      key={name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-center justify-between group cursor-default"
                    >
                      <span className="text-lg font-medium text-stone-700 group-hover:text-rose-600 transition-colors">
                        {name}
                      </span>
                      <div className="h-px flex-grow mx-4 bg-stone-200 group-hover:bg-rose-200 transition-colors" />
                      <span className="text-stone-400 text-xs font-mono"></span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Footer */}
            <footer className="mt-24 pt-12 border-t border-stone-100 text-center">
              <button 
                onClick={() => setShowInvitation(false)}
                className="text-stone-400 hover:text-stone-600 transition-colors text-sm underline underline-offset-4"
              >
                Back to Start
              </button>
              <p className="mt-8 text-stone-300 text-xs uppercase tracking-widest">
                With Love, Your Juniors
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
