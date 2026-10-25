const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "Tailwind CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "DevOps", "GenAI", "Deployment"],
  },
];

function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-emerald-400 mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-400 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-white mb-5">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 px-4 py-2 rounded-full text-sm text-emerald-300 hover:bg-emerald-500 hover:text-black transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;