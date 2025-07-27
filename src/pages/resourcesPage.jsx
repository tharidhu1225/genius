import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ResourcesPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab"); // "Books" or "Papers"
  const grade = searchParams.get("grade");

  const subjectsByGrade = {
  "06": [
    "ICT",
    "Mathematics",
    "Science",
    "Sinhala",
    "English"
  ],
  "07": [
    "ICT",
    "Mathematics",
    "Science",
    "Sinhala",
    "English"
  ],
  "08": [
    "ICT",
    "Mathematics",
    "Science",
    "Sinhala",
    "English"
  ],
  "09": [
    "ICT",
    "Mathematics",
    "Science",
    "Sinhala",
    "English"
  ],
  "10": [
    "ICT",
    "Mathematics",
    "Science",
    "Sinhala",
    "English"
  ],
  "11": [
    "ICT",
    "Mathematics",
    "Science",
    "Sinhala",
    "English"
  ],
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
    if (tab === "Papers") params.paperCategory = selectedTerm;

    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const endpoint = tab === "Books" ? "/api/books" : "/api/paper";

    axios
      .get(`${baseUrl}${endpoint}`, { params })
      .then((response) => setItems(response.data))
      .catch((err) => setError(err.message || "Unknown error"))
      .finally(() => setLoading(false));
  }, [tab, grade, selectedMedium, selectedSubject, selectedTerm, allFiltersSelected]);

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">📁 Resources</h2>
      <p className="text-lg text-gray-600 mb-10">
        Viewing <strong>{tab}</strong> for Grade <strong>{grade}</strong>
      </p>

      {/* Show filters only if not all selected */}
      {!allFiltersSelected && (
        <>
          {/* Medium Selection */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">1️⃣ Select Medium</h3>
            <div className="flex gap-4 flex-wrap">
              {mediums.map((medium) => (
                <button
                  key={medium}
                  onClick={() => {
                    setSelectedMedium(medium);
                    setSelectedSubject(null);
                    setSelectedTerm(null);
                  }}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 border shadow-sm ${
                    selectedMedium === medium
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {medium}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Selection */}
          {selectedMedium && (
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">2️⃣ Select Subject</h3>
              <div className="flex gap-4 flex-wrap">
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    onClick={() => setSelectedSubject(subject)}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 border shadow-sm ${
                      selectedSubject === subject
                        ? "bg-red-600 text-white shadow-md"
                        : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Term or Category - only for Papers */}
{selectedSubject && tab === "Papers" && (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-gray-700 mb-3">
      3️⃣ Select Term / Exam Category
    </h3>
    <div className="flex gap-4 flex-wrap">
      {/* For grade 11, show Terms + O/L Past Papers */}
      {(grade === "11"
        ? [...terms, "O/L Past Papers"]  // Add O/L Past Papers after Terms
        : terms
      ).map((item) => (
        <button
          key={item}
          onClick={() => setSelectedTerm(item)}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 border shadow-sm ${
            selectedTerm === item
              ? "bg-purple-600 text-white shadow-md"
              : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>
          )}
        </>
      )}

      {/* Summary + Items List when all filters selected */}
      {allFiltersSelected && (
        <>
          <div className="mt-12 bg-green-50 border border-green-200 p-6 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-green-800">
              ✅ You selected:
              <br />
              <span className="ml-2">
                📘 Medium: <strong>{selectedMedium}</strong>
              </span>
              <br />
              <span className="ml-2">
                📚 Subject: <strong>{selectedSubject}</strong>
              </span>
              {tab === "Papers" && selectedTerm && (
                <>
                  <br />
                  <span className="ml-2">
                    🗂️ {grade === "11" ? "Category" : "Term"}:{" "}
                    <strong>{selectedTerm}</strong>
                  </span>
                </>
              )}
            </p>
          </div>

          {loading && (
            <div className="flex justify-center my-10">
              <svg
                className="animate-spin h-10 w-10 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            </div>
          )}

          {error && (
            <p className="text-center text-red-600 mt-8 text-lg font-semibold">
              Error: {error}
            </p>
          )}

          {!loading && !error && items.length > 0 && (
            <div className="mt-8 space-y-4">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="p-4 border rounded-md hover:bg-gray-50 transition flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-xl font-semibold text-blue-700">{item.title}</h4>
                    <p className="text-gray-600">
                      Grade: {item.grade} | Medium: {item.medium} | Subject: {item.subject}
                      {tab === "Papers" && item.paperCategory
                        ? ` | Category: ${item.paperCategory}`
                        : ""}
                    </p>
                  </div>
                  <a
                    href={item.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition font-medium"
                    download
                  >
                    Download PDF
                  </a>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && items.length === 0 && (
  <div className="flex flex-col items-center mt-8 p-6 bg-yellow-50 border border-yellow-300 rounded-lg max-w-md mx-auto">
    <svg
      className="w-12 h-12 mb-4 text-yellow-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 110-16 8 8 0 010 16z"
      />
    </svg>
    <p className="text-yellow-700 text-lg font-semibold text-center">
      Oops! No {tab.toLowerCase()} found for the selected filters.
    </p>
    <p className="text-yellow-600 mt-2 text-center">
      Try adjusting your filters or check back later.
    </p>
  </div>
)}

{error && (
  <div className="flex flex-col items-center mt-8 p-6 bg-red-50 border border-red-300 rounded-lg max-w-md mx-auto">
    <svg
      className="w-12 h-12 mb-4 text-red-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.364 5.636l-1.414-1.414L12 9.172 7.05 4.222 5.636 5.636 10.586 10.586 5.636 15.536l1.414 1.414L12 12.828l4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95z"
      />
    </svg>
    <p className="text-red-700 text-lg font-semibold text-center">
      Something went wrong!
    </p>
    <p className="text-red-600 mt-2 text-center">{error}</p>
  </div>
)}

        </>
      )}
    </div>
  );
};

export default ResourcesPage;