import React from 'react';
import { motion } from "framer-motion";

export default function Work() {
  const works = [
    {
      title: "Wedding Gallery",
      description:
        "Capturing the magic of your special day with an artistic eye and attention to detail.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
      linkText: "View Wedding Gallery →",
    },
    {
      title: "Engagement Photography",
      description:
        "Natural, romantic portraits that tell your unique love story.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
      linkText: "View Engagement Photography →",
    },
    {
      title: "Candid Moments",
      description:
        "Unscripted, real moments captured to preserve emotions forever.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      linkText: "View Candid Shots →",
    },
    {
      title: "Bridal Portraits",
      description:
        "Elegant bridal portraits capturing timeless beauty and grace.",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
      linkText: "View Bridal Portraits →",
    },
  ];

  return (
    <motion.section
      id="work"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-16">
          My Work
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg group transition duration-500 hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{work.title}</h3>
                <p className="text-gray-600 mb-4">{work.description}</p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  {work.linkText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
