/**
 * WORK EXPERIENCE CONFIGURATION
 *
 * This file contains all your work experience displayed on the website.
 *
 * HOW TO EDIT:
 * 1. To add a new work experience: Copy an existing experience object and modify the values
 * 2. To remove a work experience: Delete the entire experience object
 * 3. To reorder experiences: Cut and paste the experience objects in your preferred order
 *
 * FIELDS EXPLANATION:
 * - id: Unique number for each work experience (1, 2, 3, etc.)
 * - companyKey: Reference to translation key in translations.ts (e.g., "work1Company")
 * - positionKey: Reference to translation key in translations.ts (e.g., "work1Position")
 * - durationKey: Reference to translation key in translations.ts (e.g., "work1Duration")
 * - descriptionKey: Reference to translation key in translations.ts (e.g., "work1Description")
 * - technologies: Array of technologies/skills used (e.g., ["React", "Node.js", "MongoDB"])
 *
 * NOTE: When adding a new work experience, also add the company, position, duration, 
 * and description to translations.ts
 *
 * EXAMPLE:
 * {
 *   id: 3,
 *   companyKey: "work3Company",
 *   positionKey: "work3Position",
 *   durationKey: "work3Duration",
 *   descriptionKey: "work3Description",
 *   technologies: ["Python", "Django", "PostgreSQL"],
 * }
 */

export const workExperience = [
  {
    id: 1,
    companyKey: "work1Company",
    positionKey: "work1Position",
    durationKey: "work1Duration",
    descriptionKey: "work1Description",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "GitHub Copilot", "Augment"],
  },
  {
    id: 2,
    companyKey: "work2Company",
    positionKey: "work2Position",
    durationKey: "work2Duration",
    descriptionKey: "work2Description",
    technologies: ["C++", "PHP", "Teaching", "Mentoring"],
  },
  {
    id: 3,
    companyKey: "work3Company",
    positionKey: "work3Position",
    durationKey: "work3Duration",
    descriptionKey: "work3Description",
    technologies: ["SQL", "MySQL", "HeidiSQL", "Database Design", "ERD"],
  },
  {
    id: 4,
    companyKey: "work4Company",
    positionKey: "work4Position",
    durationKey: "work4Duration",
    descriptionKey: "work4Description",
    technologies: ["Laravel", "PHP", "RESTful API", "Eloquent ORM", "XAMPP"],
  },
];

