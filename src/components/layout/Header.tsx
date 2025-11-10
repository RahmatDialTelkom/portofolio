import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

export const Header = () => {
  const { language, toggleLanguage, t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: "navAbout", href: "#about" },
    { key: "navSkills", href: "#skills" },
    { key: "navProjects", href: "#projects" },
    { key: "navWorkExp", href: "#work-experience" },
    { key: "navCerts", href: "#certificates" },
    { key: "navContact", href: "#contact" },
  ] as const;

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-black"
            style={{ color: "var(--light-blue)" }}
          >
            Nice To Meet You!
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="font-semibold transition-colors hover:opacity-80"
                style={{ color: "var(--text-light)" }}
              >
                {t(item.key as any)}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-lg font-bold transition-all hover:opacity-80"
              style={{
                backgroundColor: "var(--light-blue)",
                color: "#000",
              }}
            >
              {language === "id" ? "EN" : "ID"}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: "var(--light-blue)" }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            style={{
              borderTop: "1px solid rgba(102, 204, 255, 0.2)",
              paddingTop: "1rem",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="font-semibold transition-colors hover:opacity-80"
                style={{ color: "var(--text-light)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.key as any)}
              </a>
            ))}

            {/* Language Toggle Mobile */}
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 rounded-lg font-bold transition-all hover:opacity-80 w-full"
              style={{
                backgroundColor: "var(--light-blue)",
                color: "#000",
              }}
            >
              {language === "id" ? "EN" : "ID"}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

