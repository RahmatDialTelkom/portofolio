<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-key="pageTitle">Portofolio Saya - [Nama Anda]</title>
    <!-- Memuat Tailwind CSS CDN --><script src="https://cdn.tailwindcss.com"></script>
    <!-- Memuat Lucide Icons untuk ikon yang indah --><script src="https://unpkg.com/lucide@latest"></script>
    <!-- Konfigurasi Font dan Tema Tailwind --><style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Inter:wght@400;600;700&display=swap');
        
        :root {
            --dark-blue: #0A192F; /* Darker blue inspired */
            --light-blue: #66CCFF; /* Lighter blue for accents */
            --text-light: #E0E0E0;
            --text-dark: #A0A0A0;
            --bg-gradient-start: #0F172A; /* Slate 900 */
            --bg-gradient-end: #030712; /* Black */
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(to bottom, var(--bg-gradient-start), var(--bg-gradient-end));
            color: var(--text-light);
        }

        h1, h2, h3, h4 {
            font-family: 'Montserrat', sans-serif;
        }
        
        /* Custom scrollbar for aesthetic */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #1e293b; /* Darker track */
        }
        ::-webkit-scrollbar-thumb {
            background: #4A5568; /* Greyish thumb */
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #66CCFF; /* Light blue on hover */
        }
    </style>
