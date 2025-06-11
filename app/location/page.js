"use client";

import Navbar from "@/components/Navbar";
import { FaBolt, FaPlug, FaExclamationTriangle } from "react-icons/fa";

export default function Location() {
  return (
    <div className="relative w-full h-screen overflow-y-auto">
        {/* Background Video */}
        <video
        className="fixed top-0 z-0 left-0 w-full h-full object-cover"
        src="/bg.mp4"
        autoPlay
        muted
        playsInline
        loop
      />
    {/* <div  className="absolute top-0 left-0 w-full z-20"> */}
        <Navbar />
    {/* </div> */}
    {/* {Overlay Content} */}   
    <div className="min-h-screen relative pt-6 pb-10 z-50 text-green-400 font-mono">
      {/* Map Section */}
      <div className="flex justify-center  mt-6 h-[60vh]">
        <iframe
          title="Google Map"
          width="90%"
          height="90%"
          className="rounded-2xl border-4 border-green-400 shadow-lg"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=12.923562485338929,77.50044487088923&z=15&output=embed"
        ></iframe>
      </div>
      
      {/* Info Cards */}
      <div className="flex justify-center gap-6 mb-4  px-4 flex-wrap">
        {/* DISCOM Card */}
        <div className=" bg-white/5 border border-green-500 rounded-2xl shadow-xl w-full sm:w-[30%] p-6 text-center">
          <FaBolt className="mx-auto text-4xl mb-4 text-green-400" />
          <h2 className="text-2xl font-bold mb-2">DISCOM</h2>
          <p className="text-green-300">
            Our DISCOM ensures efficient power distribution and theft monitoring using smart grid systems.
          </p>
        </div>

        {/* Transformer Card */}
        <div className="bg-white/5 border border-green-500 rounded-2xl shadow-xl w-full sm:w-[30%] p-6 text-center">
          <FaPlug className="mx-auto text-4xl mb-4 text-green-400" />
          <h2 className="text-2xl font-bold mb-2">Transformer A</h2>
          <p className="text-green-300">
            Currently active and supplying power to Sector 9B. Load status: Stable. Real-time monitoring active.
          </p>
        </div>

        {/* Alert System Card */}
        <div className="bg-white/5 border border-green-500 rounded-2xl shadow-xl w-full sm:w-[30%] p-6 text-center">
          <FaExclamationTriangle className="mx-auto text-4xl mb-4 text-green-400" />
          <h2 className="text-2xl font-bold mb-2">Alert System</h2>
          <p className="text-green-300">
            We’ll notify you instantly whenever any abnormal power consumption or theft is detected.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
