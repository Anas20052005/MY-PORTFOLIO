function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-emerald-400">
            ANAS
          </h2>

          <p className="text-slate-400 mt-2">
            Java Full Stack Developer
          </p>
        </div>

        <div className="text-slate-400 text-center mt-6 md:mt-0">
          © {new Date().getFullYear()} Anas Zakir Attar.
          <br />
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;