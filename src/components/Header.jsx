import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const currentLang = i18n.language?.split("-")[0];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

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
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
          <div
            className="
              relative flex items-center justify-between
              h-16 md:h-[72px]
              px-4 md:px-6
              rounded-2xl
              bg-[#3E2723]/90
              backdrop-blur-xl
              border border-white/10
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
            "
          >
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div
                  className="
                    absolute -inset-1 rounded-full
                    bg-yellow-400/30
                    blur-md
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                  "
                />

                <img
                  src="/logo.jpg"
                  alt="Genius Logo"
                  className="
                    relative
                    w-10 h-10 md:w-12 md:h-12
                    object-cover
                    rounded-full
                    border-2 border-yellow-400/80
                    group-hover:scale-105
                    group-hover:rotate-3
                    transition-all duration-300
                  "
                />
              </div>

              <div className="leading-none">
                <h1
                  className="
                    text-lg md:text-xl
                    font-extrabold
                    tracking-wide
                    text-white
                    group-hover:text-yellow-300
                    transition-colors
                  "
                >
                  Genius
                </h1>

                <p className="mt-1 text-[10px] md:text-xs text-yellow-100/80 tracking-wide">
                  {t("The House of Education")}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`
                      relative px-4 py-2.5
                      text-sm font-medium
                      rounded-xl
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-yellow-300 bg-white/10"
                          : "text-white/80 hover:text-yellow-300 hover:bg-white/5"
                      }
                    `}
                  >
                    {link.label}

                    {isActive && (
                      <span
                        className="
                          absolute
                          left-1/2 -translate-x-1/2
                          -bottom-1
                          w-5 h-0.5
                          rounded-full
                          bg-yellow-300
                          shadow-[0_0_10px_rgba(253,224,71,0.8)]
                        "
                      />
                    )}
                  </Link>
                );
              })}

              {/* Language Selector */}
              <div
                className="
                  ml-3
                  flex items-center gap-1
                  p-1
                  rounded-xl
                  bg-black/20
                  border border-white/10
                "
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`
                      px-2.5 py-1.5
                      rounded-lg
                      text-xs font-semibold
                      transition-all duration-200
                      ${
                        currentLang === lang.code
                          ? "bg-yellow-300 text-[#3E2723] shadow-sm"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }
                    `}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="
                md:hidden
                flex items-center justify-center
                w-10 h-10
                rounded-xl
                bg-white/10
                border border-white/10
                text-white
                hover:bg-yellow-300
                hover:text-[#3E2723]
                transition-all duration-300
              "
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        onClick={closeMenu}
        className={`
          fixed inset-0 z-40
          bg-black/60
          backdrop-blur-sm
          transition-all duration-300
          md:hidden
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />

      {/* Mobile Drawer */}
      <aside
        className={`
          fixed
          top-0 right-0
          h-full
          w-[82%] max-w-sm
          z-50
          md:hidden
          bg-gradient-to-b from-[#3E2723] via-[#4E342E] to-[#2D1B18]
          border-l border-white/10
          shadow-[-20px_0_60px_rgba(0,0,0,0.35)]
          transition-transform duration-300 ease-out
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Genius Logo"
              className="
                w-11 h-11
                rounded-full
                object-cover
                border-2 border-yellow-400
              "
            />

            <div>
              <h2 className="text-lg font-bold text-white">Genius</h2>
              <p className="text-xs text-yellow-100/70">
                {t("The House of Education")}
              </p>
            </div>
          </div>

          <button
            onClick={closeMenu}
            className="
              flex items-center justify-center
              w-10 h-10
              rounded-xl
              bg-white/10
              text-white
              hover:bg-red-500/20
              hover:text-red-300
              transition-colors
            "
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="px-5 py-7">
          <p className="mb-4 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300/70">
            Menu
          </p>

          <nav className="space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={`
                    group
                    flex items-center justify-between
                    px-4 py-3.5
                    rounded-xl
                    text-base font-medium
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-yellow-300 text-[#3E2723] shadow-lg"
                        : "text-white/85 hover:bg-white/10 hover:text-yellow-300"
                    }
                  `}
                >
                  <span>{link.label}</span>

                  <ChevronDown
                    className={`
                      w-4 h-4 -rotate-90
                      transition-transform
                      ${
                        isActive
                          ? "text-[#3E2723]"
                          : "text-white/40 group-hover:text-yellow-300"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Language */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="px-2 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300/70">
              {t("Language")}
            </p>

            <div className="grid grid-cols-3 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`
                    py-2.5
                    rounded-xl
                    text-sm font-semibold
                    border
                    transition-all duration-200
                    ${
                      currentLang === lang.code
                        ? "bg-yellow-300 text-[#3E2723] border-yellow-300"
                        : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Decoration */}
          <div className="mt-10">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

            <p className="mt-5 text-center text-xs text-white/40">
              {t("The House of Education")}
            </p>
          </div>
        </div>
      </aside>

      {/* Spacer so content doesn't hide behind fixed header */}
      <div className="h-20 md:h-24" />
    </>
  );
}

