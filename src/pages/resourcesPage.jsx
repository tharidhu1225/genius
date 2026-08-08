import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Loader2,
  AlertTriangle,
  FileDown,
  BookOpenCheck,
  GraduationCap,
  Languages,
  BookOpen,
  ClipboardList,
  CheckCircle2,
  ArrowRight,
  RefreshCcw,
} from "lucide-react";

const ResourcesPage = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab");
  const grade = searchParams.get("grade");

  const subjectsByGrade = {
    "06": ["ICT", "Mathematics", "Science", "Sinhala", "English"],
    "07": ["ICT", "Mathematics", "Science", "Sinhala", "English"],
    "08": ["ICT", "Mathematics", "Science", "Sinhala", "English"],
    "09": ["ICT", "Mathematics", "Science", "Sinhala", "English"],
    "10": ["ICT", "Mathematics", "Science", "Sinhala", "English"],
    "11": ["ICT", "Mathematics", "Science", "Sinhala", "English"],
  };

  const mediums = ["Sinhala", "English", "Tamil"];

  const terms = [
    "Term Test I",
    "Term Test II",
    "Term Test III",
    "Model Paper",
  ];

  const [selectedMedium, setSelectedMedium] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTerm, setSelectedTerm] = useState(null);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const subjects = subjectsByGrade[grade] || [];

  const allFiltersSelected =
    selectedMedium &&
    selectedSubject &&
    (tab !== "Papers" || selectedTerm);

  useEffect(() => {
    if (!allFiltersSelected) {
      setItems([]);
      return;
    }

    setLoading(true);
    setError(null);

    const params = {
      grade,
      medium: selectedMedium,
      subject: selectedSubject,
    };

    if (tab === "Papers") {
      params.paperCategory = selectedTerm;
    }

    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const endpoint = tab === "Books" ? "/api/books" : "/api/paper";

    axios
      .get(`${baseUrl}${endpoint}`, { params })
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [
    tab,
    grade,
    selectedMedium,
    selectedSubject,
    selectedTerm,
    allFiltersSelected,
  ]);

  const resetFilters = () => {
    setSelectedMedium(null);
    setSelectedSubject(null);
    setSelectedTerm(null);
    setItems([]);
    setError(null);
  };

  const currentStep = !selectedMedium
    ? 1
    : !selectedSubject
    ? 2
    : tab === "Papers" && !selectedTerm
    ? 3
    : 4;

  const totalSteps = tab === "Papers" ? 3 : 2;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#07111f] text-white">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />

          <div className="absolute top-40 -left-40 w-[450px] h-[450px] rounded-full bg-cyan-500/15 blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-20">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <span>Resources</span>

            <ArrowRight size={14} />

            <span className="text-cyan-300">
              {tab || "Resources"}
            </span>

            <ArrowRight size={14} />

            <span className="text-white">
              Grade {grade}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-cyan-200 mb-5">
                {tab === "Books" ? (
                  <BookOpen size={15} />
                ) : (
                  <ClipboardList size={15} />
                )}

                {tab === "Books"
                  ? "TEXTBOOK LIBRARY"
                  : "PAPER LIBRARY"}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                Grade{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {grade}
                </span>
              </h1>

              <p className="mt-4 text-slate-400 max-w-xl leading-7">
                Find the right learning materials by choosing
                your medium, subject and{" "}
                {tab === "Papers" ? "paper category." : "resource."}
              </p>
            </div>

            {/* Resource Type */}
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-white/[0.07] border border-white/10 flex items-center justify-center">
                {tab === "Books" ? (
                  <BookOpen
                    className="text-cyan-300"
                    size={23}
                  />
                ) : (
                  <ClipboardList
                    className="text-cyan-300"
                    size={23}
                  />
                )}
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  Resource Type
                </p>

                <p className="font-semibold text-white">
                  {tab || "Resources"}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN
      ====================================================== */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Progress */}
        <div className="mb-10">

          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-bold text-slate-900">
                Find your resource
              </p>

              <p className="text-xs text-slate-500 mt-1">
                Step {Math.min(currentStep, totalSteps)} of{" "}
                {totalSteps}
              </p>
            </div>

            {(selectedMedium ||
              selectedSubject ||
              selectedTerm) && (
              <button
                onClick={resetFilters}
                className="
                  flex items-center gap-2
                  text-sm font-semibold
                  text-slate-500
                  hover:text-indigo-600
                  transition-colors
                "
              >
                <RefreshCcw size={15} />
                Reset
              </button>
            )}
          </div>

          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="
                h-full
                bg-gradient-to-r
                from-indigo-500
                via-blue-500
                to-cyan-400
                rounded-full
                transition-all duration-500
              "
              style={{
                width: `${(Math.min(currentStep, totalSteps) /
                  totalSteps) *
                  100}%`,
              }}
            />
          </div>
        </div>

        {/* =====================================================
            FILTER CARD
        ====================================================== */}
        {!allFiltersSelected && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

            {/* Medium */}
            <div className="p-6 md:p-8 border-b border-slate-100">

              <div className="flex items-start gap-4 mb-6">

                <div
                  className={`
                    w-11 h-11
                    rounded-xl
                    flex items-center justify-center
                    ${
                      selectedMedium
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-indigo-50 text-indigo-600"
                    }
                  `}
                >
                  {selectedMedium ? (
                    <CheckCircle2 size={21} />
                  ) : (
                    <Languages size={21} />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                      Step 01
                    </span>

                    {selectedMedium && (
                      <CheckCircle2
                        size={14}
                        className="text-emerald-500"
                      />
                    )}
                  </div>

                  <h2 className="text-xl font-bold mt-1">
                    Select Medium
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    Choose the language you want to study in.
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                {mediums.map((medium) => {
                  const active =
                    selectedMedium === medium;

                  return (
                    <button
                      key={medium}
                      onClick={() => {
                        setSelectedMedium(medium);
                        setSelectedSubject(null);
                        setSelectedTerm(null);
                      }}
                      className={`
                        group
                        relative
                        flex items-center justify-between
                        px-5 py-4
                        rounded-2xl
                        border
                        text-left
                        transition-all duration-300
                        ${
                          active
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm"
                            : "border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:bg-slate-50"
                        }
                      `}
                    >
                      <span className="font-semibold text-sm">
                        {medium}
                      </span>

                      <div
                        className={`
                          w-7 h-7 rounded-lg
                          flex items-center justify-center
                          transition-all
                          ${
                            active
                              ? "bg-indigo-600 text-white"
                              : "bg-slate-100 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                          }
                        `}
                      >
                        {active ? (
                          <CheckCircle2 size={16} />
                        ) : (
                          <ArrowRight size={15} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Subject */}
            {selectedMedium && (
              <div className="p-6 md:p-8 border-b border-slate-100">

                <div className="flex items-start gap-4 mb-6">

                  <div
                    className={`
                      w-11 h-11
                      rounded-xl
                      flex items-center justify-center
                      ${
                        selectedSubject
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-blue-50 text-blue-600"
                      }
                    `}
                  >
                    {selectedSubject ? (
                      <CheckCircle2 size={21} />
                    ) : (
                      <BookOpen size={21} />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                        Step 02
                      </span>

                      {selectedSubject && (
                        <CheckCircle2
                          size={14}
                          className="text-emerald-500"
                        />
                      )}
                    </div>

                    <h2 className="text-xl font-bold mt-1">
                      Select Subject
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                      Pick a subject for Grade {grade}.
                    </p>
                  </div>

                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">

                  {subjects.map((subject) => {
                    const active =
                      selectedSubject === subject;

                    return (
                      <button
                        key={subject}
                        onClick={() => {
                          setSelectedSubject(subject);
                          setSelectedTerm(null);
                        }}
                        className={`
                          group
                          px-4 py-4
                          rounded-2xl
                          border
                          font-semibold
                          text-sm
                          transition-all duration-300
                          ${
                            active
                              ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20"
                              : "bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                          }
                        `}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span>{subject}</span>

                          {active && (
                            <CheckCircle2 size={16} />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Term */}
            {selectedSubject && tab === "Papers" && (
              <div className="p-6 md:p-8">

                <div className="flex items-start gap-4 mb-6">

                  <div
                    className={`
                      w-11 h-11
                      rounded-xl
                      flex items-center justify-center
                      ${
                        selectedTerm
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-violet-50 text-violet-600"
                      }
                    `}
                  >
                    {selectedTerm ? (
                      <CheckCircle2 size={21} />
                    ) : (
                      <ClipboardList size={21} />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">
                        Step 03
                      </span>

                      {selectedTerm && (
                        <CheckCircle2
                          size={14}
                          className="text-emerald-500"
                        />
                      )}
                    </div>

                    <h2 className="text-xl font-bold mt-1">
                      Select Paper Category
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                      Choose the type of paper you want.
                    </p>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

                  {(
                    grade === "11"
                      ? [...terms, "O/L Past Papers"]
                      : terms
                  ).map((term) => {
                    const active =
                      selectedTerm === term;

                    return (
                      <button
                        key={term}
                        onClick={() => setSelectedTerm(term)}
                        className={`
                          group
                          relative
                          px-5 py-4
                          rounded-2xl
                          border
                          text-left
                          transition-all duration-300
                          ${
                            active
                              ? "bg-violet-600 border-violet-600 text-white shadow-lg shadow-violet-600/20"
                              : "bg-white border-slate-200 text-slate-700 hover:border-violet-300 hover:bg-violet-50"
                          }
                        `}
                      >
                        <div className="flex items-center justify-between">

                          <span className="text-sm font-semibold">
                            {term}
                          </span>

                          <ArrowRight
                            size={16}
                            className={`
                              transition-transform
                              ${
                                active
                                  ? "translate-x-1"
                                  : "text-slate-300 group-hover:text-violet-500 group-hover:translate-x-1"
                              }
                            `}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* =====================================================
            SELECTED SUMMARY
        ====================================================== */}
        {allFiltersSelected && (
          <div className="mb-8">

            <div
              className="
                relative overflow-hidden
                rounded-3xl
                bg-gradient-to-r
                from-indigo-600
                via-blue-600
                to-cyan-500
                p-6 md:p-7
                text-white
                shadow-xl
                shadow-indigo-600/10
              "
            >
              <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-white/10 blur-3xl" />

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                <div>
                  <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 size={15} />
                    Ready to explore
                  </div>

                  <h2 className="text-2xl font-bold mt-2">
                    Your resources are ready
                  </h2>

                  <div className="flex flex-wrap gap-2 mt-4">

                    <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/10 text-sm">
                      Grade {grade}
                    </span>

                    <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/10 text-sm">
                      {selectedMedium}
                    </span>

                    <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/10 text-sm">
                      {selectedSubject}
                    </span>

                    {tab === "Papers" && selectedTerm && (
                      <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/10 text-sm">
                        {selectedTerm}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={resetFilters}
                  className="
                    self-start lg:self-center
                    flex items-center gap-2
                    px-4 py-2.5
                    rounded-xl
                    bg-white/10
                    border border-white/20
                    text-sm font-semibold
                    hover:bg-white/20
                    transition-colors
                  "
                >
                  <RefreshCcw size={16} />
                  Change filters
                </button>

              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            LOADING
        ====================================================== */}
        {loading && (
          <div className="py-20 flex flex-col items-center justify-center">

            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl" />

              <div className="relative w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center justify-center">
                <Loader2
                  className="animate-spin text-indigo-600"
                  size={28}
                />
              </div>
            </div>

            <p className="mt-5 font-semibold text-slate-800">
              Finding resources...
            </p>

            <p className="text-sm text-slate-500 mt-1">
              Please wait a moment.
            </p>
          </div>
        )}

        {/* =====================================================
            ERROR
        ====================================================== */}
        {error && !loading && (
          <div
            className="
              bg-white
              border border-red-200
              rounded-3xl
              p-8 md:p-10
              text-center
              shadow-sm
            "
          >
            <div className="w-14 h-14 mx-auto rounded-2xl bg-red-50 flex items-center justify-center">
              <AlertTriangle
                className="text-red-500"
                size={26}
              />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-5">
              Something went wrong
            </h3>

            <p className="text-red-600 mt-2 text-sm">
              {error}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="
                mt-6
                inline-flex items-center gap-2
                px-5 py-2.5
                rounded-xl
                bg-slate-900
                text-white
                text-sm font-semibold
                hover:bg-slate-800
                transition-colors
              "
            >
              <RefreshCcw size={16} />
              Try again
            </button>
          </div>
        )}

        {/* =====================================================
            NO RESULTS
        ====================================================== */}
        {!loading &&
          !error &&
          allFiltersSelected &&
          items.length === 0 && (
            <div
              className="
                bg-white
                border border-slate-200
                rounded-3xl
                p-10 md:p-14
                text-center
                shadow-sm
              "
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 flex items-center justify-center">
                <AlertTriangle
                  className="text-amber-500"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-6">
                No resources found
              </h3>

              <p className="text-slate-500 max-w-md mx-auto mt-2 leading-6">
                We couldn't find any{" "}
                {tab?.toLowerCase()} for the selected
                filters. Try another subject, medium or category.
              </p>

              <button
                onClick={resetFilters}
                className="
                  mt-6
                  inline-flex items-center gap-2
                  px-5 py-2.5
                  rounded-xl
                  bg-indigo-600
                  text-white
                  text-sm font-semibold
                  hover:bg-indigo-700
                  transition-colors
                "
              >
                <RefreshCcw size={16} />
                Change filters
              </button>
            </div>
          )}

        {/* =====================================================
            RESULTS
        ====================================================== */}
        {!loading &&
          !error &&
          items.length > 0 && (
            <section>

              {/* Result Header */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">

                <div>
                  <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[0.18em]">
                    <span className="w-7 h-px bg-indigo-600" />
                    Available Resources
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black mt-3">
                    {items.length}{" "}
                    {items.length === 1
                      ? "resource"
                      : "resources"}{" "}
                    found
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <GraduationCap size={17} />
                  Grade {grade}
                </div>
              </div>

              {/* Result Cards */}
              <div className="grid gap-4">

                {items.map((item) => (
                  <div
                    key={item._id}
                    className="
                      group
                      relative overflow-hidden
                      bg-white
                      border border-slate-200
                      rounded-2xl
                      p-5 md:p-6
                      shadow-sm
                      hover:shadow-xl
                      hover:border-indigo-200
                      transition-all duration-300
                    "
                  >
                    {/* Hover Gradient */}
                    <div
                      className="
                        absolute left-0 top-0 bottom-0
                        w-1
                        bg-gradient-to-b
                        from-indigo-500
                        to-cyan-400
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                      "
                    />

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

                      {/* Info */}
                      <div className="flex items-start gap-4">

                        <div
                          className="
                            shrink-0
                            w-12 h-12
                            rounded-xl
                            bg-indigo-50
                            text-indigo-600
                            flex items-center justify-center
                            group-hover:bg-indigo-600
                            group-hover:text-white
                            transition-all duration-300
                          "
                        >
                          {tab === "Books" ? (
                            <BookOpenCheck size={22} />
                          ) : (
                            <ClipboardList size={22} />
                          )}
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {item.title}
                          </h3>

                          <div className="flex flex-wrap gap-2 mt-3">

                            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600">
                              Grade {item.grade}
                            </span>

                            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600">
                              {item.medium}
                            </span>

                            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600">
                              {item.subject}
                            </span>

                            {tab === "Papers" &&
                              item.paperCategory && (
                                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-xs font-medium text-indigo-600">
                                  {item.paperCategory}
                                </span>
                              )}
                          </div>
                        </div>
                      </div>

                      {/* Download */}
                      <a
                        href={item.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="
                          shrink-0
                          group/button
                          inline-flex items-center justify-center gap-2
                          px-5 py-3
                          rounded-xl
                          bg-slate-900
                          text-white
                          text-sm font-semibold
                          hover:bg-indigo-600
                          hover:shadow-lg
                          hover:shadow-indigo-600/20
                          transition-all duration-300
                        "
                      >
                        <FileDown
                          size={17}
                          className="group-hover/button:-translate-y-0.5 transition-transform"
                        />

                        Download

                        <ArrowRight
                          size={15}
                          className="group-hover/button:translate-x-0.5 transition-transform"
                        />
                      </a>

                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
      </main>
    </div>
  );
};

export default ResourcesPage;
