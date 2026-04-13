import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpenIcon, FileTextIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HomeUploadsSection from "../components/HomeUploadsSection";

const grades = ["06", "07", "08", "09", "10", "11"];

const sweets = [
  {
    name: "Kokis",
    emoji: "🍪",
    desc: "Crispy traditional snack",
  },
  {
    name: "Kavum",
    emoji: "🍩",
    desc: "Sweet oil cake",
  },
  {
    name: "Aluwa",
    emoji: "🧁",
    desc: "Soft milk sweet",
  },
  {
    name: "Kiribath",
    emoji: "🍚",
    desc: "Milk rice",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState("Books");
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [showGreeting, setShowGreeting] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const getEmoji = () => (selectedTab === "Books" ? "📘" : "🧾");

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-200 px-4 py-8 font-sans relative overflow-hidden">

      {/* 🌸 Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 left-10 text-5xl">🌸</motion.div>
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-10 right-10 text-4xl">✨</motion.div>
      </div>

      {/* 🪔 Pahana Glow */}
      <div className="absolute top-5 right-5 text-4xl animate-pulse">
        🪔
      </div>

      {/* 🎉 Greeting */}
      {showGreeting && (
        <motion.div
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full shadow-2xl z-50 text-center"
        >
          🎉 සුභ අලුත් අවුරුද්දක් වේවා! <br />
          இனிய தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள்! 🎉
        </motion.div>
      )}

      {/* 🌞 Header */}
      <header className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl font-extrabold text-red-700 mb-4"
        >
          🌞 Smart Avurudu Hub
        </motion.h1>

        <p className="text-lg text-gray-700">
          Learn, explore & celebrate 🎊
        </p>
      </header>

      {/* 🔥 Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        {["Books", "Papers"].map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setSelectedTab(tab);
              setSelectedGrade(null);
            }}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold shadow-lg ${
              selectedTab === tab
                ? "bg-gradient-to-r from-red-500 to-yellow-500 text-white"
                : "bg-white hover:bg-yellow-50"
            }`}
          >
            {tab === "Books" ? <BookOpenIcon size={20} /> : <FileTextIcon size={20} />}
            {tab}
          </motion.button>
        ))}
      </div>

      {/* 🎯 Grades */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
      >
        {grades.map((grade) => (
          <motion.div
            key={grade}
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedGrade(grade);
              navigate(`/resources?tab=${selectedTab}&grade=${grade}`);
            }}
            className="backdrop-blur-lg bg-white/70 p-6 rounded-2xl shadow-xl cursor-pointer text-center"
          >
            <div className="text-5xl mb-3">{getEmoji()}</div>
            <div className="font-bold text-lg">Grade {grade}</div>
          </motion.div>
        ))}
      </motion.div>

      

      {/* 📦 Uploads */}
      <div className="mt-16">
        <HomeUploadsSection />
      </div>

      {/* 🎇 Footer */}
      <footer className="text-center mt-16 text-gray-600 text-sm">
        ✨ Made with ❤️ for Avurudu ✨
      </footer>
    </div>
  );
};

export default HomePage;