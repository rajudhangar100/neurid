import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-[#39FF14] border-t border-[#2a2a2a] px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#39FF14]">NEURID</h2>
          <p className="mt-2 text-sm text-[#aaffaa]">
            AI-driven system to detect and prevent electricity theft.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#39FF14] mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">
                <span className="hover:underline hover:text-white transition">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="hover:underline hover:text-white transition">About</span>
              </Link>
            </li>
            <li>
              <Link href="/features">
                <span className="hover:underline hover:text-white transition">Features</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:underline hover:text-white transition">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[#39FF14] mb-3">Contact</h3>
          <p className="text-sm text-[#aaffaa]">Email: support@neurid.ai</p>
          <p className="text-sm text-[#aaffaa]">Phone: +91 98765 43210</p>
          <p className="text-sm text-[#aaffaa]">Bengaluru, India</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-[#39FF14] border-t border-[#2a2a2a] pt-4">
        &copy; {new Date().getFullYear()} NEURID. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
