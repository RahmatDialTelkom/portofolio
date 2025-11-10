import { Briefcase } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { workExperience } from "../../constants/workExperience";

export const WorkExperience = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="work-experience" className="py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`font-black text-center mb-16 transition-all duration-700 animate-section-title-glow ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            color: "var(--light-blue)",
            fontSize: "clamp(1.675rem, 4vw, 3rem)",
          }}
        >
          {t("sectionWorkExp")}
        </h2>

        <div className="space-y-6">
          {workExperience.map((work, index) => (
            <div
              key={work.id}
              className={`p-6 rounded-xl transition-all hover:scale-105 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.5)",
                border: "2px solid rgba(102, 204, 255, 0.2)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(102, 204, 255, 0.1)",
                    color: "var(--light-blue)",
                  }}
                >
                  <Briefcase size={32} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: "var(--text-light)" }}
                  >
                    {t(work.positionKey as any)}
                  </h3>

                  <p
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--light-blue)" }}
                  >
                    {t(work.companyKey as any)}
                  </p>

                  <p
                    className="text-sm mb-3"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {t(work.durationKey as any)}
                  </p>

                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{ color: "var(--text-light)" }}
                  >
                    {t(work.descriptionKey as any)}
                  </p>

                  {/* Technologies */}
                  {work.technologies && work.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            backgroundColor: "rgba(102, 204, 255, 0.1)",
                            color: "var(--light-blue)",
                            border: "1px solid rgba(102, 204, 255, 0.3)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

