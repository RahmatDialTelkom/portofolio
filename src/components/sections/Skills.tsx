import { useTranslation } from "../../hooks/useTranslation";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { technicalSkills, softSkills } from "../../constants/skills";

export const Skills = () => {
  const { language, t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`font-black text-center mb-16 transition-all duration-700 animate-section-title-glow ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            color: "var(--light-blue)",
            fontSize: "clamp(1.675rem, 4vw, 3rem)",
          }}
        >
          {t("sectionSkills")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ color: "var(--text-light)" }}
            >
              {t("skillsTechTitle")}
            </h3>

            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{
                    backgroundColor: "rgba(102, 204, 255, 0.1)",
                    border: "2px solid var(--light-blue)",
                    color: "var(--light-blue)",
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {language === "id" ? skill.nameId : skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ color: "var(--text-light)" }}
            >
              {t("skillsSoftTitle")}
            </h3>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{
                    backgroundColor: "rgba(102, 204, 255, 0.1)",
                    border: "2px solid var(--light-blue)",
                    color: "var(--light-blue)",
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {language === "id" ? skill.nameId : skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

