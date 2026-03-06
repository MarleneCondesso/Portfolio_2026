export default function SideEmail() {
  return (
    <div className="bottom-10 top-24 w-20 left-0 lg:fixed lg:block hidden z-50">
      <div className="flex flex-col h-full items-center justify-center">
        {/* Email Section */}
        <div className="z-40 h-full flex items-center">
          <div className="-rotate-90 flex z-40">
            <a
              href="mailto:marleneflima.official@gmail.com"
              className="text-sm font-semibold text-slate-400 hover:text-pink-400 whitespace-nowrap cursor-pointer transition-all duration-300 hover:tracking-wider"
            >
              marleneflima.official@gmail.com
            </a>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-col h-full items-center">
          {/* Gradient Line */}
          <div className="relative h-full w-[0.15rem] mt-4 mb-4 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500 to-purple-500 animate-pulse"></div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col text-white gap-5 bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-4 rounded-2xl z-40 border border-slate-700/50 shadow-lg shadow-pink-500/10">
            <a
              href="https://github.com/MarleneCondesso"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 hover:-translate-y-1 relative"
            >
              <div className="absolute inset-0 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              <i className="ri-github-fill text-lg text-slate-300 group-hover:text-white relative z-10 transition-colors duration-300"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/marleneflima/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 hover:-translate-y-1 relative"
            >
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              <i className="ri-linkedin-fill text-lg text-slate-300 group-hover:text-white relative z-10 transition-colors duration-300"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
