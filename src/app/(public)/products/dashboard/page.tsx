export const metadata = {
  title: "Dashboard - Product",
  description:
    "A real-time control center that gives you full visibility into your surveillance system, alerts, and analytics results.",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black overflow-hidden">
      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div
            className="w-[500px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] 
                    bg-blue-500/20 blur-[40px] rounded-full absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
          />

          <div
            className="w-[550px] sm:w-[650px] md:w-[750px] lg:w-[850px] h-[550px] sm:h-[650px] md:h-[750px] lg:h-[850px] 
                    border border-blue-400/20 rounded-full absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
          />

          <div
            className="w-[650px] sm:w-[750px] md:w-[850px] lg:w-[950px] h-[650px] sm:h-[750px] md:h-[850px] lg:h-[950px] 
                    border border-blue-400/10 rounded-full absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
          />

          <div
            className="w-[750px] sm:w-[850px] md:w-[1000px] lg:w-[1100px] h-[750px] sm:h-[850px] md:h-[1000px] lg:h-[1100px] 
                    border border-blue-400/5 rounded-full absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-4 sm:mb-6">
            Manage Your Surveillance System from One Dashboard
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-12">
            Monitor, analyze, and act — all in one place. Our Dashboard brings
            your entire surveillance system into a single, unified interface.
          </p>

          <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.01]">
            <div
              className="absolute inset-0 z-0 rounded-3xl border border-white/20 
                   bg-white/10 dark:bg-white/5 backdrop-blur-2xl 
                   shadow-[inset_0_0_10px_rgba(255,255,255,0.1),0_4px_30px_rgba(0,0,0,0.3)]"
            />

            <img
              className="relative z-10 w-full h-full object-cover rounded-3xl"
              src="/images/img-dashboard.png"
              alt="dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
