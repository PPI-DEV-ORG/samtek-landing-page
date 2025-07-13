export const metadata = {
  title: "SmartBox - Product",
  description:
    "Enhance your existing CCTV infrastructure with AI-powered analytics without needing to replace any cameras.",
};

export default function SmartBoxPage() {
  return (
    <div className="relative bg-[#f9fafb] dark:bg-[#111827] text-gray-800 dark:text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 dark:opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Meet{" "}
            <span className="text-blue-600 dark:text-blue-400">SmartBox</span>,
            Your Connected Companion
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Designed for modern surveillance, SmartBox is an edge AI server that
            enables real-time detection, object tracking, and event alerts
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition">
              Learn More
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 px-6 py-3 rounded-xl font-medium transition">
              Try Demo
            </button>
          </div>
        </div>

        <div className="w-full max-w-md mb-12 md:mb-0">
          <img
            src="/images/smartbox.png"
            alt="SmartBox Device"
            className="w-full h-auto drop-shadow-xl rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
