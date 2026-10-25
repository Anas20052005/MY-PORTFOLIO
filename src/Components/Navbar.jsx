import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-emerald-400 tracking-wide"
        >
          ANAS
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-slate-300 hover:text-emerald-400 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:block bg-emerald-500 hover:bg-emerald-600 text-black px-5 py-2 rounded-lg font-semibold transition"
        >
          Resume
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-slate-300 hover:bg-slate-800 hover:text-emerald-400 transition"
            >
              {link.name}
            </a>
          ))}

          <div className="p-6">
            <a
              href="/resume.pdf"
              download
              className="block text-center bg-emerald-500 hover:bg-emerald-600 text-black py-3 rounded-lg font-semibold transition"
            >
              Download Resume
            </a>
          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;