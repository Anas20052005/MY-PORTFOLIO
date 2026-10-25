import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpg";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-6 pt-36 pb-20 flex flex-col-reverse md:flex-row items-center justify-between gap-16"
    >
      {/* Left Side */}
      <div className="flex-1">

        <p className="text-emerald-400 text-lg mb-3">
          👋 Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          ANAS
          <br />
          <span className="text-emerald-400">
            ZAKIR ATTAR
          </span>
        </h1>

        <h2 className="text-2xl mt-6 text-slate-300">
          Java Full Stack Developer
        </h2>

        <p className="text-slate-400 leading-8 mt-6 max-w-xl">
          Passionate Java Full Stack Developer focused on building
          scalable, responsive and modern web applications using
          Java, Spring Boot, React.js, Node.js, Express.js,
          MongoDB, MySQL and PostgreSQL.
          I enjoy solving real-world problems and continuously
          learning new technologies.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">

          <a
            href="/resume.pdf"
            download
            className="bg-emerald-500 hover:bg-emerald-600 text-black px-7 py-3 rounded-xl font-semibold transition"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="border border-emerald-500 px-7 py-3 rounded-xl hover:bg-emerald-500 hover:text-black transition"
          >
            Contact Me
          </a>

        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-8">

          <a
            href="https://www.linkedin.com/in/anas-attar-400b062a8/"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-slate-300 hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:hackeranas05@gmail.com"
            className="text-3xl text-slate-300 hover:text-emerald-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center"
          >
            <h3 className="text-3xl font-bold text-emerald-400">
              15+
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Technologies
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center"
          >
            <h3 className="text-3xl font-bold text-emerald-400">
              5+
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Projects
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center"
          >
            <h3 className="text-3xl font-bold text-emerald-400">
              2027
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Graduation
            </p>
          </motion.div>

        </div>

      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center">

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >

          <div className="absolute -inset-4 bg-emerald-500 blur-3xl opacity-30 rounded-full"></div>

          <img
            src={profile}
            alt="Anas Zakir Attar"
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-emerald-500 shadow-2xl"
          />

        </motion.div>

      </div>

    </motion.section>
  );
}

export default Hero;