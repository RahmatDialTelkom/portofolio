// This hook is now a wrapper around useLanguage from LanguageContext
// Kept for backward compatibility
import { useLanguage } from "../contexts/LanguageContext";

export const useTranslation = useLanguage;

