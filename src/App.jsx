import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
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
} from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiVercel } from "react-icons/si";

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
];

const projects = [
  {
    title: "Zentry",
    desc: "Peer-to-peer student growth platform with task tracker, habit tracker, resume builder and Firebase auth.",
    tech: "React • Tailwind • Firebase",
    live: "#",
    github: "#",
  },
  {
    title: "AttendBook",
    desc: "Modern attendance management system with responsive dashboard and student record tracking.",
    tech: "React • Tailwind • Firebase",
    live: "#",
    github: "#",
  },
  {
    title: "StreamFlix",
    desc: "Movie discovery platform with authentication, protected routes, watchlist and API integration.",
    tech: "React • Firebase • API",
    live: "#",
    github: "#",
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

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
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
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
      <Projects />
      <Experience />
      <Contact />
      <Footer />
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

  const navItems = ["about", "fun", "skills", "projects", "experience", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">
        <a href="#" className="font-black text-2xl">
          Shahil<span className="text-purple-400">.</span>
        </a>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
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
          href="/resume.pdf"
          download
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-xl hover:border-purple-400 transition text-sm"
        >
          <FaDownload />
          Resume
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6"
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
              href="/resume.pdf"
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
              "Creative Problem Solver",
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
          Final Year Computer Science Engineering student building modern,
          useful and visually impressive web applications with React, Firebase
          and clean UI engineering.
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
            href="/resume.pdf"
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
          I'm Shahil Sharma, a Final Year Computer Science Engineering student
          focused on Full Stack Development. I build modern applications using
          React, Tailwind CSS, Firebase and JavaScript. My goal is to create
          products that are practical, scalable and visually premium.
        </p>
      </div>
    </Section>
  );
}

function FunZone() {
  return (
    <Section id="fun" title="A Little Masti">
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ rotate: -2, scale: 1.03 }}
          className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-black mb-4">Currently Building</h3>
          <p className="text-gray-400 leading-7">
            A portfolio that does not look like a template copied from YouTube.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ rotate: 2, scale: 1.03 }}
          className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-black mb-4">Developer Mood</h3>
          <p className="text-gray-400 leading-7">
            90% debugging, 10% confidence, 100% comeback energy.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ rotate: -2, scale: 1.03 }}
          className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-black mb-4">Mission</h3>
          <p className="text-gray-400 leading-7">
            Build projects, crack placement, and make the internet remember my
            name.
          </p>
        </motion.div>
      </div>
    </Section>
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

function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            whileHover={{ y: -14, scale: 1.02 }}
            key={project.title}
            className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-purple-400 transition"
          >
            <div className="h-40 rounded-2xl bg-gradient-to-br from-purple-500/30 to-emerald-500/20 border border-white/10 mb-6 flex items-center justify-center">
              <span className="text-3xl font-black">{project.title}</span>
            </div>

            <h3 className="text-2xl font-black mb-4">{project.title}</h3>
            <p className="text-gray-400 leading-7 mb-5">{project.desc}</p>
            <p className="text-sm text-purple-300 mb-6">{project.tech}</p>

            <div className="flex gap-3">
              <a
                href={project.live}
                target="_blank"
                className="px-4 py-2 bg-purple-500 rounded-lg text-sm font-bold hover:bg-purple-400 transition"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:border-purple-400 transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="bg-zinc-950/80 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
        <h3 className="text-3xl font-black mb-2">Leistung Technology</h3>
        <p className="text-purple-400 font-semibold mb-6">
          Software Developer & Product Designer Intern · Jul 2024 - Oct 2024
        </p>
        <p className="text-gray-300 text-lg leading-9">
          Worked on website design, UI/UX optimization, product design,
          packaging design and social media marketing strategy.
        </p>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Let's Connect">
      <div className="text-center bg-zinc-950/80 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
        <p className="text-gray-400 text-xl mb-8">
          Open for internships, placements and exciting web development
          projects.
        </p>

        <p className="text-emerald-400 font-semibold mb-8">
          Reply fast karta hoon... bas net slow na ho 😄
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:sharmashahil14@gmail.com"
            className="px-8 py-4 bg-purple-500 rounded-xl font-bold hover:bg-purple-400 hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/sharmashahil14"
            target="_blank"
            className="px-8 py-4 border border-white/20 rounded-xl hover:border-purple-400 transition"
          >
            GitHub
          </a>
        </div>
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