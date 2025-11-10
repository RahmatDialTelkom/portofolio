import { useTranslation } from "../../hooks/useTranslation";
import { getAssetPath } from "../../utils/assetPath";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p
              className="text-lg md:text-xl mb-4 font-semibold opacity-0 animate-fade-in-up"
              style={{ color: "var(--text-dark)" }}
            >
              {t("heroGreeting")}
            </p>

            {/* ⚠️ EDIT THIS: Replace "YOUR NAME" with your actual name */}
            <h1
              className="font-black opacity-0 animate-fade-in-up animate-delay-100 animate-section-title-glow"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                lineHeight: "1.1",
                color: "var(--text-light)",
                marginBottom: "0",
              }}
            >
              <span style={{ color: "var(--light-blue)" }}>RAHMAT DIAL</span>
            </h1>

            <div style={{ height: "2rem" }} />

            <h2
              className="font-black mb-8 opacity-0 animate-fade-in-up animate-delay-200 animate-section-title-glow"
              style={{
                fontSize: "clamp(1.5rem, 4.5vw, 3rem)",
                lineHeight: "1.2",
                color: "var(--text-light)",
              }}
            >
              {t("heroTitle1")}{" "}
              <span
                style={{
                  color: "var(--light-blue)",
                  textShadow: "0 0 30px rgba(102, 204, 255, 0.5)",
                }}
              >
                {t("heroTitle2")}
              </span>
            </h2>

            <h2
              className="font-black mb-32 opacity-0 animate-fade-in-up animate-delay-300 animate-section-title-glow"
              style={{
                fontSize: "clamp(1.5rem, 4.5vw, 3rem)",
                lineHeight: "1.2",
                color: "var(--light-blue)",
                textShadow: "0 0 30px rgba(102, 204, 255, 0.5)",
              }}
            >
              {t("heroTitle3")}
            </h2>

            {/* Text-only Button - Hire Me / Hubungi Saya - Button 64 Style - Large Spacious Oval/Pill Shape */}
            <a
              href="#contact"
              className="gradient-border-button relative inline-flex items-center justify-center rounded-full font-black transition-all hover:scale-105 group button-hero-cta"
              title={t("heroButton")}
            >
              {/* Inner button content with dark background */}
              <div
                className="relative flex items-center justify-center rounded-full transition-all button-hero-inner"
              >
                <span className="relative z-10 font-black uppercase tracking-wide button-hero-text">
                  {t("heroButton")}
                </span>

                {/* Animated gradient overlay on hover */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)",
                  }}
                />
              </div>
            </a>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 opacity-0 animate-zoom-in animate-delay-500">
            <div
              className="rounded-full overflow-hidden"
              style={{
                width: "300px",
                height: "300px",
                border: "5px solid var(--light-blue)",
                boxShadow: "0 0 50px rgba(102, 204, 255, 0.3)",
              }}
            >
              <img
                src={getAssetPath("images/profile.jpg")}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

