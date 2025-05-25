import React from 'react'
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {

  const sendWhatsAppMessage = () => {
    const phoneNumber = "919104980549"; // takshil +91 91049 80549
    const message = "Hello, Whatsapp message send sccessfully!"; // Your default message
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.location.href = url;
  };

  return (
    <footer className="bg-zinc-900 text-white py-16 px-8 relative font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-2">TirthPhotography</h3>
            <p className="text-zinc-300 mb-4">
              Capturing moments with elegance and creativity.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <a
                href="#"
                className="text-white text-2xl hover:scale-110 transition"
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                href="#"
                className="text-white text-2xl hover:scale-110 transition"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
            <p className="text-sm text-zinc-400">
              Developed By Taxil Prajapati
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Weddings</h4>
            <p className="mb-1">9624904560</p>
            <a
              href="mailto:itstirth2004@gmail.com"
              className="text-blue-400 hover:underline"
            >
              itstirth2004@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Form</h4>
            <form className="flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium mb-1"
                >
                  Enter your contact number*
                </label>
                <input
                  type="text"
                  id="contact"
                  placeholder="Your contact number"
                  className="w-full px-4 py-3 rounded-2xl bg-white text-black focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 rounded-2xl bg-white text-black focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black font-medium py-3 rounded-full hover:bg-zinc-200 transition"
              >
                Submit your inquiry now
              </button>
            </form>
          </div>
        </div>

        {/* WhatsApp Floating Icon */}
        <button
      onClick={sendWhatsAppMessage}
          className="fixed bottom-6 right-6 bg-green-500 text-white text-3xl p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
        >
          <FaWhatsapp />
          </button>
      </footer>
  )
}
