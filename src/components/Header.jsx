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
    <header className="bg-[#5E412F] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo.jpg"
            alt="Genius Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
          />
          <div className="leading-tight">
            <h1 className="text-lg md:text-2xl font-bold">Genius</h1>
            <p className="text-xs md:text-sm font-light opacity-80">
              {t("The House of Education")}
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-yellow-300 ${
                location.pathname === link.to
                  ? "text-yellow-300 font-semibold"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="ml-6 flex gap-2 items-center border px-2 py-1 rounded bg-[#6D4C41]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`text-sm px-1 ${
                  currentLang === lang.code
                    ? "text-yellow-300 font-semibold"
                    : "text-white hover:text-yellow-200"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white z-50 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#5E412F] text-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 pt-20 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={`block text-lg hover:text-yellow-300 ${
                location.pathname === link.to
                  ? "text-yellow-300 font-semibold"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Language Switcher Inside Drawer */}
          <div className="mt-4 border-t border-white/30 pt-4">
            <p className="text-sm mb-2 text-yellow-200 font-semibold">
              {t("Language")}
            </p>
            <div className="flex gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`text-sm ${
                    currentLang === lang.code
                      ? "text-yellow-300 font-bold"
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
