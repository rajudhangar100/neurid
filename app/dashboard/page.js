"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  const [current1, setCurrent1] = useState(null);
  const [voltage1, setVoltage1] = useState(null);
  const [current2, setCurrent2] = useState(null);
  const [voltage2, setVoltage2] = useState(null);
  const [theftDetected, setTheftDetected] = useState(false);
  const [counter,setcounter]=useState(0);
  const [change,setchange]=useState(0);

  useEffect(() => {
    const socket = new WebSocket("ws://192.168.78.96:8080"); // Replace with your ESP32 IP

    socket.onopen = () => console.log("WebSocket connected");

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setCurrent1(data.current1);
        setVoltage1(data.voltage1);
        setCurrent2(data.current2);
        setVoltage2(data.voltage2);
        setTheftDetected(data.detected === 1);

        // console.log(counter);
        // if (data.detected === 1 ) {
        //   setcounter(counter+1);
        //   alert("⚠ Theft Detected!");
        // }
      } catch (err) {
        console.error("Invalid data:", event.data);
      }
    };

    socket.onerror = (err) => {
      setchange(change+1);
      // console.error("WebSocket error:", err);
    }
    socket.onclose = () => {
      setchange(change+1);
      console.warn("WebSocket connection closed");
    }

    return () => socket.close();
  }, [change]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        src="/bg.mp4"
        autoPlay
        playsInline
        muted
        loop
      />
      <Navbar />
    <div className="min-h-screen relative  z-50  text-green-400 p-4">
      
      <div className="text-center text-4xl font-bold mt-4 mb-8">NEURID Dashboard</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        {/* Device 1 Table */}
        <div className="border-2 border-green-400 rounded-2xl p-4 bg-black shadow-neon">
          <h2 className="text-2xl font-semibold mb-2">Device 1</h2>
          <table className="w-full">
            <thead>
              <tr className="text-green-300 border-b border-green-500">
                <th className="py-2">Parameter</th>
                <th className="py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Current (A)</td>
                <td className="py-2">{current1 ?? "--"}</td>
              </tr>
              <tr>
                <td className="py-2">Voltage (V)</td>
                <td className="py-2">{voltage1 ?? "--"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Device 2 Table */}
        <div className="border-2 border-green-400 rounded-2xl p-4 bg-black shadow-neon">
          <h2 className="text-2xl font-semibold mb-2">Device 2</h2>
          <table className="w-full">
            <thead>
              <tr className="text-green-300 border-b border-green-500">
                <th className="py-2">Parameter</th>
                <th className="py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Current (A)</td>
                <td className="py-2">{current2 ?? "--"}</td>
              </tr>
              <tr>
                <td className="py-2">Voltage (V)</td>
                <td className="py-2">{voltage2 ?? "--"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <button
          className={`px-6 py-3 text-lg font-semibold rounded-full transition duration-300 ${
            theftDetected ? "bg-red-600 text-white" : "bg-green-600 text-white"
          }`}
        >
          {theftDetected ? "⚠ Theft Detected" : "✔ No Theft Detected"}
        </button>

        <p className="mt-6 max-w-3xl text-center text-green-200">
          This dashboard displays real-time current and voltage readings from two
          electricity monitoring devices. If unusual activity is detected based
          on current thresholds, a theft alert will be triggered automatically
          with visual and textual notifications.
        </p>
      </div>
    </div>
    </div>
  );
}
