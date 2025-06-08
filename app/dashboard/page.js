"use client";

import {
  Line,
  Bar,
  Pie,
  Doughnut,
} from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const videoRef = useRef(null);

  // Sample chart data
  const voltageData = {
    labels: ["00:00", "01:00", "02:00", "03:00", "04:00"],
    datasets: [
      {
        label: "Voltage (V)",
        data: [230, 231, 228, 232, 229],
        borderColor: "#00FF88",
        backgroundColor: "rgba(0,255,136,0.1)",
        tension: 0.4,
      },
    ],
  };

  const currentData = {
    labels: ["Phase A", "Phase B", "Phase C"],
    datasets: [
      {
        label: "Current (A)",
        data: [13, 15, 12],
        backgroundColor: ["#00FF88", "#22FFAA", "#55FFCC"],
      },
    ],
  };

  const loadData = {
    labels: ["Transformer A", "Transformer B"],
    datasets: [
      {
        label: "Load Distribution",
        data: [60, 40],
        backgroundColor: ["#00FF88", "#004433"],
      },
    ],
  };

  const anomalyData = {
    labels: ["Normal", "Anomalies"],
    datasets: [
      {
        label: "Anomaly Detection",
        data: [90, 10],
        backgroundColor: ["#00FF88", "#FF4444"],
      },
    ],
  };

  return (
    <div className="relative w-full h-screen overflow-y-auto">
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
    <div  className="absolute top-0 left-0 w-full z-20">
            <Navbar />
          </div>
      {/* Overlay Content */}
      <div className="relative z-10 min-h-screen px-6 py-10 mt-20  bg-opacity-50 text-white font-mono">
        <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center text-green-400">
           NEURID Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Voltage Line Chart */}
          <div className=" bg-white/5 backdrop-blur-lg p-4 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Voltage Over Time</h2>
            <Line data={voltageData} />
          </div>

          {/* Current Bar Chart */}
          <div className=" bg-white/5 backdrop-blur-md bg-opacity-70 p-4 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Current Distribution</h2>
            <Bar data={currentData} />
          </div>

          {/* Load Pie Chart */}
          <div className=" bg-white/5 backdrop-blur-lg bg-opacity-70 p-4 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Load Between Transformers</h2>
            <Pie data={loadData} />
          </div>

          {/* Anomaly Doughnut Chart */}
          <div className=" bg-white/5 backdrop-blur-lg bg-opacity-70 p-4 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Anomaly Detection</h2>
            <Doughnut data={anomalyData} />
          </div>
          
        </div>
        <div className="mt-12 bg-white/5 w-[80%] bg-opacity-50 p-6 rounded-xl text-sm leading-relaxed text-gray-300 max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-green-400 mb-2">About the Dashboard</h3>
          <p>
            This dashboard visualizes real-time performance and health of the NEURID smart energy grid system.
            Voltage trends ensure consistent supply, while current distribution across phases helps detect imbalances.
            Load balancing between transformers optimizes energy usage. Anomaly detection reflects real-time fault predictions using the LSTM model.
          </p>
        </div>
      </div>
    </div>
  );
}
