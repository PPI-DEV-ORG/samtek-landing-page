export const metadata = {
  title: 'Dashboard - Product',
  description: 'A real-time control center that gives you full visibility into your surveillance system, alerts, and analytics results.',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Dashboard</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Monitor, analyze, and act — all in one place. Our Dashboard brings your entire surveillance system into a single, unified interface.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Key Features</h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 list-disc pl-5">
              <li>
                <strong>Live Monitoring:</strong> View live streams from all connected cameras in real-time, optimized for responsiveness and clarity.
              </li>
              <li>
                <strong>AI-Powered Alerts:</strong> Instant notifications for object detection, behavior anomalies, or zone breaches.
              </li>
              <li>
                <strong>Analytics & Reports:</strong> Visualize trends, heatmaps, and statistics for smarter surveillance decisions.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Why It Matters</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The Dashboard empowers your security team with real-time data and intelligent alerts, helping you respond quickly and make informed decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Ideal For</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc pl-5">
              <li>Large businesses and facilities</li>
              <li>Security Operation Centers (SOCs)</li>
              <li>Retail chains, factories, and smart cities</li>
              <li>Any user upgrading traditional CCTV systems</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
