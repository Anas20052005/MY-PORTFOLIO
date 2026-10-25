import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-emerald-400 mb-12"
      >
        About Me
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -4 }}
        className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-lg hover:border-emerald-500/50 transition-colors duration-300"
      >
        <motion.p variants={item} className="text-slate-300 leading-8 text-lg">
          I'm <span className="text-emerald-400 font-semibold">Anas Zakir Attar</span>,
          a passionate Java Full Stack Developer and a Final Year Computer
          Engineering student at Dilkap Research Institute of Engineering and
          Management Studies.
        </motion.p>

        <motion.p variants={item} className="text-slate-400 leading-8 mt-6">
          I'm especially interested in{" "}
          <span className="text-emerald-300 font-medium">healthcare interoperability</span>.
          I build backend systems with Java, Spring Boot and MySQL that convert
          HL7 v2 messages into FHIR-compliant resources, so patient data can be
          exchanged securely and reliably between different hospitals and
          systems. My work covers REST APIs, JWT-based authentication, FHIR
          delivery to destination servers, audit logging, and Docker-based
          deployment.
        </motion.p>

        <motion.p variants={item} className="text-slate-400 leading-8 mt-6">
          My goal is to become a skilled Software Engineer by continuously
          learning new technologies and building real-world projects that solve
          practical problems.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default About;
