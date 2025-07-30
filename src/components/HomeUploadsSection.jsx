import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const HomeUploadsSection = () => {
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/upload/uploads`);
        setUploads(res.data);
      } catch (error) {
        console.error("Failed to fetch uploads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUploads();
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target.id === "image-modal-backdrop") {
      setSelectedImage(null);
    }
  };

  return (
    <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">📚 Genius Smart Class Uploads</h2>
        <p className="text-gray-600 text-lg">Explore the latest shared resources from your institute</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array(6).fill().map((_, i) => (
            <div key={i} className="animate-pulse bg-white p-4 rounded-2xl shadow-md">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : uploads.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No uploads found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {uploads.map((item) => (
            <motion.div
              key={item._id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.thumbnailUrl}
                alt={`${item.title} preview`}
                className="w-full h-44 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => setSelectedImage(item.thumbnailUrl)}
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
              <a
                href={item.thumbnailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
              >
                View / Download
              </a>
              <p className="text-xs text-gray-400 text-center mt-3">
                Uploaded: {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </motion.div>
          ))}
        </div>
      )}

      {/* 🖼️ Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            id="image-modal-backdrop"
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-5xl w-full p-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-4 text-white text-3xl font-bold hover:text-red-400 transition"
              >
                &times;
              </button>
              <img src={selectedImage} alt="Full Preview" className="w-full rounded-xl shadow-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HomeUploadsSection;
