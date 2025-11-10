/**
 * TRANSLATIONS CONFIGURATION
 *
 * This file contains all text content for the portfolio website in both English and Indonesian.
 *
 * HOW TO EDIT:
 * 1. Find the key you want to change (e.g., "heroGreeting")
 * 2. Update the text in both "en" (English) and "id" (Indonesian) sections
 * 3. Keep the key names the same - only change the text values
 *
 * STRUCTURE:
 * - Navigation: Header menu items
 * - Hero Section: Main landing page text
 * - About Section: About me content
 * - Skills Section: Skills section titles
 * - Projects Section: Project titles and descriptions
 * - Certificates Section: Certificate titles and issuers
 * - Contact Section: Contact page text
 * - Footer: Footer copyright text
 */

export const translations = {
  en: {
    // ========================================
    // NAVIGATION (Header Menu)
    // ========================================
    navAbout: "ABOUT",
    navSkills: "SKILLS",
    navProjects: "PROJECTS",
    navWorkExp: "WORK EXPERIENCE",
    navCerts: "CERTIFICATES",
    navContact: "CONTACT",

    // ========================================
    // HERO SECTION (Main Landing Page)
    // ========================================
    heroGreeting: "HELLO, I AM",           // Greeting text above your name
    heroTitle1: " ",                        // Article before job title
    heroTitle2: "IT ENTHUSIAST &",       // Your job title/role
    heroTitle3: "DIGITAL CREATOR", // Tagline/description
    heroButton: "HIRE ME",                  // Call-to-action button text

    // ========================================
    // ABOUT SECTION
    // ========================================
    sectionAbout: "ABOUT ME",               // Section title
    aboutP1:                                // First paragraph of about section
      "I’m an IT Enthusiast & Digital Creator with a Bachelor’s degree in Information Systems from Telkom University, passionate about web development, networking, and tech-based digital content creation.",
    aboutP2:                                // Second paragraph of about section
      "Experienced in developing websites and information systems using HTML, CSS, JavaScript, PHP, and Laravel, while leveraging AI tools to enhance productivity and code quality. I’m also involved in graphic design, video editing, and copywriting, combining technical expertise and creativity to deliver modern, functional, and engaging digital solutions.",

    // ========================================
    // SKILLS SECTION
    // ========================================
    sectionSkills: "MY SKILLS",             // Section title
    skillsTechTitle: "TECHNICAL SKILLS",    // Technical skills subsection title
    skillsSoftTitle: "SOFT SKILLS",         // Soft skills subsection title

    // ========================================
    // PROJECTS SECTION
    // ========================================
    sectionProjects: "MY PROJECTS",   // Section title
    // Project 1 - Snake Game
    project1Title: "Classic Snake Game",
    project1Desc:
      "A classic snake game built with vanilla JavaScript and HTML5 Canvas. Features smooth animations, score tracking, and responsive controls. Play the nostalgic game right in your browser!",
    // Project 2 - Space Invaders
    project2Title: "Space Invaders Game",
    project2Desc:
      "A retro-style space shooter game inspired by the classic arcade game. Defend Earth from alien invaders with smooth gameplay, collision detection, and increasing difficulty levels.",
    // Project 3 - Flappy Bird
    project3Title: "Flappy Bird Game",
    project3Desc:
      "A fun and addictive Flappy Bird clone built with JavaScript. Navigate through pipes, beat your high score, and enjoy the challenging gameplay with pixel-perfect collision detection.",
    // Project 4 - Tetris
    project4Title: "Tetris Game",
    project4Desc:
      "The iconic block-stacking puzzle game recreated with JavaScript and Canvas. Features classic Tetris mechanics, line clearing, score system, and progressively faster gameplay.",
    projectLink: "VIEW PROJECT",           // Button text for project links

    // ========================================
    // WORK EXPERIENCE SECTION
    // ========================================
    sectionWorkExp: "WORK EXPERIENCE",      // Section title
    // Work Experience 1 - Web Developer Intern
    work1Company: "Metropolitan Golden Management",
    work1Position: "Web Developer Intern",
    work1Duration: "March 2024 - September 2024",
    work1Description:
      "Designed and developed internal company website using HTML, CSS, JavaScript, and PHP with focus on responsive and user-friendly interface. Coordinated closely with IT team to ensure functional requirements were well accommodated, and implemented revisions based on stakeholder feedback accurately. Utilized AI coding assistants such as GitHub Copilot and Augment to accelerate code writing, automatic function suggestions, and maintain coding quality standards.",
    // Work Experience 2 - Lab Assistant Algorithm & Programming
    work2Company: "Telkom University Jakarta",
    work2Position: "Lab Assistant - Algorithm & Programming",
    work2Duration: "2023",
    work2Description:
      "Assisted students in understanding programming logic fundamentals, algorithm implementation using C++ language, control structures, functions, arrays, and pointers. Provided guidance and mentoring to help students develop strong programming skills.",
    // Work Experience 3 - Lab Assistant Database Systems
    work3Company: "Telkom University Jakarta",
    work3Position: "Lab Assistant - Database Systems",
    work3Duration: "2024",
    work3Description:
      "Taught relational database schema design, ERD creation and table relationships, SQL usage for data manipulation (DDL, DML), query optimization, and database management using HeidiSQL and MySQL. Helped students understand database concepts and best practices.",
    // Work Experience 4 - Lab Assistant Web Application Development
    work4Company: "Telkom University Jakarta",
    work4Position: "Lab Assistant - Web Application Development",
    work4Duration: "2025",
    work4Description:
      "Guided students in web application development using Laravel framework, creating and managing RESTful APIs, authentication and user management, database connection with Eloquent ORM, and local deployment using XAMPP and Laravel Artisan.",

    // ========================================
    // CERTIFICATES SECTION
    // ========================================
    sectionCerts: "CERTIFICATES & AWARDS",  // Section title
    // Certificate 1 - BNSP
    cert1Title: "BNSP - Computer Network Implementation Level 3",
    cert1Issuer: "Badan Nasional Sertifikasi Profesi - Issued February 2025",
    // Certificate 2 - Alibaba Cloud
    cert2Title: "Big Data Certification",
    cert2Issuer: "Alibaba Cloud Academy - Issued December 2024",
    // Certificate 3 - Lab Assistant Web Dev
    cert3Title: "Lab Assistant - Web Application Development",
    cert3Issuer: "Telkom University - 2025",
    // Certificate 4 - Lab Assistant Database
    cert4Title: "Lab Assistant - Database Systems",
    cert4Issuer: "Telkom University - 2024",
    // Certificate 5 - Lab Assistant Programming
    cert5Title: "Lab Assistant - Algorithm & Programming",
    cert5Issuer: "Telkom University - 2023",
    // Certificate 6 - Course-Net Networking
    cert6Title: "Information and Communication Technology - Cisco",
    cert6Issuer: "Course-Net - Issued November 2019",
    // Certificate 7 - Miscellaneous Certificates
    cert7Title: "Miscellaneous Certificates",
    cert7Issuer: "Various Issuers",
    certLink: "VERIFY CREDENTIAL",          // Button text for certificate links

    // ========================================
    // CONTACT SECTION
    // ========================================
    sectionContact: "LET'S CONNECT!",       // Section title
    contactSlogan:                          // Subtitle/description
      "I'm always excited to discuss new opportunities, collaborate on innovative projects, or just chat about technology. Feel free to reach out!",
    contactEmail: "Email",                  // Email card label
    contactWA: "WhatsApp",                  // WhatsApp card label
    contactGithub: "GitHub",                // GitHub card label

    // ========================================
    // FOOTER
    // ========================================
    footerCopyright: "All rights reserved.",
  },
  id: {
    // ========================================
    // INDONESIAN TRANSLATIONS
    // Same structure as English, just translated
    // ========================================

    // Navigation
    navAbout: "TENTANG SAYA",
    navSkills: "KEAHLIAN",
    navProjects: "PROYEK",
    navWorkExp: "PENGALAMAN KERJA",
    navCerts: "SERTIFIKAT",
    navContact: "KONTAK",

    // Hero Section
    heroGreeting: "HALO, SAYA ADALAH",
    heroTitle1: " ",
    heroTitle2: "IT ENTHUSIAST &",
    heroTitle3: "DIGITAL CREATOR ",
    heroButton: "HUBUNGI SAYA",

    // About Section
    sectionAbout: "TENTANG SAYA",
    aboutP1:
      "Saya adalah seorang IT Enthusiast & Digital Creator lulusan Sistem Informasi Telkom University, dengan minat pada pengembangan web, jaringan komputer, serta produksi konten digital berbasis teknologi.",
    aboutP2:
      "Berpengalaman dalam pengembangan website dan sistem informasi menggunakan HTML, CSS, JavaScript, PHP, dan Laravel, serta memanfaatkan AI tools untuk mempercepat dan meningkatkan kualitas proses kerja. Selain itu, saya aktif di bidang desain grafis, video editing, dan copywriting, yang memperkuat kemampuan saya dalam menggabungkan aspek teknis dan kreatif untuk menciptakan solusi digital yang inovatif, fungsional, dan menarik.",

    // Skills Section
    sectionSkills: "KEAHLIAN SAYA",
    skillsTechTitle: "KEAHLIAN TEKNIS",
    skillsSoftTitle: "KEAHLIAN NON-TEKNIS",

    // Projects Section
    sectionProjects: "PROYEK SAYA",
    // Project 1 - Snake Game
    project1Title: "Game Snake Klasik",
    project1Desc:
      "Game snake klasik yang dibangun dengan vanilla JavaScript dan HTML5 Canvas. Dilengkapi dengan animasi yang halus, pelacakan skor, dan kontrol responsif. Mainkan game nostalgia langsung di browser Anda!",
    // Project 2 - Space Invaders
    project2Title: "Game Space Invaders",
    project2Desc:
      "Game tembak-menembak luar angkasa bergaya retro yang terinspirasi dari game arcade klasik. Pertahankan Bumi dari invasi alien dengan gameplay yang halus, deteksi tabrakan, dan tingkat kesulitan yang meningkat.",
    // Project 3 - Flappy Bird
    project3Title: "Game Flappy Bird",
    project3Desc:
      "Klon Flappy Bird yang menyenangkan dan adiktif dibangun dengan JavaScript. Navigasi melalui pipa, kalahkan skor tertinggi Anda, dan nikmati gameplay yang menantang dengan deteksi tabrakan yang presisi.",
    // Project 4 - Tetris
    project4Title: "Game Tetris",
    project4Desc:
      "Game puzzle menyusun balok ikonik yang dibuat ulang dengan JavaScript dan Canvas. Dilengkapi mekanik Tetris klasik, penghapusan baris, sistem skor, dan gameplay yang semakin cepat.",
    projectLink: "LIHAT PROYEK",

    // Work Experience Section
    sectionWorkExp: "PENGALAMAN KERJA",
    // Work Experience 1 - Web Developer Intern
    work1Company: "Metropolitan Golden Management",
    work1Position: "Web Developer Intern",
    work1Duration: "Maret 2024 - September 2024",
    work1Description:
      "Merancang dan mengembangkan situs web internal perusahaan menggunakan HTML, CSS, JavaScript, dan PHP dengan fokus pada tampilan responsif dan user-friendly. Berkoordinasi erat dengan tim IT untuk memastikan kebutuhan fungsional terakomodasi dengan baik, serta menerapkan revisi berdasarkan masukan stakeholder secara akurat. Memanfaatkan AI coding assistants seperti GitHub Copilot dan Augment untuk mempercepat penulisan kode, saran fungsi otomatis, dan menjaga standar kualitas pengkodean.",
    // Work Experience 2 - Lab Assistant Algorithm & Programming
    work2Company: "Telkom University Jakarta",
    work2Position: "Asisten Lab - Algoritma & Pemrograman",
    work2Duration: "2023",
    work2Description:
      "Membantu mahasiswa memahami dasar logika pemrograman, implementasi algoritma menggunakan bahasa C++, struktur kendali, fungsi, array, dan pointer. Memberikan bimbingan dan mentoring untuk membantu mahasiswa mengembangkan kemampuan pemrograman yang kuat.",
    // Work Experience 3 - Lab Assistant Database Systems
    work3Company: "Telkom University Jakarta",
    work3Position: "Asisten Lab - Sistem Basis Data",
    work3Duration: "2024",
    work3Description:
      "Mengajarkan desain skema basis data relasional, pembuatan ERD dan relasi antar tabel, penggunaan SQL untuk manipulasi data (DDL, DML), optimasi query, serta pengelolaan database dengan HeidiSQL dan MySQL. Membantu mahasiswa memahami konsep database dan best practices.",
    // Work Experience 4 - Lab Assistant Web Application Development
    work4Company: "Telkom University Jakarta",
    work4Position: "Asisten Lab - Pengembangan Aplikasi Website",
    work4Duration: "2025",
    work4Description:
      "Membimbing mahasiswa dalam pengembangan aplikasi web menggunakan framework Laravel, pembuatan dan pengelolaan RESTful API, autentikasi dan manajemen user, koneksi database dengan Eloquent ORM, serta deployment lokal menggunakan XAMPP dan Laravel Artisan.",

    // Certificates Section
    sectionCerts: "SERTIFIKAT & PENGHARGAAN",
    // Certificate 1 - BNSP
    cert1Title: "BNSP - Penerapan Jaringan Komputer Tingkat 3",
    cert1Issuer: "Badan Nasional Sertifikasi Profesi - Dikeluarkan Februari 2025",
    // Certificate 2 - Alibaba Cloud
    cert2Title: "Sertifikasi Big Data",
    cert2Issuer: "Alibaba Cloud Academy - Dikeluarkan Desember 2024",
    // Certificate 3 - Lab Assistant Web Dev
    cert3Title: "Asisten Lab - Pengembangan Aplikasi Website",
    cert3Issuer: "Universitas Telkom - 2025",
    // Certificate 4 - Lab Assistant Database
    cert4Title: "Asisten Lab - Sistem Basis Data",
    cert4Issuer: "Universitas Telkom - 2024",
    // Certificate 5 - Lab Assistant Programming
    cert5Title: "Asisten Lab - Algoritma & Pemrograman",
    cert5Issuer: "Universitas Telkom - 2023",
    // Certificate 6 - Course-Net Networking
    cert6Title: "Teknologi Informasi dan Komunikasi - Cisco",
    cert6Issuer: "Course-Net - Dikeluarkan November 2019",
    // Certificate 7 - Miscellaneous Certificates
    cert7Title: "Sertifikat Lainnya",
    cert7Issuer: "Berbagai Penerbit",
    certLink: "VERIFIKASI KREDENSIAL",

    // Contact Section
    sectionContact: "MARI BERHUBUNGAN!",
    contactSlogan:
      "Saya selalu bersemangat untuk mendiskusikan peluang baru, berkolaborasi dalam proyek inovatif, atau sekadar berbincang tentang teknologi. Jangan ragu untuk menghubungi saya!",
    contactEmail: "Email",
    contactWA: "WhatsApp",
    contactGithub: "GitHub",

    // Footer
    footerCopyright:
      "Semua hak cipta dilindungi.",
  },
};

export type Language = "en" | "id";
export type TranslationKey = keyof typeof translations.en;

