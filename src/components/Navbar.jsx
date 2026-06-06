function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center backdrop-blur-md bg-black/30 border-b border-white/10">

        <h1 className="font-bold text-2xl">
          Shahil<span className="text-purple-400">.</span>
        </h1>

        <div className="flex gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;