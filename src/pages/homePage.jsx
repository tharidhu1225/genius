import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpenIcon,
  FileTextIcon,
  ArrowUpRightIcon,
  GraduationCapIcon,
  SparklesIcon,
  LibraryIcon,
  SearchIcon,
  CheckCircle2Icon,
  ZapIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import HomeUploadsSection from "../components/HomeUploadsSection";

const grades = ["06", "07", "08", "09", "10", "11"];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState("Books");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#07111f] text-white">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-20 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[130px]" />
          <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[130px]" />
          <div className="absolute -bottom-60 right-1/3 w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[130px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-28">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

            {/* =================================================
                HERO CONTENT
            ================================================== */}
            <div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  rounded-full
                  border border-cyan-400/20
                  bg-cyan-400/[0.07]
                  backdrop-blur-md
                  text-sm
                  text-cyan-200
                  shadow-[0_0_30px_rgba(34,211,238,0.08)]
                "
              >
                <SparklesIcon
                  size={15}
                  className="text-cyan-400"
                />

                <span>
                  Modern Learning Platform
                </span>

                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="
                  mt-7
                  text-5xl sm:text-6xl lg:text-7xl
                  font-black
                  tracking-[-0.04em]
                  leading-[0.98]
                "
              >
                Your learning.
                <br />

                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Simplified.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="
                  mt-7
                  max-w-xl
                  text-base sm:text-lg
                  leading-8
                  text-slate-400
                "
              >
                Access textbooks, past papers and valuable
                learning resources — organized by grade and
                designed to make studying easier.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="flex flex-wrap gap-3 mt-9"
              >
                <button
                  onClick={() => {
                    document
                      .getElementById("resources")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="
                    group
                    flex items-center gap-2
                    px-6 py-3.5
                    rounded-xl
                    bg-white
                    text-slate-900
                    font-semibold
                    shadow-xl
                    shadow-black/20
                    hover:bg-cyan-50
                    hover:-translate-y-0.5
                    transition-all duration-300
                  "
                >
                  <SearchIcon size={18} />

                  Explore Resources

                  <ArrowUpRightIcon
                    size={17}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>

                <button
                  onClick={() =>
                    navigate("/resources?tab=Papers&grade=11")
                  }
                  className="
                    flex items-center gap-2
                    px-6 py-3.5
                    rounded-xl
                    border border-white/10
                    bg-white/[0.06]
                    backdrop-blur-md
                    text-white
                    font-semibold
                    hover:bg-white/10
                    hover:border-white/20
                    transition-all duration-300
                  "
                >
                  <FileTextIcon size={18} />

                  Past Papers
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="
                  flex flex-wrap
                  items-center
                  gap-6
                  mt-11
                  pt-7
                  border-t border-white/10
                "
              >
                <div>
                  <p className="text-2xl font-bold">
                    06–11
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Grades
                  </p>
                </div>

                <div className="h-9 w-px bg-white/10" />

                <div>
                  <p className="text-2xl font-bold">
                    02
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Resources
                  </p>
                </div>

                <div className="h-9 w-px bg-white/10" />

                <div>
                  <p className="text-2xl font-bold">
                    24/7
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Available
                  </p>
                </div>

                <div className="hidden sm:block h-9 w-px bg-white/10" />

                <div className="hidden sm:flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2Icon
                    size={17}
                    className="text-emerald-400"
                  />

                  Free to access
                </div>
              </motion.div>
            </div>

            {/* =================================================
                HERO VISUAL
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-[430px] h-[430px]">

                {/* Outer Glow */}
                <div className="absolute inset-16 rounded-full bg-blue-500/10 blur-3xl" />

                {/* Rings */}
                <div className="absolute inset-0 rounded-full border border-white/[0.07]" />

                <div className="absolute inset-8 rounded-full border border-white/[0.06]" />

                <div className="absolute inset-20 rounded-full border border-cyan-400/10" />

                {/* Orbit dots */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-2"
                >
                  <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
                </motion.div>

                {/* Main Card */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    top-20 left-16 right-16 bottom-20
                    rounded-[2rem]
                    border border-white/10
                    bg-white/[0.07]
                    backdrop-blur-2xl
                    shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                    flex flex-col
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      relative
                      w-24 h-24
                      rounded-3xl
                      bg-gradient-to-br
                      from-cyan-300
                      via-blue-500
                      to-violet-600
                      flex items-center justify-center
                      shadow-[0_20px_50px_rgba(59,130,246,0.35)]
                    "
                  >
                    <div className="absolute inset-0 rounded-3xl bg-white/10" />

                    <GraduationCapIcon
                      size={48}
                      className="relative text-white"
                    />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    Smart Learning
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 text-center px-8">
                    Everything you need to study,
                    all in one place.
                  </p>

                  <div className="flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                    <span className="text-xs text-emerald-300">
                      Learning made simple
                    </span>
                  </div>
                </motion.div>

                {/* Books Card */}
                <motion.div
                  animate={{
                    y: [0, -9, 0],
                    rotate: [0, 1, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    top-12 right-0
                    flex items-center gap-3
                    px-5 py-3.5
                    rounded-2xl
                    bg-white
                    text-slate-900
                    shadow-2xl
                  "
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <BookOpenIcon
                      size={19}
                      className="text-indigo-600"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Resource
                    </p>

                    <p className="text-sm font-bold">
                      Books
                    </p>
                  </div>
                </motion.div>

                {/* Papers Card */}
                <motion.div
                  animate={{
                    y: [0, 9, 0],
                    rotate: [0, -1, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    bottom-12 left-0
                    flex items-center gap-3
                    px-5 py-3.5
                    rounded-2xl
                    bg-white
                    text-slate-900
                    shadow-2xl
                  "
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 flex items-center justify-center">
                    <FileTextIcon
                      size={19}
                      className="text-cyan-600"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Resource
                    </p>

                    <p className="text-sm font-bold">
                      Past Papers
                    </p>
                  </div>
                </motion.div>

                {/* Small Floating Badge */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="
                    absolute
                    bottom-3 right-10
                    flex items-center gap-2
                    px-4 py-2.5
                    rounded-xl
                    bg-[#111c30]
                    border border-white/10
                    shadow-xl
                  "
                >
                  <ZapIcon
                    size={16}
                    className="text-yellow-400"
                  />

                  <span className="text-xs font-medium text-slate-300">
                    Study smarter
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESOURCES
      ====================================================== */}
      <main
        id="resources"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">

          <div>
            <div className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold tracking-[0.18em] uppercase mb-4">
              <span className="w-7 h-px bg-indigo-600" />

              <LibraryIcon size={16} />

              Resource Library
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Choose what you
              <span className="text-indigo-600">
                {" "}want to study.
              </span>
            </h2>

            <p className="text-slate-500 mt-4 max-w-xl leading-7">
              Select a resource type and your grade to quickly
              find the learning materials you need.
            </p>
          </div>

          {/* Resource Switch */}
          <div
            className="
              self-start lg:self-auto
              p-1.5
              bg-slate-100
              rounded-2xl
              border border-slate-200
              flex
            "
          >
            {["Books", "Papers"].map((tab) => {
              const active = selectedTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`
                    relative
                    flex items-center gap-2
                    px-5 sm:px-6 py-3
                    rounded-xl
                    text-sm font-semibold
                    transition-all duration-300
                    ${
                      active
                        ? "bg-white text-indigo-600 shadow-md"
                        : "text-slate-500 hover:text-slate-900"
                    }
                  `}
                >
                  {tab === "Books" ? (
                    <BookOpenIcon size={18} />
                  ) : (
                    <FileTextIcon size={18} />
                  )}

                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            GRADE CARDS
        ====================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-6
            gap-4
          "
        >
          {grades.map((grade) => (
            <motion.button
              key={grade}
              variants={itemVariants}
              whileHover={{
                y: -7,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() =>
                navigate(
                  `/resources?tab=${selectedTab}&grade=${grade}`
                )
              }
              className="
                group
                relative
                overflow-hidden
                text-left
                bg-white
                rounded-2xl
                border border-slate-200
                p-5
                shadow-sm
                hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)]
                hover:border-indigo-200
                transition-all duration-300
              "
            >
              {/* Gradient Line */}
              <div
                className="
                  absolute top-0 left-0 right-0
                  h-1
                  bg-gradient-to-r
                  from-indigo-500
                  via-blue-500
                  to-cyan-400
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                "
              />

              <div className="flex items-center justify-between mb-7">

                <div
                  className="
                    w-11 h-11
                    rounded-xl
                    bg-indigo-50
                    text-indigo-600
                    flex items-center justify-center
                    group-hover:bg-indigo-600
                    group-hover:text-white
                    transition-all duration-300
                  "
                >
                  {selectedTab === "Books" ? (
                    <BookOpenIcon size={21} />
                  ) : (
                    <FileTextIcon size={21} />
                  )}
                </div>

                <ArrowUpRightIcon
                  size={19}
                  className="
                    text-slate-300
                    group-hover:text-indigo-600
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-all
                  "
                />
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Grade
              </p>

              <h3 className="text-3xl font-black text-slate-900 mt-1">
                {grade}
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Browse {selectedTab.toLowerCase()}
              </p>

              {/* Bottom Arrow */}
              <div
                className="
                  mt-5
                  flex items-center gap-1
                  text-xs font-semibold
                  text-indigo-600
                  opacity-0
                  translate-y-1
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                "
              >
                Explore
                <ArrowUpRightIcon size={13} />
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* =====================================================
            FEATURE STRIP
        ====================================================== */}
        <div
          className="
            mt-12
            grid md:grid-cols-3
            gap-px
            overflow-hidden
            rounded-2xl
            border border-slate-200
            bg-slate-200
          "
        >
          <div className="bg-white p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <BookOpenIcon size={19} />
            </div>

            <div>
              <p className="font-bold text-sm">
                Organized Resources
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Find materials by grade
              </p>
            </div>
          </div>

          <div className="bg-white p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <FileTextIcon size={19} />
            </div>

            <div>
              <p className="font-bold text-sm">
                Past Papers
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Practice with real papers
              </p>
            </div>
          </div>

          <div className="bg-white p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ZapIcon size={19} />
            </div>

            <div>
              <p className="font-bold text-sm">
                Fast & Simple
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Access learning materials easily
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            RECENT UPLOADS
        ====================================================== */}
        <section className="mt-24">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">

            <div>
              <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[0.18em]">
                <span className="w-7 h-px bg-indigo-600" />
                Community Resources
              </div>

              <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3">
                Recently uploaded
              </h2>

              <p className="text-slate-500 mt-3 max-w-xl">
                Discover the latest learning materials shared
                by students and educators.
              </p>
            </div>

            <button
              onClick={() => navigate("/resources")}
              className="
                self-start
                flex items-center gap-2
                px-4 py-2.5
                rounded-xl
                border border-slate-200
                bg-white
                text-sm font-semibold
                text-slate-700
                hover:text-indigo-600
                hover:border-indigo-200
                hover:shadow-sm
                transition-all
              "
            >
              View all
              <ArrowUpRightIcon size={16} />
            </button>
          </div>

          <HomeUploadsSection />

        </section>
      </main>
    </div>
  );
};

export default HomePage;

