import { useEffect, useMemo, useState } from "react";
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
  FaEnvelope,
  FaRocket,
  FaBriefcase,
  FaArrowUp,
  FaCopy,
  FaCheck,
  FaTerminal,
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaBolt,
  FaDatabase,
  FaMagic,
  FaWhatsapp,
  FaRobot,
  FaPaperPlane,
  FaComments,
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

const EMAIL = "sharmashahil14@gmail.com";
const WHATSAPP_NUMBER = "919932326127";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Shahil, I saw your portfolio and want to connect with you."
);

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

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
    desc: "A modern attendance management system with responsive dashboard, student records and clean UI.",
    longDesc:
      "AttendBook is designed to simplify attendance tracking for academic environments with clean dashboard design, fast navigation and responsive layout.",
    tech: "React • Tailwind CSS • Firebase",
    status: "Live Project",
    live: "https://attendbook-55obd3p6a-shahil-18s-projects.vercel.app",
    github: "https://github.com/Shahil-18/Attendbook",
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
    desc: "A movie discovery web app with auth, protected routes, watchlist and API-based movie details.",
    longDesc:
      "StreamFlix demonstrates frontend routing, Firebase authentication, API handling, protected user experience and movie discovery features.",
    tech: "React • Firebase • API",
    status: "Completed",
    live: "",
    github: "https://github.com/Shahil-18/streamflix",
    images: [
      `${BASE_URL}projects/streamflix-1.png`,
      `${BASE_URL}projects/streamflix-2.png`,
    ],
    features: [
      "Firebase authentication",
      "Protected routes",
      "Movie details",
      "Watchlist support",
    ],
  },
  {
    title: "Campus Cravings",
    desc: "A responsive canteen website concept with simple navigation, clean interface and food presentation.",
    longDesc:
      "Campus Cravings is a college canteen website focused on digitalizing basic canteen operations with simple UI and responsive layout.",
    tech: "HTML • CSS • JavaScript",
    status: "Live Project",
    live: "https://campus-cravings.vercel.app/",
    github: "",
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
    desc: "A premium animated developer portfolio with dark UI, motion effects, resume and working contact form.",
    longDesc:
      "This portfolio is built as a personal brand website with motion effects, project showcases, resume download, GitHub section and EmailJS contact form.",
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
      "Project modal",
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
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let ticking = false;

    const move = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMouse({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };

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
      setShowTop(window.scrollY > 650);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-black text-white overflow-hidden relative selection:bg-fuchsia-500 selection:text-white">
      <ScrollProgress progress={scrollProgress} />

      <div
        className="hidden md:block fixed w-80 h-80 rounded-full bg-fuchsia-500/20 blur-3xl pointer-events-none z-0"
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
      <Services />
      <TerminalSection />
      <Projects onOpen={setSelectedProject} />
      <Experience />
      <Education />
      <Achievements />
      <CodingProfiles />
      <GithubStats />
      <WhyHireMe />
      <QuickStats />
      <RecruiterCTA />
      <Resume />
      <Contact />
      <Footer />
      <PortfolioAssistant />
      <BackToTop show={showTop} />

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
        className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-emerald-400"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function Loader() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <div className="relative w-28 h-28 mx-auto mb-7">
          <div className="absolute inset-0 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-4 border-4 border-emerald-400 border-b-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-8 border-4 border-pink-400 border-l-transparent rounded-full animate-spin"></div>
        </div>

        <h1 className="text-4xl font-black">
          Shahil<span className="text-fuchsia-400">.</span>
        </h1>

        <p className="text-gray-400 mt-3 tracking-widest text-xs md:text-sm">
          BOOTING GENZ DEV MODE
        </p>
      </div>
    </div>
  );
}

function TechBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-40 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:70px_70px]"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/25 blur-3xl rounded-full"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/15 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-500/15 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full"></div>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "about",
    "skills",
    "services",
    "terminal",
    "projects",
    "experience",
    "github",
    "hire",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/55 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-5 flex justify-between items-center">
        <a href="#" className="font-black text-2xl">
          Shahil<span className="text-fuchsia-400">.</span>
        </a>

        <div className="hidden xl:flex gap-7 text-sm text-gray-300">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize hover:text-fuchsia-400 transition"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href={`${BASE_URL}resume.pdf`}
          download
          className="hidden xl:flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-xl hover:border-fuchsia-400 transition text-sm"
        >
          <FaDownload />
          Resume
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden text-2xl text-white"
          aria-label="Toggle navigation menu"
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
                className="capitalize text-lg hover:text-fuchsia-400 transition"
              >
                {item}
              </a>
            ))}

            <a
              href={`${BASE_URL}resume.pdf`}
              download
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 mt-4 px-5 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-xl text-white font-bold"
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
    <section className="min-h-screen flex items-center justify-center px-5 md:px-6 pt-28 relative z-10">
      <FloatingBadges />

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-xs md:text-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for Internship / Fresher Role
        </motion.div>

        <p className="uppercase tracking-[7px] text-fuchsia-400 mb-6 text-xs md:text-sm">
          Welcome To My Digital Universe
        </p>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
            Shahil Sharma
          </span>
        </h1>

        <div className="text-xl md:text-4xl font-bold text-fuchsia-400 h-16">
          <Typewriter
            words={[
              "Full Stack Developer",
              "React Developer",
              "Firebase Developer",
              "UI/UX Learner",
              "Frontend Engineer Mode",
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
          Final Year B.Tech CSE student building modern, useful and visually
          impressive web applications with React, Firebase, Tailwind CSS and
          clean UI engineering.
        </p>

        <p className="mt-5 text-emerald-400 font-semibold">
          Code karta hoon, bugs se ladta hoon, aur UI ko royal banata hoon ⚔️
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-fuchsia-500/20"
          >
            View Projects
          </a>

          <a
            href="#terminal"
            className="px-8 py-4 border border-white/20 rounded-xl hover:border-emerald-400 hover:bg-white/10 transition flex items-center gap-2"
          >
            <FaTerminal />
            Open Terminal
          </a>

          <a
            href={`${BASE_URL}resume.pdf`}
            download
            className="px-8 py-4 border border-white/20 rounded-xl hover:border-fuchsia-400 hover:bg-white/10 transition flex items-center gap-2"
          >
            <FaDownload />
            Resume
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
      <div className="bg-gradient-to-br from-zinc-950/90 via-purple-950/20 to-zinc-950/90 border border-white/10 rounded-3xl p-7 md:p-10 backdrop-blur-xl">
        <p className="text-gray-300 text-lg md:text-xl leading-9 md:leading-10">
          I'm Shahil Sharma, a Final Year B.Tech Computer Science Engineering
          student at Roorkee Institute of Technology. I focus on Full Stack Web
          Development, UI/UX design and building practical digital products. I
          enjoy turning ideas into clean, responsive and visually impressive web
          apps.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <InfoCard
            title="Education"
            text="B.Tech CSE, Roorkee Institute of Technology"
          />
          <InfoCard
            title="Focus"
            text="React, Firebase, Tailwind CSS and UI Engineering"
          />
          <InfoCard
            title="Goal"
            text="Build strong projects and grow as a Software Engineer"
          />
        </div>
      </div>
    </Section>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="bg-black/40 border border-white/10 rounded-2xl p-5 hover:border-fuchsia-400/60 transition">
      <h3 className="text-fuchsia-400 font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{text}</p>
    </div>
  );
}

function FunZone() {
  return (
    <Section id="fun" title="A Little Masti">
      <div className="grid md:grid-cols-3 gap-6">
        <FunCard
          title="Currently Building"
          text="A portfolio that does not look like a template copied from YouTube."
          rotate="-2"
        />
        <FunCard
          title="Developer Mood"
          text="90% debugging, 10% confidence, 100% comeback energy."
          rotate="2"
        />
        <FunCard
          title="Mission"
          text="Build projects, crack placement, and make the internet remember my name."
          rotate="-2"
        />
      </div>
    </Section>
  );
}

