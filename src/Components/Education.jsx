function Education() {
  return (
    <section
      id="education"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center text-emerald-400 mb-12">
        Education
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-emerald-400 transition duration-300">

        <h3 className="text-3xl font-bold">
          Bachelor of Engineering (B.E.)
        </h3>

        <p className="text-xl text-emerald-400 mt-2">
          Computer Engineering
        </p>

        <p className="text-slate-300 mt-4 text-lg">
          Dilkap Research Institute of Engineering and Management Studies
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-slate-800 rounded-xl p-5">
            <h4 className="text-lg font-semibold text-white">
              Current Semester
            </h4>
            <p className="text-slate-400 mt-2">
              Final Year • 7th Semester
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-5">
            <h4 className="text-lg font-semibold text-white">
              Expected Graduation
            </h4>
            <p className="text-slate-400 mt-2">
              2027
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;