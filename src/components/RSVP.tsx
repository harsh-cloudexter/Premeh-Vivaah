import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RSVP: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <section className="py-24 bg-wedding-cream relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-16 border-t-8 border-wedding-red"
        >
            {!submitted ? (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-serif text-gray-800 mb-4">R.S.V.P</h2>
                  <p className="text-gray-600 font-sans">Kindly respond by November 1st, 2025</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Full Name</label>
                      <input required type="text" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-wedding-red outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Email Address</label>
                      <input required type="email" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-wedding-red outline-none transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Number of Guests</label>
                      <select className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-wedding-red outline-none bg-white">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Attending?</label>
                      <select className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-wedding-red outline-none bg-white">
                        <option>Joyfully Accept</option>
                        <option>Regretfully Decline</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Message for the Couple</label>
                    <textarea rows={4} className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-wedding-red outline-none transition-all"></textarea>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-wedding-red text-white font-serif py-4 text-xl tracking-wider hover:bg-red-800 transition-colors rounded shadow-lg"
                  >
                    Confirm Attendance
                  </motion.button>
                </form>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="text-6xl mb-4">🙏</div>
                <h3 className="text-3xl font-serif text-wedding-red mb-2">Thank You!</h3>
                <p className="text-gray-600">Your response has been recorded. We can't wait to see you!</p>
              </motion.div>
            )}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;