'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { gsap } from "gsap/gsap-core";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Neurid",
//   description: "Developed by Raju and team",
// };

export default function RootLayout({ children }) {
 useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);

    // Animate cursor movement
    const moveCursor = (e) => {
      console.log(e.x);
      gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.8,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", (e)=>{
      moveCursor(e);
    });

  },[]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