</head>
<body class="min-h-screen">

    <!-- ======================= 1. Header dan Navigasi ======================= --><header class="sticky top-0 z-50 bg-black/80 backdrop-blur-sm shadow-xl border-b border-blue-900/50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <a href="#hero" class="text-3xl font-extrabold text-blue-400 hover:text-blue-300 transition duration-300 tracking-wider">
                [NAMA ANDA]
            </a>
            <div class="flex items-center space-x-4">
                
                <!-- Tombol Translate -->
                <button id="translate-button" class="flex items-center p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 transition duration-300">
                    <i data-lucide="languages" class="w-5 h-5 text-blue-400 mr-2"></i>
                    <span id="lang-text" class="text-sm font-semibold text-white">EN/ID</span>
                </button>

                <nav class="hidden md:flex space-x-8 text-lg font-bold">
                    <a href="#about" class="nav-link" data-key="navAbout">ABOUT</a>
                    <a href="#skills" class="nav-link" data-key="navSkills">SKILLS</a>
                    <a href="#projects" class="nav-link" data-key="navProjects">PROJECTS</a>
                    <a href="#certs" class="nav-link" data-key="navCerts">CERTIFICATES</a>
                    <a href="#contact" class="nav-link" data-key="navContact">CONTACT</a>
                </nav>
                <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg hover:bg-gray-800 transition duration-300">
                    <i data-lucide="menu" class="w-7 h-7 text-blue-400"></i>
                </button>
            </div>
        </div>

        <!-- Menu Mobile Overlay --><div id="mobile-menu" class="hidden md:hidden bg-black/95 shadow-2xl transition-all duration-300 ease-in-out">
            <div class="flex flex-col space-y-3 p-4 text-xl font-medium">
                <a href="#about" class="mobile-nav-link" data-key="navAbout">ABOUT</a>
                <a href="#skills" class="mobile-nav-link" data-key="navSkills">SKILLS</a>
                <a href="#projects" class="mobile-nav-link" data-key="navProjects">PROJECTS</a>
                <a href="#certs" class="mobile-nav-link" data-key="navCerts">CERTIFICATES</a>
                <a href="#contact" class="mobile-nav-link" data-key="navContact">CONTACT</a>
            </div>
        </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- ======================= 2. Hero Section (Nama dan Deskripsi Awal) ======================= --><section id="hero" class="pt-24 pb-16 md:pt-40 md:pb-32 flex flex-col md:flex-row items-center gap-16 relative">
            <div class="md:w-3/5 text-center md:text-left z-10">
                <p class="text-2xl text-blue-400 mb-3 uppercase tracking-wide" data-key="heroGreeting">Hello, I Am</p>
                <h1 class="text-6xl md:text-8xl font-black leading-tight text-white mb-6 uppercase tracking-wider">
                    [NAMA ANDA]
                </h1>
                <h2 class="text-3xl md:text-4xl text-gray-300 font-extrabold mb-8">
                    <span data-key="heroTitle1">A</span> <span class="text-blue-400" data-key="heroTitle2">Software Developer</span> <span data-key="heroTitle3">Passionate About Innovation.</span>
                </h2>
                <a href="#contact" class="inline-flex items-center bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 text-lg uppercase" data-key="heroButton">
                    Hire Me <i data-lucide="arrow-right" class="w-6 h-6 ml-3"></i>
                </a>
            </div>
            <div class="md:w-2/5 flex justify-center z-10">
                <!-- Placeholder Foto Profil dengan Style Lebih Bold --><div class="w-72 h-72 md:w-96 md:h-96 bg-gray-900 rounded-full border-4 border-blue-500 overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src="https://placehold.co/400x400/0F172A/66CCFF?text=YOUR+PHOTO" alt="Foto Profil" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500">
                </div>
            </div>
            <!-- Background text overlay (inspired by Canva design) --><div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <span class="text-[12rem] md:text-[20rem] font-black text-gray-800 uppercase select-none leading-none">PORTFOLIO</span>
            </div>
        </section>

        <!-- Garis Pemisah dengan Glow --><div class="w-full h-px bg-gradient-to-r from-transparent via-blue-700 to-transparent my-20"></div>

        <!-- ======================= 3. Deskripsi/Tentang Saya ======================= --><section id="about" class="py-16 relative">
            <h3 class="section-title" data-key="sectionAbout">ABOUT ME</h3>
            <div class="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl shadow-2xl border border-blue-900/50 relative overflow-hidden">
                <p class="text-xl text-gray-300 leading-relaxed mb-6" data-key="aboutP1">
                    Saya seorang pengembang perangkat lunak yang berdedikasi dengan pengalaman [jumlah] tahun,
                    mengkhususkan diri dalam membangun aplikasi web yang kuat dan intuitif.
                    Saya bersemangat tentang desain yang berpusat pada pengguna dan selalu mencari tantangan baru
                    untuk memperluas keahlian saya.
                </p>
                <p class="text-xl text-gray-300 leading-relaxed" data-key="aboutP2">
                    Perjalanan saya dalam dunia teknologi telah memupuk kemampuan untuk memecahkan masalah
                    yang kompleks dengan solusi yang elegan dan efisien. Saya juga merupakan individu yang
                    cepat belajar, mudah beradaptasi, dan sangat menghargai kolaborasi tim untuk mencapai tujuan bersama.
                </p>
                <!-- Subtle background pattern or element --><div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-5 pointer-events-none"></div>
            </div>
        </section>

        <!-- Garis Pemisah dengan Glow --><div class="w-full h-px bg-gradient-to-r from-transparent via-blue-700 to-transparent my-20"></div>

        <!-- ======================= 4. Keahlian Teknis dan Non-Teknis ======================= --><section id="skills" class="py-16">
            <h3 class="section-title" data-key="sectionSkills">MY SKILLS</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

                <!-- Keahlian Teknis --><div class="skill-category-card">
                    <div class="flex items-center mb-6">
                        <i data-lucide="code" class="w-9 h-9 text-blue-400 mr-4"></i>
                        <h4 class="text-3xl font-extrabold text-white" data-key="skillsTechTitle">TECHNICAL SKILLS</h4>
                    </div>
                    <div class="flex flex-wrap gap-4">
                        <span class="skill-tag" data-key="skill1">JavaScript / TypeScript</span>
                        <span class="skill-tag" data-key="skill2">React.js / Next.js</span>
                        <span class="skill-tag" data-key="skill3">Node.js / Express</span>
                        <span class="skill-tag" data-key="skill4">Python / Django</span>
                        <span class="skill-tag" data-key="skill5">SQL / NoSQL (MongoDB, PostgreSQL)</span>
                        <span class="skill-tag" data-key="skill6">Docker / Kubernetes</span>
                        <span class="skill-tag" data-key="skill7">Cloud Platforms (AWS, GCP)</span>
                        <span class="skill-tag" data-key="skill8">Git / GitHub</span>
                    </div>
                </div>

                <!-- Keahlian Non-Teknis --><div class="skill-category-card">
                    <div class="flex items-center mb-6">
                        <i data-lucide="users" class="w-9 h-9 text-blue-400 mr-4"></i>
                        <h4 class="text-3xl font-extrabold text-white" data-key="skillsSoftTitle">SOFT SKILLS</h4>
                    </div>
                    <div class="flex flex-wrap gap-4">
                        <span class="skill-tag" data-key="softSkill1">Effective Communication</span>
                        <span class="skill-tag" data-key="softSkill2">Problem Solving</span>
                        <span class="skill-tag" data-key="softSkill3">Time Management</span>
                        <span class="skill-tag" data-key="softSkill4">Team Leadership</span>
                        <span class="skill-tag" data-key="softSkill5">Adaptability</span>
                        <span class="skill-tag" data-key="softSkill6">Critical Thinking</span>
                        <span class="skill-tag" data-key="softSkill7">Project Management</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Garis Pemisah dengan Glow --><div class="w-full h-px bg-gradient-to-r from-transparent via-blue-700 to-transparent my-20"></div>

        <!-- ======================= 5. Project Saya ======================= --><section id="projects" class="py-16">
            <h3 class="section-title" data-key="sectionProjects">FEATURED PROJECTS</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                
                <!-- Project 1 --><div class="project-card">
                    <div class="h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl overflow-hidden border-b border-blue-900/50">
                        <img src="https://placehold.co/600x400/0F172A/66CCFF?text=E-Commerce+App" alt="Project 1" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-7">
                        <h4 class="text-2xl font-bold text-white mb-3" data-key="project1Title">B2B E-Commerce Platform</h4>
                        <p class="text-gray-400 text-base mb-5 line-clamp-3" data-key="project1Desc">A multi-vendor inventory and transaction management system built with React and Firebase, focusing on scalability and real-time updates.</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Firebase</span>
                            <span class="tech-tag">Tailwind CSS</span>
                        </div>
                        <a href="https://github.com/project1" target="_blank" class="project-link" data-key="projectLink">
                            View Project <i data-lucide="external-link" class="w-5 h-5 ml-2"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 2 --><div class="project-card">
                    <div class="h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl overflow-hidden border-b border-blue-900/50">
                        <img src="https://placehold.co/600x400/0F172A/66CCFF?text=Fast+API" alt="Project 2" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-7">
                        <h4 class="text-2xl font-bold text-white mb-3" data-key="project2Title">High-Performance Backend Microservice</h4>
                        <p class="text-gray-400 text-base mb-5 line-clamp-3" data-key="project2Desc">Developed a robust and scalable RESTful API using Node.js and MongoDB, optimized for speed and data integrity.</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">Express</span>
                            <span class="tech-tag">MongoDB</span>
                        </div>
                        <a href="https://github.com/project2" target="_blank" class="project-link" data-key="projectLink">
                            View Project <i data-lucide="external-link" class="w-5 h-5 ml-2"></i>
                        </a>
                    </div>
                </div>

                <!-- Project 3 --><div class="project-card">
                    <div class="h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl overflow-hidden border-b border-blue-900/50">
                        <img src="https://placehold.co/600x400/0F172A/66CCFF?text=Data+Dashboard" alt="Project 3" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="p-7">
                        <h4 class="text-2xl font-bold text-white mb-3" data-key="project3Title">Interactive Data Analytics Dashboard</h4>
                        <p class="text-gray-400 text-base mb-5 line-clamp-3" data-key="project3Desc">Real-time data visualization tool leveraging Python (Pandas) and Streamlit, providing actionable insights.</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">Pandas</span>
                            <span class="tech-tag">Streamlit</span>
                        </div>
                        <a href="https://github.com/project3" target="_blank" class="project-link" data-key="projectLink">
                            View Project <i data-lucide="external-link" class="w-5 h-5 ml-2"></i>
                        </a>
                    </div>
                </div>

            </div>
        </section>

        <!-- Garis Pemisah dengan Glow --><div class="w-full h-px bg-gradient-to-r from-transparent via-blue-700 to-transparent my-20"></div>

        <!-- ======================= 6. Sertifikat ======================= --><section id="certs" class="py-16">
            <h3 class="section-title" data-key="sectionCerts">CERTIFICATES & AWARDS</h3>
            
            <div class="space-y-8">
                
                <!-- Sertifikat 1 --><div class="cert-card">
                    <i data-lucide="award" class="w-10 h-10 text-blue-400 flex-shrink-0 mb-4 sm:mb-0 sm:mr-8"></i>
                    <div class="flex-grow">
                        <h4 class="text-2xl font-bold text-white mb-2" data-key="cert1Title">Google Professional Certificate: Full-Stack Developer</h4>
                        <p class="text-gray-400 text-lg" data-key="cert1Issuer">Google - Issued June 2024</p>
                    </div>
                    <a href="#" target="_blank" class="cert-link" data-key="certLink">
                        Verify Credential <i data-lucide="external-link" class="w-5 h-5 ml-2"></i>
                    </a>
                </div>

                <!-- Sertifikat 2 --><div class="cert-card">
                    <i data-lucide="award" class="w-10 h-10 text-blue-400 flex-shrink-0 mb-4 sm:mb-0 sm:mr-8"></i>
                    <div class="flex-grow">
                        <h4 class="text-2xl font-bold text-white mb-2" data-key="cert2Title">AWS Certified Solutions Architect – Associate</h4>
                        <p class="text-gray-400 text-lg" data-key="cert2Issuer">Amazon Web Services (AWS) - Issued March 2023</p>
                    </div>
                    <a href="#" target="_blank" class="cert-link" data-key="certLink">
                        Verify Credential <i data-lucide="external-link" class="w-5 h-5 ml-2"></i>
                    </a>
                </div>

            </div>
        </section>

        <!-- Garis Pemisah dengan Glow --><div class="w-full h-px bg-gradient-to-r from-transparent via-blue-700 to-transparent my-20"></div>

        <!-- ======================= 7. Kontak ======================= --><section id="contact" class="py-16 text-center">
            <h3 class="section-title" data-key="sectionContact">LET'S CONNECT!</h3>
            <p class="text-2xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed" data-key="contactSlogan">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, or just chat about technology. Feel free to reach out!
            </p>
            
            <div class="flex flex-wrap justify-center gap-10">
                
                <!-- Kontak: Email --><a href="mailto:emailanda@example.com" class="contact-card">
                    <i data-lucide="mail" class="w-10 h-10 mb-3 text-blue-400"></i>
                    <span class="text-xl font-bold" data-key="contactEmail">Email</span>
                    <span class="text-base text-gray-400 mt-2">emailanda@example.com</span>
                </a>

                <!-- Kontak: WhatsApp (WA) --><a href="https://wa.me/628123456789" target="_blank" class="contact-card">
                    <i data-lucide="message-square" class="w-10 h-10 mb-3 text-blue-400"></i>
                    <span class="text-xl font-bold" data-key="contactWA">WhatsApp</span>
                    <span class="text-base text-gray-400 mt-2">+62 812 3456 789</span>
                </a>

                <!-- Kontak: GitHub --><a href="https://github.com/usernamanda" target="_blank" class="contact-card">
                    <i data-lucide="github" class="w-10 h-10 mb-3 text-blue-400"></i>
                    <span class="text-xl font-bold" data-key="contactGithub">GitHub</span>
                    <span class="text-base text-gray-400 mt-2">usernamanda</span>
                </a>
            </div>
        </section>

    </main>

    <!-- ======================= Footer ======================= --><footer class="bg-black py-10 mt-24 border-t border-blue-900/50">
        <div class="max-w-6xl mx-auto px-4 text-center text-gray-500">
            <p data-key="footerCopyright">&copy; <span id="current-year"></span> [Nama Anda]. All rights reserved. Designed with passion and Tailwind CSS.</p>
        </div>
    </footer>

    <!-- ======================= Custom Styles ======================= --><style>
        .section-title {
            @apply text-5xl font-black text-white mb-16 text-center relative pb-4;
        }
        .section-title::after {
            content: '';
            @apply absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-blue-500 rounded-full;
        }
        .nav-link {
            @apply text-gray-300 hover:text-blue-400 transition duration-300 px-3 py-2 rounded-lg;
        }
        .mobile-nav-link {
            @apply py-3 px-4 text-gray-300 hover:bg-gray-800 rounded-lg transition duration-300 text-center;
        }
        .skill-tag {
            @apply bg-blue-600/30 text-blue-300 text-base font-semibold px-5 py-2 rounded-full border border-blue-600 hover:bg-blue-600/40 transition duration-300 transform hover:scale-105;
        }
        .skill-category-card {
            @apply bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl shadow-2xl border border-blue-900/50;
        }
        .project-card {
            @apply bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-blue-900/50 transition duration-300 hover:shadow-blue-500/30 transform hover:-translate-y-2;
        }
        .tech-tag {
            @apply bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded-full;
        }
        .project-link, .cert-link {
            @apply inline-flex items-center text-blue-400 hover:text-blue-300 font-bold text-lg uppercase transition duration-300;
        }
        .cert-card {
            @apply flex flex-col sm:flex-row items-start sm:items-center bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-xl border border-blue-900/50 transition duration-300 hover:border-blue-500/50 transform hover:-translate-y-1;
        }
        .contact-card {
            @apply flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black p-8 w-56 h-56 rounded-3xl border border-blue-900/50 text-blue-400 hover:bg-gradient-to-br hover:from-blue-900 hover:to-blue-800 transition duration-300 transform hover:scale-105 shadow-xl;
        }
        .contact-card span:nth-child(2) { /* title */
            @apply text-white;
        }
    </style>

    <!-- ======================= JavaScript untuk Interaksi ======================= --><script>
        // Data kamus untuk terjemahan
        const dictionary = {
            'en': {
                pageTitle: 'My Portfolio - [Nama Anda]',
                navAbout: 'ABOUT',
                navSkills: 'SKILLS',
                navProjects: 'PROJECTS',
                navCerts: 'CERTIFICATES',
                navContact: 'CONTACT',
                heroGreeting: 'HELLO, I AM',
                heroTitle1: 'A',
                heroTitle2: 'SOFTWARE DEVELOPER',
                heroTitle3: 'PASSIONATE ABOUT INNOVATION.',
                heroButton: 'HIRE ME',
                sectionAbout: 'ABOUT ME',
                aboutP1: 'I am a dedicated software developer with [jumlah] years of experience, specializing in building robust and intuitive web applications. I am passionate about user-centric design and always seeking new challenges to expand my expertise.',
                aboutP2: 'My journey in technology has fostered the ability to solve complex problems with elegant and efficient solutions. I am also a quick learner, highly adaptable, and greatly value team collaboration to achieve common goals.',
                sectionSkills: 'MY SKILLS',
                skillsTechTitle: 'TECHNICAL SKILLS',
                skillsSoftTitle: 'SOFT SKILLS',
                softSkill1: 'Effective Communication',
                softSkill2: 'Problem Solving',
                softSkill3: 'Time Management',
                softSkill4: 'Team Leadership',
                softSkill5: 'Adaptability',
                softSkill6: 'Critical Thinking',
                softSkill7: 'Project Management',
                sectionProjects: 'FEATURED PROJECTS',
                project1Title: 'B2B E-Commerce Platform',
                project1Desc: 'A multi-vendor inventory and transaction management system built with React and Firebase, focusing on scalability and real-time updates.',
                project2Title: 'High-Performance Backend Microservice',
                project2Desc: 'Developed a robust and scalable RESTful API using Node.js and MongoDB, optimized for speed and data integrity.',
                project3Title: 'Interactive Data Analytics Dashboard',
                project3Desc: 'Real-time data visualization tool leveraging Python (Pandas) and Streamlit, providing actionable insights.',
                projectLink: 'VIEW PROJECT',
                sectionCerts: 'CERTIFICATES & AWARDS',
                cert1Title: 'Google Professional Certificate: Full-Stack Developer',
                cert1Issuer: 'Google - Issued June 2024',
                cert2Title: 'AWS Certified Solutions Architect – Associate',
                cert2Issuer: 'Amazon Web Services (AWS) - Issued March 2023',
                certLink: 'VERIFY CREDENTIAL',
                sectionContact: 'LET\'S CONNECT!',
                contactSlogan: 'I\'m always excited to discuss new opportunities, collaborate on innovative projects, or just chat about technology. Feel free to reach out!',
                contactEmail: 'Email',
                contactWA: 'WhatsApp',
                contactGithub: 'GitHub',
                footerCopyright: '&copy; <span id="current-year"></span> [Nama Anda]. All rights reserved. Designed with passion and Tailwind CSS.'
            },
            'id': {
                pageTitle: 'Portofolio Saya - [Nama Anda]',
                navAbout: 'TENTANG SAYA',
                navSkills: 'KEAHLIAN',
                navProjects: 'PROYEK',
                navCerts: 'SERTIFIKAT',
                navContact: 'KONTAK',
                heroGreeting: 'HALO, SAYA ADALAH',
                heroTitle1: 'SEORANG',
                heroTitle2: 'PENGEMBANG PERANGKAT LUNAK',
                heroTitle3: 'YANG BERSEMANGAT TENTANG INOVASI.',
                heroButton: 'HUBUNGI SAYA',
                sectionAbout: 'TENTANG SAYA',
                aboutP1: 'Saya seorang pengembang perangkat lunak yang berdedikasi dengan pengalaman [jumlah] tahun, mengkhususkan diri dalam membangun aplikasi web yang kuat dan intuitif. Saya bersemangat tentang desain yang berpusat pada pengguna dan selalu mencari tantangan baru untuk memperluas keahlian saya.',
                aboutP2: 'Perjalanan saya dalam dunia teknologi telah memupuk kemampuan untuk memecahkan masalah yang kompleks dengan solusi yang elegan dan efisien. Saya juga merupakan individu yang cepat belajar, mudah beradaptasi, dan sangat menghargai kolaborasi tim untuk mencapai tujuan bersama.',
                sectionSkills: 'KEAHLIAN SAYA',
                skillsTechTitle: 'KEAHLIAN TEKNIS',
                skillsSoftTitle: 'KEAHLIAN NON-TEKNIS',
                softSkill1: 'Komunikasi Efektif',
                softSkill2: 'Pemecahan Masalah',
                softSkill3: 'Manajemen Waktu',
                softSkill4: 'Kepemimpinan Tim',
                softSkill5: 'Adaptabilitas',
                softSkill6: 'Berpikir Kritis',
                softSkill7: 'Manajemen Proyek',
                sectionProjects: 'PROYEK UNGGULAN',
                project1Title: 'Platform E-Commerce B2B',
                project1Desc: 'Sistem manajemen inventaris dan transaksi multi-vendor yang dibangun dengan React dan Firebase, berfokus pada skalabilitas dan pembaruan real-time.',
                project2Title: 'Microservice Backend Berkinerja Tinggi',
                project2Desc: 'Mengembangkan API RESTful yang kuat dan skalabel menggunakan Node.js dan MongoDB, dioptimalkan untuk kecepatan dan integritas data.',
                project3Title: 'Dashboard Analisis Data Interaktif',
                project3Desc: 'Alat visualisasi data real-time memanfaatkan Python (Pandas) dan Streamlit, menyediakan wawasan yang dapat ditindaklanjuti.',
                projectLink: 'LIHAT PROYEK',
                sectionCerts: 'SERTIFIKAT & PENGHARGAAN',
                cert1Title: 'Sertifikat Profesional Google: Pengembang Full-Stack',
                cert1Issuer: 'Google - Dikeluarkan Juni 2024',
                cert2Title: 'AWS Certified Solutions Architect – Associate',
                cert2Issuer: 'Amazon Web Services (AWS) - Dikeluarkan Maret 2023',
                certLink: 'VERIFIKASI KREDENSIAL',
                sectionContact: 'MARI BERHUBUNGAN!',
                contactSlogan: 'Saya selalu bersemangat untuk mendiskusikan peluang baru, berkolaborasi dalam proyek inovatif, atau sekadar berbincang tentang teknologi. Jangan ragu untuk menghubungi saya!',
                contactEmail: 'Email',
                contactWA: 'WhatsApp',
                contactGithub: 'GitHub',
                footerCopyright: '&copy; <span id="current-year"></span> [Nama Anda]. Semua hak cipta dilindungi. Dibuat dengan passion dan Tailwind CSS.'
            }
        };

        let currentLang = 'id';

        function updateContent(lang) {
            const translations = dictionary[lang];
            
            // Perbarui tag data-key
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translations[key]) {
                    if (element.tagName === 'TITLE') {
                        document.title = translations[key];
                    } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translations[key];
                    } else {
                        element.innerHTML = translations[key];
                    }
                }
            });

            // Perbarui teks tombol translate
            document.getElementById('lang-text').textContent = lang === 'id' ? 'EN/ID' : 'ID/EN';
            
            // Perbarui atribut lang pada <html>
            document.documentElement.lang = lang;
        }

        document.addEventListener('DOMContentLoaded', () => {
            // 1. Inisialisasi Lucide Icons
            lucide.createIcons();

            // 2. Tampilkan tahun saat ini di footer
            document.getElementById('current-year').textContent = new Date().getFullYear();

            // 3. Logika Menu Mobile (Tetap sama)
            const menuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const navLinks = mobileMenu.querySelectorAll('a');

            menuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                menuButton.querySelector('i').setAttribute('data-lucide', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
                lucide.createIcons(); // Re-render ikon setelah perubahan
            });

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (!mobileMenu.classList.contains('hidden')) {
                         mobileMenu.classList.add('hidden');
                         menuButton.querySelector('i').setAttribute('data-lucide', 'menu');
                         lucide.createIcons();
                    }
                });
            });

            // 4. Logika Terjemahan
            const translateButton = document.getElementById('translate-button');
            
            // Setel konten awal ke bahasa Indonesia
            updateContent(currentLang); 

            translateButton.addEventListener('click', () => {
                currentLang = currentLang === 'id' ? 'en' : 'id';
                updateContent(currentLang);
            });
        });
    </script>
</body>
</html>