function FunCard({ title, text, rotate }) {
  return (
    <motion.div
      whileHover={{ rotate: Number(rotate), scale: 1.03 }}
      className="bg-gradient-to-br from-zinc-950/90 via-pink-950/20 to-zinc-950/90 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-pink-400 transition"
    >
      <h3 className="text-2xl font-black mb-4">{title}</h3>
      <p className="text-gray-400 leading-7">{text}</p>
    </motion.div>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Tech Stack">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
        {skills.map((skill) => (
          <motion.div
            whileHover={{ y: -12, scale: 1.05 }}
            key={skill.name}
            className="group bg-gradient-to-br from-zinc-950/90 via-purple-950/10 to-zinc-950/90 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl hover:border-fuchsia-400 transition"
          >
            <div className="text-4xl md:text-5xl text-gray-300 group-hover:text-fuchsia-400 transition mb-5">
              {skill.icon}
            </div>

            <h3 className="text-lg md:text-xl font-bold">{skill.name}</h3>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-emerald-500/10 py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap w-max"
        >
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={`${skill.name}-${index}`}
              className="text-gray-300 text-sm md:text-base"
            >
              ✦ {skill.name}
            </span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Web Apps",
      text: "Modern React interfaces with responsive layout and clean component structure.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      text: "Mobile-first websites that look clean on phone, tablet and desktop.",
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Polish",
      text: "Better spacing, typography, sections, colors, motion and user experience.",
    },
    {
      icon: <FaDatabase />,
      title: "Firebase Integration",
      text: "Auth, database-ready structure and project-level Firebase setup.",
    },
    {
      icon: <FaBolt />,
      title: "Performance Cleanup",
      text: "Cleaner code, optimized UI behavior and lighter external dependency usage.",
    },
    {
      icon: <FaMagic />,
      title: "Portfolio / Landing Pages",
      text: "Premium portfolio, business landing pages and project showcases.",
    },
  ];

  return (
    <Section id="services" title="What I Can Build">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -12, scale: 1.03 }}
            className="bg-gradient-to-br from-zinc-950/90 via-cyan-950/10 to-zinc-950/90 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400 transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center justify-center text-2xl mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-black mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-7">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function TerminalSection() {
  const commands = useMemo(
    () => [
      { cmd: "whoami", output: "Shahil Sharma — Final Year CSE Student" },
      {
        cmd: "skills --top",
        output: "React | Firebase | Tailwind | JavaScript | UI/UX",
      },
      {
        cmd: "mission",
        output: "Build useful products. Crack placement. Keep upgrading.",
      },
      {
        cmd: "status",
        output: "Open to internships, fresher roles and frontend opportunities.",
      },
    ],
    []
  );

  return (
    <Section id="terminal" title="Interactive Terminal">
      <div className="bg-zinc-950/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
          </div>

          <p className="text-gray-400 text-sm">shahil-dev-terminal</p>
        </div>

        <div className="p-6 md:p-8 font-mono text-sm md:text-base space-y-6">
          {commands.map((line, index) => (
            <motion.div
              key={line.cmd}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <p className="text-emerald-400">
                <span className="text-fuchsia-400">shahil@portfolio</span>:~${" "}
                {line.cmd}
              </p>
              <p className="text-gray-300 mt-2">{line.output}</p>
            </motion.div>
          ))}
        </div>
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
      className="group bg-gradient-to-br from-zinc-950/90 via-purple-950/10 to-zinc-950/90 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl hover:border-fuchsia-400 transition overflow-hidden cursor-pointer"
    >
      <div className="relative h-64 md:h-80 mb-8 rounded-3xl overflow-hidden border border-white/10 bg-black/40">
        <img
          src={project.images[0]}
          alt={`${project.title} screenshot 1`}
          loading="lazy"
          className="absolute top-5 left-5 w-[78%] h-[58%] object-cover rounded-2xl border border-white/10 shadow-2xl transition duration-500 group-hover:scale-105 group-hover:-rotate-1"
        />

        <img
          src={project.images[1]}
          alt={`${project.title} screenshot 2`}
          loading="lazy"
          className="absolute bottom-5 right-5 w-[78%] h-[58%] object-cover rounded-2xl border border-white/10 shadow-2xl transition duration-500 group-hover:scale-105 group-hover:rotate-1"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-emerald-500/10 pointer-events-none"></div>
      </div>

      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 className="text-2xl md:text-3xl font-black">{project.title}</h3>

        <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
          {project.status}
        </span>
      </div>

      <p className="text-gray-400 leading-7 mb-5">{project.desc}</p>
      <p className="text-sm text-fuchsia-300 mb-6">{project.tech}</p>

      <div className="flex flex-wrap gap-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-5 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-xl text-sm font-bold hover:scale-105 transition flex items-center gap-2"
          >
            Live Demo <FaExternalLinkAlt className="text-xs" />
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-5 py-3 border border-white/20 rounded-xl text-sm hover:border-fuchsia-400 transition flex items-center gap-2"
          >
            GitHub <FaGithub />
          </a>
        )}
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

                <p className="text-fuchsia-300 mt-3">{project.tech}</p>
              </div>

              <button
                onClick={onClose}
                className="min-w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:border-fuchsia-400 transition"
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
                  loading="lazy"
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
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-xl font-bold hover:scale-105 transition flex items-center gap-2"
                >
                  Open Live Demo <FaExternalLinkAlt />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-4 border border-white/20 rounded-xl font-bold hover:border-fuchsia-400 transition flex items-center gap-2"
                >
                  View GitHub <FaGithub />
                </a>
              )}
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
        <div className="bg-gradient-to-br from-zinc-950/90 via-purple-950/20 to-zinc-950/90 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
          <h3 className="text-3xl font-black mb-2">Leistung Technology</h3>

          <p className="text-fuchsia-400 font-semibold mb-6">
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

        <div className="bg-gradient-to-br from-zinc-950/90 via-emerald-950/10 to-zinc-950/90 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
          <h3 className="text-3xl font-black mb-2">Leadership & Activities</h3>

          <p className="text-emerald-400 font-semibold mb-6">
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
      <div className="bg-gradient-to-br from-zinc-950/90 via-fuchsia-950/20 to-zinc-950/90 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
        <h3 className="text-3xl font-black mb-2">
          Roorkee Institute of Technology
        </h3>

        <p className="text-fuchsia-400 font-semibold mb-6">
          B.Tech in Computer Science & Engineering · Aug 2022 - Jul 2026
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard
            title="Core Subjects"
            text="Data Structures, Web Development, Programming Fundamentals, DBMS and OOPS."
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
            className="bg-gradient-to-br from-zinc-950/90 via-emerald-950/10 to-zinc-950/90 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-emerald-400 transition"
          >
            <h3 className="text-2xl font-black mb-4 text-emerald-400">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-7">{item.desc}</p>
          </motion.div>
        ))}
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
      link: "https://leetcode.com/u/sharmashahil18/",
    },
    {
      name: "HackerRank",
      icon: <SiHackerrank />,
      desc: "Coding practice and programming skill profile.",
      link: "https://www.hackerrank.com/profile/iconicshahil18",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      desc: "Professional profile and career updates.",
      link: "https://www.linkedin.com/in/shahil-sharma-7a57b2258/",
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
            className="bg-gradient-to-br from-zinc-950/90 via-purple-950/10 to-zinc-950/90 border border-white/10 rounded-3xl p-7 backdrop-blur-xl hover:border-fuchsia-400 transition block"
          >
            <div className="text-5xl text-fuchsia-400 mb-5">
              {profile.icon}
            </div>

            <h3 className="text-2xl font-black mb-4">{profile.name}</h3>

            <p className="text-gray-400 leading-7">{profile.desc}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function GithubStats() {
  const githubCards = [
    {
      label: "GitHub Profile",
      value: "Shahil-18",
      desc: "Main development profile",
    },
    {
      label: "Projects Built",
      value: "4+",
      desc: "React, Firebase, HTML/CSS/JS projects",
    },
    {
      label: "Portfolio Status",
      value: "Live",
      desc: "Hosted on GitHub Pages",
    },
    {
      label: "Focus Area",
      value: "Frontend",
      desc: "React, UI/UX and responsive web apps",
    },
  ];

  return (
    <Section id="github" title="GitHub Activity">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {githubCards.map((card) => (
          <motion.div
            key={card.label}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-gradient-to-br from-zinc-950/90 via-fuchsia-950/10 to-zinc-950/90 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-fuchsia-400 transition"
          >
            <p className="text-gray-500 text-sm mb-3">{card.label}</p>

            <h3 className="text-3xl font-black text-fuchsia-400 mb-4">
              {card.value}
            </h3>

            <p className="text-gray-400 leading-7">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 bg-gradient-to-br from-zinc-950/90 via-cyan-950/10 to-zinc-950/90 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-black mb-4">Explore My Codebase</h3>

            <p className="text-gray-400 leading-8">
              My GitHub contains my web development projects, experiments,
              portfolio source code and practice work. I keep improving my
              projects as I learn new tools and better development practices.
            </p>
          </div>

          <div className="flex md:justify-end">
            <a
              href="https://github.com/Shahil-18"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-xl font-bold hover:scale-105 transition"
            >
              <FaGithub />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function WhyHireMe() {
  const reasons = [
    {
      title: "Practical Project Builder",
      desc: "I focus on real usable projects, not just static pages.",
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
      desc: "Internship and club coordination improved teamwork and communication.",
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
            className="relative bg-gradient-to-br from-zinc-950/90 via-purple-950/10 to-zinc-950/90 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-fuchsia-400 transition overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-fuchsia-500/20 blur-2xl rounded-full"></div>

            <span className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 font-black mb-6">
              0{index + 1}
            </span>

            <h3 className="text-2xl font-black mb-4">{reason.title}</h3>

            <p className="text-gray-400 leading-7">{reason.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 bg-gradient-to-br from-zinc-950/90 via-emerald-950/10 to-zinc-950/90 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl text-center">
        <h3 className="text-3xl md:text-4xl font-black mb-5">
          I don’t just write code. I build digital experiences.
        </h3>

        <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto mb-8">
          My goal is to join a team where I can learn, contribute, improve fast
          and build meaningful products with strong UI and clean functionality.
        </p>

        <a
          href="#contact"
          className="inline-flex px-10 py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-xl font-bold hover:scale-105 transition"
        >
          Let’s Work Together
        </a>
      </div>
    </Section>
  );
}

function QuickStats() {
  const stats = [
    {
      value: "4+",
      label: "Projects Built",
      desc: "Real web projects with UI, logic and deployment",
    },
    {
      value: "12+",
      label: "Tech Skills",
      desc: "React, Firebase, Tailwind, JavaScript and more",
    },
    {
      value: "1",
      label: "Internship",
      desc: "Software Developer & Product Designer Intern",
    },
    {
      value: "100%",
      label: "Learning Mode",
      desc: "Always improving, building and debugging",
    },
  ];

  return (
    <Section id="stats" title="Quick Stats">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -12, scale: 1.04 }}
            className="bg-gradient-to-br from-zinc-950/90 via-emerald-950/10 to-zinc-950/90 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-emerald-400 transition text-center"
          >
            <h3 className="text-5xl font-black text-emerald-400 mb-4">
              {stat.value}
            </h3>

            <p className="text-xl font-bold mb-3">{stat.label}</p>

            <p className="text-gray-400 leading-7">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function RecruiterCTA() {
  return (
    <Section id="recruiter" title="For Recruiters">
      <div className="relative bg-gradient-to-br from-zinc-950/90 via-fuchsia-950/20 to-zinc-950/90 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-fuchsia-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-fuchsia-400 font-bold tracking-[5px] uppercase text-sm mb-5">
              Hire Ready Profile
            </p>

            <h3 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Looking for a developer who can build and design?
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              I bring a combination of frontend development, responsive UI,
              Firebase integration, design thinking and real project execution.
            </p>
          </div>

          <div className="bg-black/40 border border-white/10 rounded-3xl p-8">
            <RecruiterPoint
              icon={<FaRocket />}
              title="Fast Project Execution"
              text="Can quickly build modern React interfaces with clean structure."
            />

            <RecruiterPoint
              icon={<FaBriefcase />}
              title="Internship Experience"
              text="Worked as Software Developer & Product Designer Intern."
            />

            <RecruiterPoint
              icon={<FaEnvelope />}
              title="Easy To Contact"
              text="Resume, email form, WhatsApp and GitHub profile are ready."
            />

            <a
              href="#contact"
              className="mt-8 inline-flex w-full justify-center items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-xl font-bold hover:scale-[1.02] transition"
            >
              Contact Me Now <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function RecruiterPoint({ icon, title, text }) {
  return (
    <div className="flex gap-4 mb-5">
      <div className="min-w-12 h-12 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center text-xl">
        {icon}
      </div>

      <div>
        <h4 className="font-black text-lg mb-1">{title}</h4>
        <p className="text-gray-400 leading-7">{text}</p>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <Section id="resume" title="Resume">
      <div className="bg-gradient-to-br from-zinc-950/90 via-purple-950/20 to-zinc-950/90 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl text-center">
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
          className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-xl font-bold hover:scale-105 transition"
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
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
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
      setStatus(
        "Email service failed. Please use WhatsApp or Direct Email below."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" title="Let's Connect">
      <div className="relative grid lg:grid-cols-2 gap-8">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-fuchsia-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/20 blur-3xl rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

        <div className="relative bg-gradient-to-br from-zinc-950/90 via-purple-950/20 to-zinc-950/90 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-fuchsia-500/20 blur-3xl rounded-full"></div>

          <h3 className="text-3xl md:text-4xl font-black mb-5">
            Send me a message
          </h3>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            Open for internships, placements and exciting web development
            projects. You can contact me through form, WhatsApp, email or
            GitHub.
          </p>

          <p className="text-emerald-400 font-semibold mb-8">
            Reply fast karta hoon... bas net slow na ho 😄
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 bg-green-500/15 border border-green-400/30 rounded-xl hover:bg-green-500/25 hover:border-green-400 transition flex items-center justify-center gap-3 font-bold text-green-300"
            >
              <FaWhatsapp />
              WhatsApp Me
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="px-6 py-4 bg-fuchsia-500/15 border border-fuchsia-400/30 rounded-xl hover:bg-fuchsia-500/25 hover:border-fuchsia-400 transition flex items-center justify-center gap-3 font-bold text-fuchsia-300"
            >
              <FaEnvelope />
              Direct Email
            </a>

            <button
              onClick={copyEmail}
              className="px-6 py-4 bg-cyan-500/10 border border-cyan-400/30 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-400 transition flex items-center justify-center gap-3 font-bold text-cyan-300"
              type="button"
            >
              {copied ? <FaCheck /> : <FaCopy />}
              {copied ? "Copied" : "Copy Email"}
            </button>

            <a
              href="https://github.com/Shahil-18"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 bg-white/10 border border-white/10 rounded-xl hover:border-pink-400 hover:bg-pink-500/10 transition flex items-center justify-center gap-3 font-bold text-gray-200"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>

        <form
          onSubmit={sendEmail}
          className="relative bg-gradient-to-br from-zinc-950/90 via-fuchsia-950/20 to-zinc-950/90 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-fuchsia-500/20 blur-3xl rounded-full"></div>

          <Input
            label="Your Name"
            name="user_name"
            type="text"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <Input
            label="Your Email"
            name="user_email"
            type="email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <div className="mb-6 relative z-10">
            <label className="block text-sm text-gray-400 mb-2">Message</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Write your message..."
              className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-fuchsia-400 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="relative z-10 w-full px-8 py-4 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-emerald-400 rounded-xl font-bold hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-fuchsia-500/20"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <div className="relative z-10 mt-5 text-center">
              <p className="text-emerald-400 font-semibold mb-4">{status}</p>

              {status.includes("failed") || status.includes("Email service") ? (
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/15 border border-green-400/30 rounded-xl text-green-300 font-bold hover:bg-green-500/25 transition"
                >
                  <FaWhatsapp />
                  Continue on WhatsApp
                </a>
              ) : null}
            </div>
          )}
        </form>
      </div>
    </Section>
  );
}

function Input({ label, name, type, value, onChange, placeholder }) {
  return (
    <div className="mb-5 relative z-10">
      <label className="block text-sm text-gray-400 mb-2">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-fuchsia-400 transition"
      />
    </div>
  );
}

function PortfolioAssistant() {
  const [open, setOpen] = useState(false);

  const quickActions = [
    {
      label: "Projects",
      icon: <FaLaptopCode />,
      href: "#projects",
      type: "internal",
    },
    {
      label: "Resume",
      icon: <FaDownload />,
      href: `${BASE_URL}resume.pdf`,
      type: "file",
    },
    {
      label: "Skills",
      icon: <FaCode />,
      href: "#skills",
      type: "internal",
    },
    {
      label: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/Shahil-18",
      type: "external",
    },
    {
      label: "WhatsApp",
      icon: <FaWhatsapp />,
      href: WHATSAPP_LINK,
      type: "external",
    },
    {
      label: "Contact",
      icon: <FaEnvelope />,
      href: "#contact",
      type: "internal",
    },
  ];

  return (
    <div className="fixed left-5 bottom-5 z-[95]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="mb-4 w-[320px] max-w-[calc(100vw-40px)] bg-zinc-950/95 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl"
          >
            <div className="relative p-5 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-emerald-500/20 border-b border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/20 blur-3xl rounded-full"></div>

              <div className="relative flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-2xl shadow-lg shadow-fuchsia-500/30">
                  <FaRobot />
                </div>

                <div>
                  <h3 className="font-black text-xl">S Bot ⚡</h3>
                  <p className="text-gray-400 text-sm">
                    Shahil's portfolio assistant
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="ml-auto w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                  aria-label="Close assistant"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            <div className="p-5">
              <div className="bg-black/40 border border-white/10 rounded-2xl p-4 mb-4">
                <p className="text-gray-300 leading-7 text-sm">
                  Hey 👋 I’m <span className="text-fuchsia-400">S Bot</span>.
                  I can help you explore Shahil’s projects, skills, resume and
                  contact options.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target={
                      action.type === "external" || action.type === "file"
                        ? "_blank"
                        : "_self"
                    }
                    rel="noreferrer"
                    className="px-4 py-3 rounded-2xl bg-white/10 border border-white/10 hover:border-fuchsia-400 hover:bg-fuchsia-500/10 transition flex items-center justify-center gap-2 text-sm font-bold"
                    onClick={() => {
                      if (action.type === "internal") setOpen(false);
                    }}
                  >
                    {action.icon}
                    {action.label}
                  </a>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-full px-5 py-4 rounded-2xl bg-green-500/15 border border-green-400/30 text-green-300 hover:bg-green-500/25 transition flex items-center justify-center gap-3 font-black"
              >
                <FaPaperPlane />
                Ask Shahil Directly
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-emerald-400 flex items-center justify-center text-2xl shadow-2xl shadow-fuchsia-500/30 border border-white/20"
        aria-label="Open portfolio assistant"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 animate-pulse"></span>
        {open ? <FaTimes /> : <FaComments />}
      </motion.button>
    </div>
  );
}

function BackToTop({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-[90] w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function Footer() {
  const footerLinks = [
    { name: "Projects", href: "#projects" },
    { name: "GitHub", href: "https://github.com/Shahil-18" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shahil-sharma-7a57b2258/",
    },
    { name: "LeetCode", href: "https://leetcode.com/u/sharmashahil18/" },
    { name: "Resume", href: `${BASE_URL}resume.pdf` },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-12 bg-gradient-to-r from-purple-950/10 via-black to-fuchsia-950/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-black mb-3">
              Shahil<span className="text-fuchsia-400">.</span>
            </h3>

            <p className="text-gray-500 leading-7">
              Full Stack Developer • React Developer • UI/UX Learner
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="text-gray-400 hover:text-fuchsia-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:text-right">
            <p className="text-gray-500">
              Built with React, Tailwind CSS and thoda sa masti.
            </p>

            <p className="text-fuchsia-400 font-bold mt-2">
              © 2026 Shahil Sharma
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="min-h-[80vh] flex items-center px-5 md:px-6 py-20 md:py-24 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65 }}
        className="max-w-6xl mx-auto w-full"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-10 md:mb-12">
          <span className="text-fuchsia-400">/</span> {title}
        </h2>

        {children}
      </motion.div>
    </section>
  );
}

export default App;