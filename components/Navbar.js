"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/public/logo.png"; // Make sure to place your logo here

export default function Navbar() {
  const router=useRouter();

  
  return (
    <nav className="w-[80%] z-40 mx-auto mt-4 px-6 py-3 flex items-center justify-between rounded-full border border-green-400 backdrop-blur-md bg-white/5 shadow-sm">
      {/* Logo + Name */}
      <div className="flex items-center space-x-3">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <div onClick={()=>{router.replace("/")}} className="text-green-400 text-xl md:text-2xl font-semibold tracking-widest">
          NEURID
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex space-x-6 text-green-300 font-medium tracking-wider">
        <div onClick={()=>{router.replace("/")}}  className="hover:text-white transition duration-200">
          Home
        </div>
        <div onClick={()=>{router.replace("/dashboard")}} className="hover:text-white transition duration-200">
          Dashboard
        </div>
        <div  onClick={()=>{router.replace("/contact")}} className="hover:text-white transition duration-200">
          Contact Us
        </div>
      </div>
    </nav>
  );
}
