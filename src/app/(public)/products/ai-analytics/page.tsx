import VideoTabs from "./_components/video-tabs";

export const metadata = {
  title: "AI Analytics - Product",
  description:
    "Transform your video surveillance system into a smart, AI-powered solution that provides real-time insights and advanced analytics.",
};

export default function AIAnalyticsPage() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-purple-500 opacity-20 rounded-full blur-2xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Supercharge Your Surveillance with{" "}
              <span className="text-blue-400">AI Analytics</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Whether you need smarter surveillance, real-time alerts, or
              intelligent insights, our custom AI solutions are built to fit
              your exact operational needs.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition">
                Get Started
              </button>
              <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-gray-200 transition">
                Request Demo
              </button>
            </div>
          </div>

          <div className="w-full mb-10 lg:mb-0">
            <VideoTabs />
          </div>
        </div>
      </div>
    </>
  );
}
