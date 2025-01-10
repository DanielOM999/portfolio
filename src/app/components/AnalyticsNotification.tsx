"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { useAnalyticsState } from "@/src/hooks/useAnalyticsState";
import { Suspense } from "react";

export function AnalyticsNotification() {
  const { isEnabled, isVisible, hasInitialized, toggleAnalytics } =
    useAnalyticsState();
  const [showDetails, setShowDetails] = useState(false);

  const notificationRef = useRef<HTMLDivElement | null>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(e.target as Node)
    ) {
      setShowDetails(false);
    }
  };

  const handleScroll = () => {
    setShowDetails(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (notificationRef.current && rippleRef.current) {
      const { left, top, width, height } =
        notificationRef.current.getBoundingClientRect();
      const size = Math.max(width, height) * 2;
      const x = e.clientX - left - size / 2;
      const y = e.clientY - top - size / 2;

      rippleRef.current.style.width = `${size}px`;
      rippleRef.current.style.height = `${size}px`;
      rippleRef.current.style.left = `${x}px`;
      rippleRef.current.style.top = `${y}px`;
    }
  };

  const handleMouseEnter = () => {
    if (rippleRef.current) {
      rippleRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    if (rippleRef.current) {
      rippleRef.current.style.opacity = "0";
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {hasInitialized && isEnabled && <Analytics debug={false} />}

      <div className="fixed bottom-20 right-4 z-50">
        <AnimatePresence>
          {(isVisible || !isEnabled) && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-4 right-4 bg-gray-800 rounded-full shadow-lg p-3 cursor-pointer overflow-hidden"
              onClick={() => setShowDetails(!showDetails)}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={notificationRef}
            >
              <span
                ref={rippleRef}
                className="absolute rounded-full bg-white opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out"
              ></span>

              <span
                role="img"
                aria-label="Analytics"
                className="text-2xl relative z-10"
              >
                ❕
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showDetails && (isVisible || !isEnabled) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute bottom-full right-0 mb-2 w-64 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-60"
            >
              <p className="text-sm mb-2 dark:text-white">
                {hasInitialized
                  ? "I just want to know the number of viewers. Nothing else!"
                  : "I collect anonymous data about page visits. Nothing else!"}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAnalytics();
                }}
                className={`px-4 py-2 rounded ${
                  isEnabled
                    ? "bg-red-500 hover:bg-red-700"
                    : "bg-green-500 hover:bg-green-700"
                } text-white transition-colors`}
              >
                {isEnabled ? "Disable" : "Enable"} Analytics
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export function AnalyticsNotificationWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnalyticsNotification />
    </Suspense>
  );
}
