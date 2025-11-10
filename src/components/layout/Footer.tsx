import { useTranslation } from "../../hooks/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className="py-6 text-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "var(--text-dark)",
      }}
    >
      <p className="text-sm">
        &copy; 2025 <span style={{ color: "var(--light-blue)" }}>RAHMAT DIAL</span> |{" "}
        {t("footerCopyright")}
      </p>
    </footer>
  );
};

