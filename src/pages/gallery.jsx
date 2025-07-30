import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/gallery`);
        setGalleries(res.data);
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const handleEsc = (e) => {
    if (e.key === "Escape") setSelectedImage(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") setSelectedImage(null);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">📸 Genius Higher Educational Institute</h2>
        <p className="text-gray-600 text-lg">See the latest captured memories.</p>
      </div>

      {loading ? (
         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {Array.from({ length: 8 }).map((_, index) => (
      <motion.div
        key={index}
        className="rounded-2xl shadow-md border border-gray-100 bg-white p-4 animate-pulse"
      >
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4" />
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-300 rounded w-full mb-1" />
        <div className="h-3 bg-gray-300 rounded w-2/3 mb-3" />
        <div className="h-2 bg-gray-200 rounded w-1/2" />
      </motion.div>
    ))}
  </div>
      ) : galleries.length === 0 ? (
        <p className="text-center text-gray-400">No gallery items found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleries.map((item) => {
            const firstImage = item.imageUrl[0]; // use only first as thumbnail
            return (
              <motion.div
                key={item._id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white transition-all"
              >
                <div
                  onClick={() => navigate(`/gallery/${item._id}`)}
                  className="cursor-pointer"
                >
                  <img
                    src={firstImage}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
                  <div className="mt-3 flex justify-between text-xs text-gray-400">
                    <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                    <button
                      onClick={() => setSelectedImage(firstImage)}
                      className="text-blue-600 hover:underline"
                    >
                      Preview
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Fullscreen Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            id="modal-backdrop"
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full px-4"
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
              <img src={selectedImage} alt="Full Preview" className="w-full rounded-xl shadow-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
