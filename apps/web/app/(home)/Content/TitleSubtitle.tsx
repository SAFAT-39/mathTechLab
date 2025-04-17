const TitleSubtitle = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      {/* Math symbols decoration */}
      <div className="absolute top-1/4 left-1/4 text-6xl text-purple-200 opacity-30">∑</div>
      <div className="absolute top-1/3 right-1/3 text-5xl text-purple-200 opacity-30">π</div>
      <div className="absolute bottom-1/4 right-1/4 text-7xl text-purple-200 opacity-30">∫</div>
      <div className="absolute bottom-1/3 left-1/3 text-6xl text-purple-200 opacity-30">√</div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
          Math Made Simple
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-purple-700 mb-6">
          Welcome to <span className="text-purple-600">MathTechLab</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          MathTechLab is your go-to platform for interactive math games,
          educational tools, and insightful blogs that bridge the gap between
          mathematics and technology. Whether you're mastering basic times tables,
          challenging yourself with math puzzles, or exploring advanced concepts
          in machine learning, we've got you covered.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our mission is to make learning math engaging and accessible for all.
          Explore our games, sharpen your skills, and discover the power of math
          in technology!
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="/calculators" className="group px-8 py-4 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 hover:shadow-lg flex items-center">
            <span>Try Our Calculators</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="/games" className="group px-8 py-4 bg-white text-purple-600 font-medium rounded-lg shadow-md hover:bg-purple-50 transition-all duration-300 hover:shadow-lg border border-purple-200 flex items-center">
            <span>Play Math Games</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TitleSubtitle;
