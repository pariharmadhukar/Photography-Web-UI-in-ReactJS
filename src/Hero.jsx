import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
  'https://images.unsplash.com/photo-1519741497674-611481863552',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((url, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${url})` }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-playfair mb-6">
            Capturing Moments, Creating Timeless Memories
          </h1>
          <p className="text-xl text-gray-200 mb-8 font-poppins">
            Transforming fleeting moments into lasting art. Specializing in
            weddings, engagements, and life's most precious memories.
          </p>
          <a
            href="#work"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-poppins font-medium hover:bg-gray-100 transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </motion.div>
  );
}
