import React, { useEffect, useState } from "react";
import { FaTools } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function UnderConstruction() {
  const [loading, setLoading] = useState(true);

  // Simulate loading for 3 seconds (replace with actual loading logic)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-lg"
          >
            {/* Loading Bar Container */}
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden shadow-inner">
              {/* Loading Bar Animated */}
              <motion.div
                className="h-4 bg-yellow-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "linear" }}
              />
            </div>

            <p className="text-center text-gray-600 mt-4 text-lg font-medium">
              Loading, please wait...
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-lg w-full"
          >
            <div className="flex justify-center mb-4 text-yellow-500 text-5xl">
              <FaTools />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Coming Soon</h1>
            <p className="text-gray-600 text-base mb-6">
              This page is currently under construction to bring you a better experience.
            </p>
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-5 py-2 rounded-full">
              Update In Progress
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
