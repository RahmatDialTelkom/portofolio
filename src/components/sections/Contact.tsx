import { Mail, MessageCircle, Github } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const Contact = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  // ⚠️ EDIT THIS: Update your contact information below
  const contactMethods = [
    {
      icon: Mail,
      labelKey: "contactEmail",
      value: "rahmatdialcontact@gmail.com",
      // link: "mailto:rahmatdialcontact@gmail.com",
      color: "#66CCFF",
    },
    {
      icon: MessageCircle,
      labelKey: "contactWA",
      value: "+62 8515- 6909- 114",              // ← Replace with your WhatsApp number
      link: "https://wa.me/6285156909114",     // ← Replace with your WhatsApp number (no spaces, no +)
      color: "#25D366",
    },
    {
      icon: Github,
      labelKey: "contactGithub",
      value: "github.com/rahmatdial-prjct",        // ← Replace with your GitHub username
      link: "https://github.com/rahmatdial-prjct", // ← Replace with your GitHub username
      color: "#FFFFFF",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <h2
          className={`font-black text-center mb-8 transition-all duration-700 animate-section-title-glow ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            color: "var(--light-blue)",
            fontSize: "clamp(1.675rem, 4vw, 3rem)",
          }}
        >
          {t("sectionContact")}
        </h2>

        <p
          className={`text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ color: "var(--text-dark)" }}
        >
          {t("contactSlogan")}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-xl text-center transition-all hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.5)",
                  border: `2px solid ${method.color}40`,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  transitionDelay: `${(index + 2) * 150}ms`,
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{
                    backgroundColor: `${method.color}20`,
                    color: method.color,
                  }}
                >
                  <Icon size={32} />
                </div>

                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-light)" }}
                >
                  {t(method.labelKey as any)}
                </h3>

                <p
                  className="text-sm"
                  style={{ color: "var(--text-dark)" }}
                >
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

