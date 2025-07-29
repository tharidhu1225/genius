import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  // ✅ ESC key handler
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ✅ Backdrop click handler
  const handleBackdropClick = (e) => {
    if (e.target.id === "image-modal-backdrop") {
      setSelectedImage(null);
    }
  };

  return (
    <section className="mt-20 max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Genius Smart Class</h2>
        <p className="text-gray-600 text-lg">Check out the latest documents shared by the institute.</p>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading uploads...</p>
      ) : uploads.length === 0 ? (
        <p className="text-center text-gray-400">No uploads found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {uploads.map((item) => (
            <motion.div
              key={item._id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl shadow-md p-4 border border-gray-100 hover:shadow-xl transition-all"
            >
              <img
                src={item.thumbnailUrl}
                alt={`${item.title} preview`}
                className="w-full h-40 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => setSelectedImage(item.thumbnailUrl)}
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href={item.thumbnailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition"
              >
                View / Download
              </a>
              <p className="text-xs text-gray-400 text-center mt-2">
                Uploaded: {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </motion.div>
          ))}
        </div>
      )}

      {/* ✅ Full Image Modal with backdrop + ESC key close */}
      {selectedImage && (
        <div
          id="image-modal-backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
        >
          <div className="relative max-w-4xl w-full p-4">
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage} alt="Full Preview" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeUploadsSection;
