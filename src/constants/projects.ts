/**
 * PROJECTS CONFIGURATION
 *
 * This file contains all your portfolio projects displayed on the website.
 *
 * HOW TO EDIT:
 * 1. To add a new project: Copy an existing project object and modify the values
 * 2. To remove a project: Delete the entire project object
 * 3. To reorder projects: Cut and paste the project objects in your preferred order
 *
 * FIELDS EXPLANATION:
 * - id: Unique number for each project (1, 2, 3, etc.)
 * - image: URL to project screenshot/image (use your own image URL or upload to image hosting)
 * - titleKey: Reference to translation key in translations.ts (e.g., "project1Title")
 * - descKey: Reference to translation key in translations.ts (e.g., "project1Desc")
 * - technologies: Array of tech stack used (displayed as tags)
 * - link: URL to project (GitHub, live demo, etc.)
 *
 * NOTE: When adding a new project, also add the title and description to translations.ts
 *
 * EXAMPLE:
 * {
 *   id: 4,
 *   image: "https://your-image-url.com/project.jpg",
 *   titleKey: "project4Title",
 *   descKey: "project4Desc",
 *   technologies: ["React", "Node.js", "PostgreSQL"],
 *   link: "https://github.com/yourusername/project",
 * }
 */

export const projects = [
  {
    id: 1,
    image: "images/snake-game.png",
    titleKey: "project1Title",
    descKey: "project1Desc",
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API"],
    link: "https://rahmatdial-prjct.github.io/snakegamesrahmat/",
  },
  {
    id: 2,
    image: "images/space-invaders.png",
    titleKey: "project2Title",
    descKey: "project2Desc",
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API"],
    link: "https://rahmatdial-prjct.github.io/spaceinvadersrahmat/",
  },
  {
    id: 3,
    image: "images/flappy-bird.png",
    titleKey: "project3Title",
    descKey: "project3Desc",
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API"],
    link: "https://rahmatdial-prjct.github.io/flappybirdrahmat/",
  },
  {
    id: 4,
    image: "images/tetris-rahmat.png",
    titleKey: "project4Title",
    descKey: "project4Desc",
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API"],
    link: "https://rahmatdial-prjct.github.io/tetrisrahmat/",
  },
];

