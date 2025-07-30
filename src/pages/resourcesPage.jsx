import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loader2, AlertTriangle, FileDown, BookOpenCheck } from "lucide-react";

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
  const terms = ["Term Test I", "Term Test II", "Term Test III", "Model Paper"];

  const [selectedMedium, setSelectedMedium] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const subjects = subjectsByGrade[grade] || [];
  const allFiltersSelected = selectedMedium && selectedSubject && (tab !== "Papers" || selectedTerm);

  useEffect(() => {
    if (!allFiltersSelected) return setItems([]);

    setLoading(true);
    setError(null);

    const params = {
      grade,
      medium: selectedMedium,
      subject: selectedSubject,
    };
    if (tab === "Papers") params.paperCategory = selectedTerm;

    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const endpoint = tab === "Books" ? "/api/books" : "/api/paper";

    axios
      .get(`${baseUrl}${endpoint}`, { params })
      .then((res) => setItems(res.data))
      .catch((err) => setError(err.message || "Unknown error"))
      .finally(() => setLoading(false));
  }, [tab, grade, selectedMedium, selectedSubject, selectedTerm, allFiltersSelected]);

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">📁 Resources</h1>
      <p className="text-lg text-gray-600 mb-10">Viewing <strong>{tab}</strong> for Grade <strong>{grade}</strong></p>

      {/* Filter UI */}
      {!allFiltersSelected && (
        <div className="space-y-10">
          <div>
            <h2 className="text-xl font-bold mb-3">1️⃣ Select Medium</h2>
            <div className="flex flex-wrap gap-4">
              {mediums.map((medium) => (
                <button
                  key={medium}
                  onClick={() => {
                    setSelectedMedium(medium);
                    setSelectedSubject(null);
                    setSelectedTerm(null);
                  }}
                  className={`px-6 py-2 rounded-full border shadow-sm text-sm transition font-medium ${
                    selectedMedium === medium
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {medium}
                </button>
              ))}
            </div>
          </div>

          {selectedMedium && (
            <div>
              <h2 className="text-xl font-bold mb-3">2️⃣ Select Subject</h2>
              <div className="flex flex-wrap gap-4">
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    onClick={() => setSelectedSubject(subject)}
                    className={`px-6 py-2 rounded-full border shadow-sm text-sm transition font-medium ${
                      selectedSubject === subject
                        ? "bg-red-600 text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedSubject && tab === "Papers" && (
            <div>
              <h2 className="text-xl font-bold mb-3">3️⃣ Select Term / Category</h2>
              <div className="flex flex-wrap gap-4">
                {(grade === "11" ? [...terms, "O/L Past Papers"] : terms).map((term) => (
                  <button
                    key={term}
                    onClick={() => setSelectedTerm(term)}
                    className={`px-6 py-2 rounded-full border shadow-sm text-sm transition font-medium ${
                      selectedTerm === term
                        ? "bg-purple-600 text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Summary */}
      {allFiltersSelected && (
        <div className="bg-green-50 border border-green-200 p-6 mt-12 rounded-xl shadow-sm">
          <p className="text-lg text-green-800">
            ✅ <strong>Selected:</strong> Medium: <strong>{selectedMedium}</strong>,
            Subject: <strong>{selectedSubject}</strong>
            {tab === "Papers" && selectedTerm && (
              <> | {grade === "11" ? "Category" : "Term"}: <strong>{selectedTerm}</strong></>
            )}
          </p>
        </div>
      )}

      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center mt-10">
          <Loader2 className="animate-spin h-10 w-10 text-blue-600" />
        </div>
      )}

      {/* Error UI */}
      {error && (
        <div className="bg-red-50 border border-red-300 mt-10 p-6 rounded-lg text-center">
          <AlertTriangle className="mx-auto text-red-500 w-8 h-8 mb-2" />
          <p className="text-red-700 font-semibold">Something went wrong!</p>
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {/* No Results */}
      {!loading && !error && allFiltersSelected && items.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-300 mt-10 p-6 rounded-lg text-center">
          <AlertTriangle className="mx-auto text-yellow-500 w-8 h-8 mb-2" />
          <p className="text-yellow-800 font-semibold">
            Oops! No {tab.toLowerCase()} found for the selected filters.
          </p>
          <p className="text-yellow-600">Try adjusting your filters or check back later.</p>
        </div>
      )}

      {/* Result Items */}
      {!loading && !error && items.length > 0 && (
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div
              key={item._id}
              className="p-4 border rounded-xl flex justify-between items-center hover:bg-gray-50 transition shadow-sm"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
                  <BookOpenCheck className="w-5 h-5" /> {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Grade {item.grade} | {item.medium} | {item.subject}
                  {tab === "Papers" && item.paperCategory && ` | ${item.paperCategory}`}
                </p>
              </div>
              <a
                href={item.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
              >
                <FileDown className="w-5 h-5" /> Download
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ResourcesPage;