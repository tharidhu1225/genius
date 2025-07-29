import React from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaLaptopCode, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            About Genius Higher Educational Institute
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Empowering the next generation through education and innovation.
            We’re on a mission to bridge the gap between knowledge and opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaChalkboardTeacher className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Education</h3>
            <p className="text-gray-600 text-sm">
              We deliver high-quality educational resources that empower learners of all levels.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaLaptopCode className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tech-Driven Solutions</h3>
            <p className="text-gray-600 text-sm">
              Innovating with the latest technologies to solve real-world problems in education.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaUsers className="text-purple-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Impact</h3>
            <p className="text-gray-600 text-sm">
              Transforming communities by making learning accessible, inclusive, and impactful.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h2>
          <p className="text-gray-700">
            To empower individuals and organizations with educational excellence, technological innovation,
            and unwavering commitment to lifelong learning.
          </p>
        </div>
      </div>
    </section>
  );
}
