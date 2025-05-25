import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  "photo-1583939003579-730e3918a45a",
  "photo-1519741497674-611481863552",
  "photo-1519225421980-715cb0215aed",
  "photo-1465495976277-4387d4b0b4c6",
  "photo-1511285560929-80b456fea0bc",
  "photo-1579547621706-1a9c79d5ffa3",
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);

  return (
    <motion.section
      id="gallery"
      className="py-20 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12">
          Gallery Showcase
        </h2>

        {/* Swiper Slider */}
        {!showAll && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="rounded-xl shadow-xl mb-10"
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg">
                  <img
                    src={`https://images.unsplash.com/${img}`}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-[300px] object-cover"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Toggle Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            {showAll ? "Hide Photos" : "View All Photos"}
          </button>
        </div>

        {/* Full Grid View */}
        {showAll && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={`https://images.unsplash.com/${img}`}
                  alt={`Full Image ${index + 1}`}
                  className="w-full h-[250px] object-cover"
                />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
