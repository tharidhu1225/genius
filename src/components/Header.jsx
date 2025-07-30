import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const currentLang = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  const navLinks = [
    { to: "/", label: t("home") },
    { to: "/about", label: t("about") },
    { to: "/contact", label: t("contact") },
    { to: "/gallery", label: t("Gallery") },
  ];

  const languages = [
    { code: "en", label: "EN" },
    { code: "si", label: "සිං" },
    { code: "ta", label: "தமிழ்" },
  ];

  return (
    <header className="bg-gradient-to-r from-[#4E342E] to-[#6D4C41] text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 group">
          <img
            src="/logo.jpg"
            alt="Genius Logo"
            className="w-12 h-12 object-cover rounded-full border-2 border-yellow-400 group-hover:rotate-6 transition-transform"
          />
          <div className="leading-tight">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wide group-hover:text-yellow-300 transition-colors">
              Genius
            </h1>
            <p className="text-xs md:text-sm font-light text-yellow-100">
              {t("The House of Education")}
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-300 hover:text-yellow-300 ${
                location.pathname === link.to ? "text-yellow-300 font-semibold" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="ml-6 flex gap-2 items-center border px-2 py-1 rounded-full bg-[#4E342E] shadow-inner">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`text-sm px-2 py-0.5 rounded-full transition-all ${
                  currentLang === lang.code
                    ? "bg-yellow-300 text-[#4E342E] font-bold"
                    : "text-white hover:text-yellow-200"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white z-50 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && <div onClick={closeMenu} className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#4E342E] text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-24 space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={`block text-lg font-medium hover:text-yellow-300 ${
                location.pathname === link.to ? "text-yellow-300 font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-white/30 pt-6">
            <p className="text-sm text-yellow-200 font-semibold mb-3">
              {t("Language")}
            </p>
            <div className="flex gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`text-sm font-medium ${
                    currentLang === lang.code
                      ? "text-yellow-300 underline"
                      : "text-white hover:text-yellow-200"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
