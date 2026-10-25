import { motion } from "framer-motion";

const techStack = ["Java", "Spring Boot", "MySQL", "JWT", "Docker"];

const highlights = [
  "Exchange patient data between different hospitals",
  "Convert HL7 v2 messages to FHIR R4 and deliver them to FHIR servers",
  "Maintain complete audit logs of every conversion and delivery",
];

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-400">
          Featured Project
        </h2>

        <p className="text-center text-slate-400 mt-4 mb-14">
          One of my best Backend &amp; Healthcare Integration Projects
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-emerald-500 blur-3xl opacity-20 rounded-3xl animate-pulse"></div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-slate-800 shadow-2xl"
            >
              <img
                src="/project.png"
                alt="Healthcare Engine Dashboard"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block bg-emerald-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-5"
            >
              Backend / Healthcare Project
            </motion.span>

            <motion.h3 variants={fadeUp} className="text-4xl font-bold">
              HEALTHCARE ENGINE
            </motion.h3>

            <motion.p variants={fadeUp} className="text-slate-400 leading-8 mt-6">
              Healthcare Engine is an HL7 to FHIR interoperability platform
              that lets hospitals exchange patient data securely. It converts
              HL7 v2 messages into FHIR R4 resources, sends them to configured
              FHIR destinations, and keeps a full audit trail of every
              operation.
            </motion.p>

            <ul className="mt-6 space-y-3">
              {highlights.map((line) => (
                <motion.li
                  key={line}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 shrink-0"></span>
                  {line}
                </motion.li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-8">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-full text-emerald-300 hover:bg-emerald-500 hover:text-black transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex gap-5 mt-10">
              <motion.a
                href="https://healthcare-interop-engine-frontend.vercel.app/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-black px-7 py-3 rounded-xl font-semibold transition-colors"
              >
                🚀 Live Demo
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
