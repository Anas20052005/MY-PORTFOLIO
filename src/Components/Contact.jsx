import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-400">
          Contact Me
        </h2>

        <p className="text-center text-slate-400 mt-4 mb-14">
          I'm actively looking for Internship and Full Stack Developer opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
          >
            <FaEnvelope className="text-emerald-400 text-3xl mb-4" />

            <h3 className="text-xl font-semibold">
              Email
            </h3>

            <a
              href="mailto:hackeranas05@gmail.com"
              className="text-slate-400 hover:text-emerald-400 break-all"
            >
              hackeranas05@gmail.com
            </a>

          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
          >
            <FaPhoneAlt className="text-emerald-400 text-3xl mb-4" />

            <h3 className="text-xl font-semibold">
              Phone
            </h3>

            <p className="text-slate-400">
              +91 7021096181
            </p>

          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
          >
            <FaMapMarkerAlt className="text-emerald-400 text-3xl mb-4" />

            <h3 className="text-xl font-semibold">
              Location
            </h3>

            <p className="text-slate-400">
              Kalyan, Maharashtra, India
            </p>

          </motion.div>

          {/* LinkedIn */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
          >
            <FaLinkedin className="text-emerald-400 text-3xl mb-4" />

            <h3 className="text-xl font-semibold">
              LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/in/anas-attar-400b062a8/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 break-all"
            >
              linkedin.com/in/anas-attar-400b062a8
            </a>

          </motion.div>

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <a
            href="/resume.pdf"
            download
            className="bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-3 rounded-xl font-semibold transition"
          >
            Download Resume
          </a>

          <a
            href="mailto:hackeranas05@gmail.com"
            className="border border-emerald-500 hover:bg-emerald-500 hover:text-black px-8 py-3 rounded-xl transition"
          >
            Send Email
          </a>

        </div>

      </motion.div>
    </section>
  );
}

export default Contact;