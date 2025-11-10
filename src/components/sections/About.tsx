import { useTranslation } from "../../hooks/useTranslation";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const About = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`font-black text-center mb-12 transition-all duration-700 animate-section-title-glow ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            color: "var(--light-blue)",
            fontSize: "clamp(1.675rem, 4vw, 3rem)",
          }}
        >
          {t("sectionAbout")}
        </h2>

        <div
          className={`p-8 md:p-12 rounded-2xl relative overflow-hidden transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(102, 204, 255, 0.15) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(3, 7, 18, 0.8) 100%)",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            boxShadow:
              "0 0 0 2px rgba(102, 204, 255, 0.4), 0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Animated gradient border effect */}
          <div
            className="absolute inset-0 rounded-2xl opacity-50"
            style={{
              background:
                "linear-gradient(45deg, rgba(102, 204, 255, 0.3), rgba(102, 204, 255, 0.1), rgba(102, 204, 255, 0.3))",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 3s ease infinite",
              zIndex: -1,
            }}
          />

          {/* Glow effect */}
          <div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(102, 204, 255, 0.8), transparent)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(102, 204, 255, 0.8), transparent)",
              filter: "blur(40px)",
            }}
          />
          <p
            className="text-lg md:text-xl mb-6 leading-relaxed"
            style={{ color: "var(--text-light)" }}
          >
            {t("aboutP1")}
          </p>

          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--text-light)" }}
          >
            {t("aboutP2")}
          </p>
        </div>
      </div>
    </section>
  );
};

