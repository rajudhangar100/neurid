// ContactUs.js
"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { useRef, useEffect } from "react";

export default function ContactUs() {
  const videoRef = useRef(null);

  return (
    <div className="relative w-full h-screen overflow-hidden font-mono">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="/bg.mp4"
      ></video>

      {/* Overlay */}
      <div className="relative z-10  w-full h-full flex flex-col items-center justify-center bg-white/5 bg-opacity-60 text-white px-6 py-8">
        {/* Navbar */}
       <Navbar/>
        {/* Contact Form */}
        <div className="bg-black bg-opacity-70 p-8 rounded-xl w-full max-w-xl mt-24 ">
          <h2 className="text-3xl font-semibold text-green-400 text-center mb-6">Contact Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded bg-gray-900 border border-green-400 text-white focus:outline-none" />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-gray-900 border border-green-400 text-white focus:outline-none" />
            <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 rounded bg-gray-900 border border-green-400 text-white focus:outline-none"></textarea>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 rounded transition duration-300">Send</button>
          </form>
        </div>
      </div>
      
    </div>

  );
}
