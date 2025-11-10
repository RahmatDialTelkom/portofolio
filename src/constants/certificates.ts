/**
 * CERTIFICATES CONFIGURATION
 *
 * This file contains all your certificates and awards displayed on the website.
 *
 * HOW TO EDIT:
 * 1. To add a new certificate: Copy an existing certificate object and modify the values
 * 2. To remove a certificate: Delete the entire certificate object
 * 3. To reorder certificates: Cut and paste the certificate objects in your preferred order
 *
 * FIELDS EXPLANATION:
 * - id: Unique number for each certificate (1, 2, 3, etc.)
 * - titleKey: Reference to translation key in translations.ts (e.g., "cert1Title")
 * - issuerKey: Reference to translation key in translations.ts (e.g., "cert1Issuer")
 * - link: URL to certificate verification page (or "#" if no link)
 *
 * NOTE: When adding a new certificate, also add the title and issuer to translations.ts
 *
 * EXAMPLE:
 * {
 *   id: 3,
 *   titleKey: "cert3Title",
 *   issuerKey: "cert3Issuer",
 *   link: "https://verify.certificate.com/abc123",
 * }
 */

export const certificates = [
  {
    id: 1,
    titleKey: "cert1Title",
    issuerKey: "cert1Issuer",
    link: "https://drive.google.com/drive/folders/1TmNekwUw0YpHPmlFVmX9_4Dzz2d2jnBx?usp=drive_link",
  },
  {
    id: 2,
    titleKey: "cert2Title",
    issuerKey: "cert2Issuer",
    link: "https://drive.google.com/drive/folders/19QOKBdDEuI2n-P6eGzVKmq4wjR4LcGYQ?usp=sharing",
  },
  {
    id: 3,
    titleKey: "cert3Title",
    issuerKey: "cert3Issuer",
    link: "https://drive.google.com/drive/folders/10Tl_Opxp1Y977zUIbOShKWVOiqd02KZx?usp=sharing",
  },
  {
    id: 4,
    titleKey: "cert4Title",
    issuerKey: "cert4Issuer",
    link: "https://drive.google.com/drive/folders/10Tl_Opxp1Y977zUIbOShKWVOiqd02KZx?usp=sharing",
  },
  {
    id: 5,
    titleKey: "cert5Title",
    issuerKey: "cert5Issuer",
    link: "https://drive.google.com/drive/folders/10Tl_Opxp1Y977zUIbOShKWVOiqd02KZx?usp=sharing",
  },
  {
    id: 6,
    titleKey: "cert6Title",
    issuerKey: "cert6Issuer",
    link: "https://drive.google.com/drive/folders/1_luBz324qvoxhb9nRHzGAJEdW6QfPKNC?usp=sharing",
  },
  {
    id: 7,
    titleKey: "cert7Title",
    issuerKey: "cert7Issuer",
    link: "https://drive.google.com/drive/folders/1L7vYZVTZEsBbT5ENeAkjvZ-VvQY5MzSd?usp=sharing",
  },
];

