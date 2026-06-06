import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaGitAlt,
  FaDownload,
  FaBars,
  FaTimes,
  FaJava,
  FaCode,
  FaPaintBrush,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiVercel,
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";

const BASE_URL = import.meta.env.BASE_URL;

const EMAILJS_SERVICE_ID = "service_t44qod6";
const EMAILJS_TEMPLATE_ID = "template_5m07izx";
const EMAILJS_PUBLIC_KEY = "-7AGALHnlmrjZdjir7";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C / C++", icon: <FaCode /> },
  { name: "UI/UX Design", icon: <FaPaintBrush /> },
];

const projects = [
  {
    title: "AttendBook",
    desc: "A modern attendance management system with responsive dashboard, student records and clean UI for academic attendance tracking.",
    longDesc:
      "AttendBook is designed to simplify attendance tracking for academic environments. It focuses on clean dashboard design, fast navigation, and a responsive interface suitable for students, teachers, and admin-style workflows.",
    tech: "React • Tailwind CSS • Firebase",
    status: "Live Project",
    live: "https://attendbook-55obd3p6a-shahil-18s-projects.vercel.app",
    github: "#",
    images: [
      `${BASE_URL}projects/attendbook-1.png`,
      `${BASE_URL}projects/attendbook-2.png`,
    ],
    features: [
      "Responsive dashboard",
      "Student record tracking",
      "Clean attendance UI",
      "Firebase-ready structure",
    ],
  },
  {
    title: "StreamFlix",
    desc: "A movie discovery web app with authentication, protected routes, watchlist support and API-based movie details.",
    longDesc:
      "StreamFlix is a movie discovery platform built to demonstrate frontend routing, authentication, API handling, and protected user experience.",
    tech: "React • Firebase • API",
    status: "Completed",
    live: "#",
    github: "#",
    images: [
      `${BASE_URL}projects/streamflix-1.png`,
      `${BASE_URL}projects/streamflix-2.png`,
    ],
    features: [
      "Firebase authentication",
      "Protected routes",
      "Movie detail pages",
      "Watchlist support",
    ],
  },
  {
    title: "Campus Cravings",
    desc: "A responsive website built to digitalize college canteen operations with simple navigation, clean interface and better user experience.",
    longDesc:
      "Campus Cravings is a college canteen website concept focused on digitalizing basic canteen operations with clean layout, food presentation, and easy navigation.",
    tech: "HTML • CSS • JavaScript",
    status: "College Project",
    live: "#",
    github: "#",
    images: [
      `${BASE_URL}projects/campus-cravings-1.png`,
      `${BASE_URL}projects/campus-cravings-2.png`,
    ],
    features: [
      "Responsive layout",
      "Food/menu presentation",
      "Simple navigation",
      "College-focused use case",
    ],
  },
  {
    title: "Portfolio Website",
    desc: "A premium animated developer portfolio with dark UI, motion effects, GitHub stats, resume download and working contact form.",
    longDesc:
      "This portfolio is built as a personal brand website with modern UI, motion effects, project showcases, resume download, GitHub stats, and a working EmailJS contact form.",
    tech: "React • Tailwind CSS • Framer Motion • EmailJS",
    status: "Live Portfolio",
    live: "https://shahil-18.github.io/shahil-portfolio/",
    github: "https://github.com/Shahil-18/shahil-portfolio",
    images: [
      `${BASE_URL}projects/portfolio-1.png`,
      `${BASE_URL}projects/portfolio-2.png`,
    ],
    features: [
      "Animated UI",
      "GitHub stats",
      "Resume download",
      "Working contact form",
    ],
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-black text-white overflow-hidden relative">
      <ScrollProgress progress={scrollProgress} />

      <div
        className="fixed w-80 h-80 rounded-full bg-purple-500/20 blur-3xl pointer-events-none z-0"
        style={{
          left: mouse.x - 160,
          top: mouse.y - 160,
        }}
      />

      <TechBackground />
      <Navbar />
      <Hero />
      <About />
      <FunZone />
      <Skills />
      <Projects onOpen={setSelectedProject} />
      <Experience />
      <Education />
      <Achievements />
      <CodingProfiles />
      <GithubStats />
      <WhyHireMe />
      <Resume />
      <Contact />
      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

function ScrollProgress({ progress }) {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-[100]">
      <div
        className="h-full bg-gradient-to-r from-purple-500 to-emerald-400"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function Loader() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>

        <h1 className="text-4xl font-black">
          Shahil<span className="text-purple-400">.</span>
        </h1>

        <p className="text-gray-400 mt-3 tracking-widest text-sm">
          LOADING THE ROYAL CODEBASE
        </p>
      </div>
    </div>
  );
}

function TechBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:70px_70px]"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full"></div>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "about",
    "fun",
    "skills",
    "projects",
    "experience",
    "education",
    "achievements",
    "profiles",
    "github",
    "hire",
    "resume",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">
        <a href="#" className="font-black text-2xl">
          Shahil<span className="text-purple-400">.</span>
        </a>

        <div className="hidden xl:flex gap-7 text-sm text-gray-300">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize hover:text-purple-400 transition"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href={`${BASE_URL}resume.pdf`}
          download
          className="hidden xl:flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-xl hover:border-purple-400 transition text-sm"
        >
          <FaDownload />
          Resume
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden text-2xl text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden bg-black/95 border-t border-white/10 px-6 py-6 max-h-[80vh] overflow-y-auto"
        >
          <div className="flex flex-col gap-5 text-gray-300">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="capitalize text-lg hover:text-purple-400 transition"
              >
                {item}
              </a>
            ))}

            <a
              href={`${BASE_URL}resume.pdf`}
              download
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 mt-4 px-5 py-3 bg-purple-500 rounded-xl text-white font-bold"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
      <FloatingBadges />

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl"
      >
        <p className="uppercase tracking-[8px] text-purple-400 mb-6 text-xs md:text-sm">
          Welcome To My Digital Universe
        </p>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight">
          Shahil Sharma
        </h1>

        <div className="text-xl md:text-4xl font-bold text-purple-400 h-16">
          <Typewriter
            words={[
              "Full Stack Developer",
              "React Developer",
              "Firebase Developer",
              "UI/UX Learner",
              "Future Software Engineer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={45}
            delaySpeed={1300}
          />
        </div>

        <p className="mt-8 text-gray-400 text-base md:text-xl leading-8 max-w-3xl mx-auto">
          Final Year B.Tech Computer Science Engineering student building
          modern, useful and visually impressive web applications with React,
          Firebase and clean UI engineering.
        </p>

        <p className="mt-5 text-emerald-400 font-semibold">
          Code karta hoon, bugs se ladta hoon, aur UI ko royal banata hoon ⚔️
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="#projects"
            className="px-8 py-4 bg-purple-500 rounded-xl font-bold hover:scale-105 hover:bg-purple-400 transition"
          >
            View Projects
          </a>

          <a
            href={`${BASE_URL}resume.pdf`}
            download
            className="px-8 py-4 border border-white/20 rounded-xl hover:border-purple-400 hover:bg-white/10 transition flex items-center gap-2"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function FloatingBadges() {
  const badges = [
    { text: "React ⚛️", className: "top-32 left-10" },
    { text: "Firebase 🔥", className: "top-44 right-12" },
    { text: "DSA Mode 🧠", className: "bottom-36 left-16" },
    { text: "No Bugs Allowed 🚫", className: "bottom-28 right-16" },
  ];

  return (
    <>
      {badges.map((badge, index) => (
        <motion.div
          key={badge.text}
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`hidden lg:block absolute ${badge.className} bg-zinc-950/80 border border-white/10 px-5 py-3 rounded-2xl text-sm text-gray-300 backdrop-blur-xl`}
        >
          {badge.text}
        </motion.div>
      ))}
    </>
  );
}

function About() {
  return (
    <Section id="about" title="About Me">
      <div className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
        <p className="text-gray-300 text-lg md:text-xl leading-10">
          I'm Shahil Sharma, a Final Year B.Tech Computer Science Engineering
          student at Roorkee Institute of Technology. I am focused on Full Stack
          Web Development, UI/UX design and building practical digital products.
          I enjoy turning ideas into clean, responsive and visually impressive
          web applications using React, Tailwind CSS, Firebase and JavaScript.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <InfoCard title="Education" text="B.Tech CSE, Roorkee Institute of Technology" />
          <InfoCard title="Focus" text="Frontend Development, React, Firebase and UI Engineering" />
          <InfoCard title="Goal" text="Build strong projects, crack placements and grow as a Software Engineer" />
        </div>
      </div>
    </Section>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
      <h3 className="text-purple-400 font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{text}</p>
    </div>
  );
}

function FunZone() {
  return (
    <Section id="fun" title="A Little Masti">
      <div className="grid md:grid-cols-3 gap-6">
        <FunCard title="Currently Building" text="A portfolio that does not look like a template copied from YouTube." rotate="-2" />
        <FunCard title="Developer Mood" text="90% debugging, 10% confidence, 100% comeback energy." rotate="2" />
        <FunCard title="Mission" text="Build projects, crack placement, and make the internet remember my name." rotate="-2" />
      </div>
    </Section>
  );
}

function FunCard({ title, text, rotate }) {
  return (
    <motion.div
      whileHover={{ rotate: Number(rotate), scale: 1.03 }}
      className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
    >
      <h3 className="text-2xl font-black mb-4">{title}</h3>
      <p className="text-gray-400 leading-7">{text}</p>
    </motion.div>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Tech Stack">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <motion.div
            whileHover={{ y: -12, scale: 1.05 }}
            key={skill.name}
            className="group bg-zinc-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-purple-400 transition"
          >
            <div className="text-5xl text-gray-300 group-hover:text-purple-400 transition mb-5">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects({ onOpen }) {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} onOpen={onOpen} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      whileHover={{ y: -14, scale: 1.01 }}
      onClick={() => onOpen(project)}
      className="group bg-zinc-950/80 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl hover:border-purple-400 transition overflow-hidden cursor-pointer"
    >
      <div className="relative h-72 md:h-80 mb-8 rounded-3xl overflow-hidden border border-white/10 bg-black/40">
        <img
          src={project.images[0]}
          alt={`${project.title} screenshot 1`}
          className="absolute top-5 left-5 w-[78%] h-[58%] object-cover rounded-2xl border border-white/10 shadow-2xl transition duration-500 group-hover:scale-105 group-hover:-rotate-1"
        />

        <img
          src={project.images[1]}
          alt={`${project.title} screenshot 2`}
          className="absolute bottom-5 right-5 w-[78%] h-[58%] object-cover rounded-2xl border border-white/10 shadow-2xl transition duration-500 group-hover:scale-105 group-hover:rotate-1"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-emerald-500/10 pointer-events-none"></div>
      </div>

      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 className="text-2xl md:text-3xl font-black">{project.title}</h3>

        <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
          {project.status}
        </span>
      </div>

      <p className="text-gray-400 leading-7 mb-5">{project.desc}</p>
      <p className="text-sm text-purple-300 mb-6">{project.tech}</p>

      <div className="flex flex-wrap gap-3">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="px-5 py-3 bg-purple-500 rounded-xl text-sm font-bold hover:bg-purple-400 transition flex items-center gap-2"
        >
          Live Demo <FaExternalLinkAlt className="text-xs" />
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="px-5 py-3 border border-white/20 rounded-xl text-sm hover:border-purple-400 transition flex items-center gap-2"
        >
          GitHub <FaGithub />
        </a>
      </div>

      <p className="text-xs text-gray-500 mt-5">Click card for details</p>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-5 mb-8">
              <div>
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                  {project.status}
                </span>
                <h2 className="text-4xl md:text-5xl font-black">
                  {project.title}
                </h2>
                <p className="text-purple-300 mt-3">{project.tech}</p>
              </div>

              <button
                onClick={onClose}
                className="min-w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:border-purple-400 transition"
              >
                <FaTimes />
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {project.images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-72 object-cover rounded-3xl border border-white/10"
                />
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-black/40 border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-black mb-4">Project Overview</h3>
                <p className="text-gray-400 leading-8">{project.longDesc}</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-black mb-4">Key Features</h3>

                <ul className="space-y-3 text-gray-400">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-emerald-400">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 bg-purple-500 rounded-xl font-bold hover:bg-purple-400 transition flex items-center gap-2"
              >
                Open Live Demo <FaExternalLinkAlt />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 border border-white/20 rounded-xl font-bold hover:border-purple-400 transition flex items-center gap-2"
              >
                View GitHub <FaGithub />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        <div className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
          <h3 className="text-3xl font-black mb-2">Leistung Technology</h3>

          <p className="text-purple-400 font-semibold mb-6">
            Software Developer & Product Designer Intern · Jul 2024 - Oct 2024
          </p>

          <div className="grid md:grid-cols-2 gap-5 text-gray-300 text-lg leading-8">
            <p>
              Designed and optimized responsive website interfaces to improve
              user engagement and maintain UI consistency across devices.
            </p>

            <p>
              Worked on UI/UX solutions for web and product interfaces while
              contributing to product design, packaging design and social media
              marketing strategy.
            </p>
          </div>
        </div>

        <div className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
          <h3 className="text-3xl font-black mb-2">Leadership & Activities</h3>

          <p className="text-purple-400 font-semibold mb-6">
            Coordinator · Urja Club · 2022 - 2026
          </p>

          <p className="text-gray-300 text-lg leading-9">
            Coordinated club activities and contributed to successful college
            events, strengthening teamwork, communication and event management
            skills.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      <div className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
        <h3 className="text-3xl font-black mb-2">
          Roorkee Institute of Technology
        </h3>

        <p className="text-purple-400 font-semibold mb-6">
          B.Tech in Computer Science & Engineering · Aug 2022 - Jul 2026
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard
            title="Core Subjects"
            text="Data Structures, Web Development, Programming Fundamentals, DBMS and Object-Oriented Programming."
          />
          <InfoCard
            title="Strengths"
            text="Responsive Design, UI/UX thinking, teamwork, problem solving and practical project building."
          />
        </div>
      </div>
    </Section>
  );
}

function Achievements() {
  const achievements = [
    {
      title: "Event Management",
      desc: "Hosted and contributed to successful college events from 2024 to 2026.",
    },
    {
      title: "Club Leadership",
      desc: "Served as Coordinator of Urja Club from 2022 to 2026.",
    },
    {
      title: "Practical Builder",
      desc: "Built multiple web projects using React, Firebase, Tailwind CSS, HTML, CSS and JavaScript.",
    },
  ];

  return (
    <Section id="achievements" title="Achievements">
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-emerald-400 transition"
          >
            <h3 className="text-2xl font-black mb-4 text-emerald-400">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-7">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
          <h3 className="text-2xl font-black mb-5">Languages</h3>

          <div className="space-y-4 text-gray-300">
            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>English</span>
              <span className="text-purple-400">Professional</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Hindi</span>
              <span className="text-purple-400">Intermediate</span>
            </div>

            <div className="flex justify-between">
              <span>Bengali</span>
              <span className="text-purple-400">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
          <h3 className="text-2xl font-black mb-5">Interests</h3>

          <div className="flex flex-wrap gap-3">
            {["Web Design", "Cricket", "Mountains", "Trekking", "UI Design"].map(
              (interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-300"
                >
                  {interest}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

function CodingProfiles() {
  const profiles = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      desc: "Projects, repositories and development activity.",
      link: "https://github.com/Shahil-18",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      desc: "Problem solving and DSA practice profile.",
      link: "#",
    },
    {
      name: "HackerRank",
      icon: <SiHackerrank />,
      desc: "Coding practice and programming skill profile.",
      link: "#",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      desc: "Professional profile and career updates.",
      link: "#",
    },
  ];

  return (
    <Section id="profiles" title="Coding Profiles">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((profile) => (
          <motion.a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -10, scale: 1.04 }}
            className="bg-zinc-950/80 border border-white/10 rounded-3xl p-7 backdrop-blur-xl hover:border-purple-400 transition block"
          >
            <div className="text-5xl text-purple-400 mb-5">{profile.icon}</div>
            <h3 className="text-2xl font-black mb-4">{profile.name}</h3>
            <p className="text-gray-400 leading-7">{profile.desc}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function GithubStats() {
  return (
    <Section id="github" title="GitHub Activity">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-zinc-950/80 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-purple-400 transition"
        >
          <h3 className="text-2xl font-black mb-6">Profile Stats</h3>

          <img
            src="https://github-readme-stats.vercel.app/api?username=Shahil-18&show_icons=true&theme=radical&hide_border=true&bg_color=00000000"
            alt="GitHub Stats"
            className="w-full rounded-2xl"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-zinc-950/80 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-emerald-400 transition"
        >
          <h3 className="text-2xl font-black mb-6">Top Languages</h3>

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Shahil-18&layout=compact&theme=radical&hide_border=true&bg_color=00000000"
            alt="Top Languages"
            className="w-full rounded-2xl"
          />
        </motion.div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/Shahil-18"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-xl hover:border-purple-400 hover:bg-white/10 transition font-bold"
        >
          <FaGithub />
          Visit My GitHub
        </a>
      </div>
    </Section>
  );
}

function WhyHireMe() {
  const reasons = [
    {
      title: "Practical Project Builder",
      desc: "I focus on building real usable projects, not just static pages.",
    },
    {
      title: "Developer + Designer Mindset",
      desc: "I understand both code and visual design for clean user interfaces.",
    },
    {
      title: "Fast Learner",
      desc: "I quickly adapt to tools like React, Firebase, Tailwind and EmailJS.",
    },
    {
      title: "Team Player",
      desc: "Internship and club coordination improved my teamwork and communication.",
    },
    {
      title: "Problem Solving Attitude",
      desc: "I enjoy debugging, improving UI and turning ideas into working products.",
    },
    {
      title: "Placement Ready",
      desc: "I am improving my skills, projects and portfolio to become a strong candidate.",
    },
  ];

  return (
    <Section id="hire" title="Why Hire Me?">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            whileHover={{ y: -12, scale: 1.03 }}
            className="relative bg-zinc-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-purple-400 transition overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-500/20 blur-2xl rounded-full"></div>

            <span className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 font-black mb-6">
              0{index + 1}
            </span>

            <h3 className="text-2xl font-black mb-4">{reason.title}</h3>
            <p className="text-gray-400 leading-7">{reason.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 bg-zinc-950/80 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl text-center">
        <h3 className="text-3xl md:text-4xl font-black mb-5">
          I don’t just write code. I build digital experiences.
        </h3>

        <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto mb-8">
          My goal is to join a team where I can learn, contribute, improve fast
          and build meaningful products with strong UI and clean functionality.
        </p>

        <a
          href="#contact"
          className="inline-flex px-10 py-4 bg-purple-500 rounded-xl font-bold hover:bg-purple-400 hover:scale-105 transition"
        >
          Let’s Work Together
        </a>
      </div>
    </Section>
  );
}

function Resume() {
  return (
    <Section id="resume" title="Resume">
      <div className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl text-center">
        <h3 className="text-3xl font-black mb-4">
          Want to know more about my profile?
        </h3>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-8 mb-8">
          Download my resume to view my education, technical skills, projects,
          internship experience and complete profile.
        </p>

        <a
          href={`${BASE_URL}resume.pdf`}
          download
          className="inline-flex items-center gap-3 px-10 py-4 bg-purple-500 rounded-xl font-bold hover:bg-purple-400 hover:scale-105 transition"
        >
          <FaDownload />
          Download Resume
        </a>
      </div>
    </Section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully. I will reply soon 🚀");

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Message failed. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" title="Let's Connect">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
          <h3 className="text-3xl font-black mb-5">Send me a message</h3>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            Open for internships, placements and exciting web development
            projects. Fill this form and your message will come directly to my
            email.
          </p>

          <p className="text-emerald-400 font-semibold">
            Reply fast karta hoon... bas net slow na ho 😄
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="mailto:sharmashahil14@gmail.com"
              className="px-6 py-3 bg-white/10 border border-white/10 rounded-xl hover:border-purple-400 transition"
            >
              Direct Email
            </a>

            <a
              href="https://github.com/Shahil-18"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-white/10 border border-white/10 rounded-xl hover:border-purple-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        <form
          onSubmit={sendEmail}
          className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl"
        >
          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">
              Your Name
            </label>

            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-purple-400 transition"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm text-gray-400 mb-2">
              Your Email
            </label>

            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-purple-400 transition"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">Message</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Write your message..."
              className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-purple-400 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full px-8 py-4 bg-purple-500 rounded-xl font-bold hover:bg-purple-400 hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="mt-5 text-center text-emerald-400 font-semibold">
              {status}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500 px-6">
      <p>
        Built with React, Tailwind CSS and thoda sa masti by{" "}
        <span className="text-purple-400 font-bold">Shahil Sharma</span>
      </p>
    </footer>
  );
}

function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center px-6 py-24 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto w-full"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-12">
          <span className="text-purple-400">/</span> {title}
        </h2>

        {children}
      </motion.div>
    </section>
  );
}

export default App;