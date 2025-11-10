import { ExternalLink } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { projects } from "../../constants/projects";
import { getAssetPath } from "../../utils/assetPath";

export const Projects = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <h2
          className={`font-black text-center mb-16 transition-all duration-700 animate-section-title-glow ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            color: "var(--light-blue)",
            fontSize: "clamp(1.675rem, 4vw, 3rem)",
          }}
        >
          {t("sectionProjects")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`rounded-xl overflow-hidden transition-all hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.5)",
                border: "2px solid rgba(102, 204, 255, 0.2)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={getAssetPath(project.image)}
                  alt={t(project.titleKey as any)}
                  className="w-full h-48 object-cover transition-transform hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--light-blue)" }}
                >
                  {t(project.titleKey as any)}
                </h3>

                <p
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: "var(--text-dark)" }}
                >
                  {t(project.descKey as any)}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded text-xs font-semibold"
                      style={{
                        backgroundColor: "rgba(102, 204, 255, 0.2)",
                        color: "var(--light-blue)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold transition-colors hover:opacity-80"
                  style={{ color: "var(--light-blue)" }}
                >
                  {t("projectLink")}
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

