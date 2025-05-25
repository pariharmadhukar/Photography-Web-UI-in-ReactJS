import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Aditi Sharma",
    mainImage: "https://images.unsplash.com/photo-1519741497674-611481863552",
    profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    feedback:
      "The wedding photos captured by Tirth Photography were stunning and truly memorable. Highly recommend their services!",
  },
  {
    name: "Rohan Mehta",
    mainImage: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    feedback:
      "Amazing experience! The professionalism and creativity exceeded all our expectations. A top choice for photography.",
  },
  {
    name: "Sneha Kapoor",
    mainImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profileImage: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    feedback:
      "Absolutely loved the photos. They captured every special moment perfectly. Will definitely book again.",
  },
];

export default function TestimonialSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <motion.section
      id="testimonials"
      className="py-20 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="w-full px-6 md:px-16 py-10 md:py-20 overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="rounded-lg">
              <div className="flex flex-col md:flex-row items-center">
                
                {/* Main Image - Hidden on mobile */}
                <motion.div
                  className="hidden md:block md:w-1/2"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <img
                    src={t.mainImage}
                    alt={t.name}
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-tl-lg rounded-bl-lg shadow-xl"
                  />
                </motion.div>

                {/* Testimonial Box */}
                <motion.div
                  className="w-full md:w-1/2 h-[400px] md:h-[500px] bg-[rgb(220,93,74)] text-white px-6 md:px-12 py-10 mt-10 md:mt-0 text-center flex flex-col items-center justify-center rounded-lg md:rounded-none md:rounded-tr-lg md:rounded-br-lg shadow-xl"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div className="rating gap-1 mb-4">
                    <input type="radio" name={`rating-${index}`} className="mask mask-heart bg-red-400" />
                    <input type="radio" name={`rating-${index}`} className="mask mask-heart bg-orange-400" defaultChecked />
                    <input type="radio" name={`rating-${index}`} className="mask mask-heart bg-yellow-400" />
                    <input type="radio" name={`rating-${index}`} className="mask mask-heart bg-lime-400" />
                    <input type="radio" name={`rating-${index}`} className="mask mask-heart bg-green-400" />
                  </div>

                  <p className="text-lg font-medium max-w-xl mb-6 leading-relaxed">
                    {t.feedback}
                  </p>

                  <img
                    src={t.profileImage}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-white shadow-md"
                  />

                  <h3 className="font-semibold text-white text-lg">{t.name}</h3>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
}
