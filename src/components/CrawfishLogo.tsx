"use client";

import { motion } from "framer-motion";

export default function CrawfishLogo({ className = "", size = 120 }: { className?: string; size?: number }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -6, 0, -3, 0],
        rotate: [0, -2, 0, 2, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
        <defs>
          <linearGradient id="lobster-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4d4d" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>
        {/* Body */}
        <path d="M60 10 C30 10 15 35 15 55 C15 75 30 95 45 100 L45 110 L55 110 L55 100 C55 100 60 102 65 100 L65 110 L75 110 L75 100 C90 95 105 75 105 55 C105 35 90 10 60 10Z" fill="url(#lobster-gradient)" />
        {/* Left Claw */}
        <motion.path
          d="M20 45 C5 40 0 50 5 60 C10 70 20 65 25 55 C28 48 25 45 20 45Z"
          fill="url(#lobster-gradient)"
          animate={{ rotate: [0, -8, 0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "22px 50px" }}
        />
        {/* Right Claw */}
        <motion.path
          d="M100 45 C115 40 120 50 115 60 C110 70 100 65 95 55 C92 48 95 45 100 45Z"
          fill="url(#lobster-gradient)"
          animate={{ rotate: [0, 8, 0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ transformOrigin: "98px 50px" }}
        />
        {/* Antenna */}
        <motion.path
          d="M45 15 Q35 5 30 8"
          stroke="#ff4d4d"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ d: ["M45 15 Q35 5 30 8", "M45 15 Q33 3 28 7", "M45 15 Q35 5 30 8"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M75 15 Q85 5 90 8"
          stroke="#ff4d4d"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ d: ["M75 15 Q85 5 90 8", "M75 15 Q87 3 92 7", "M75 15 Q85 5 90 8"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        {/* Eyes */}
        <circle cx="45" cy="35" r="6" fill="#050810" />
        <circle cx="75" cy="35" r="6" fill="#050810" />
        <motion.circle
          cx="46"
          cy="34"
          r="2.5"
          fill="#00e5cc"
          animate={{ cx: [46, 47, 46, 45, 46] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="76"
          cy="34"
          r="2.5"
          fill="#00e5cc"
          animate={{ cx: [76, 77, 76, 75, 76] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}
