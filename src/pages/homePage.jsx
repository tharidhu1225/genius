import React, { useState } from "react"; // ✅ Fix useState undefined
import { motion } from "framer-motion";
import { BookOpenIcon, FileTextIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ For redirect
import HomeUploadsSection from "../components/HomeUploadsSection";

const grades = ["06", "07", "08", "09", "10", "11"];

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState("Books");
  const [selectedGrade, setSelectedGrade] = useState(null);
  const navigate = useNavigate();

  const getEmoji = () => (selectedTab === "Books" ? "📘" : "🧾");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] px-4 py-8 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Smart Home 📚
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Select your grade and explore {selectedTab === "Books" ? "books" : "past papers"} easily!
        </p>
      </header>

      <div className="flex justify-center gap-6 mb-10">
        {["Books", "Papers"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setSelectedTab(tab);
              setSelectedGrade(null);
            }}
            className={`flex items-center gap-2 px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 shadow-sm ${
              selectedTab === tab
                ? "bg-red-600 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tab === "Books" ? <BookOpenIcon size={20} /> : <FileTextIcon size={20} />}
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {grades.map((grade) => (
          <motion.div
            key={grade}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedGrade(grade);
              navigate(`/resources?tab=${selectedTab}&grade=${grade}`);
            }}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-md cursor-pointer transition-all duration-300 ${
              selectedGrade === grade
                ? "bg-red-500 text-white"
                : "bg-white text-gray-900 hover:shadow-lg"
            }`}
          >
            <div className="text-5xl mb-3">
              <span role="img" aria-label={selectedTab}>{getEmoji()}</span>
            </div>
            <div className="text-xl font-semibold tracking-wide">
              {grade} Grade
            </div>
          </motion.div>
        ))}
      </div>

      <HomeUploadsSection/>
    </div>
  );
};

export default HomePage; // ✅ This must be present and correct
