import Link from 'next/link';

export const metadata = {
  title: 'AI Analytics - Product',
  description: 'Transform your video surveillance system into a smart, AI-powered solution that provides real-time insights and advanced analytics.',
};

export default function AIAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AI Analytics</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Transform your video surveillance system into a smart, AI-powered solution that provides real-time insights and advanced analytics.
        </p>

        <div className="text-left mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-4">🎯</span>
              <div>
                <h3 className="font-semibold">Custom Detection Models</h3>
                <p>Train AI to recognize events specific to your environment (e.g., people, vehicles, fire, PPE compliance).</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-4">🧠</span>
              <div>
                <h3 className="font-semibold">Edge & Cloud Processing</h3>
                <p>Process data directly on SmartBox or integrate with cloud services for greater flexibility.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-4">📈</span>
              <div>
                <h3 className="font-semibold">Real-Time Alerts</h3>
                <p>Get instant notifications based on anomalies detected, whether through our dashboard or third-party integrations.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Benefits</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li>Reduce operator fatigue by automating surveillance tasks with AI.</li>
            <li>Gain better situational awareness with advanced detection and real-time analytics.</li>
            <li>Adaptable for a wide range of applications such as retail, manufacturing, public safety, and more.</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Ideal For</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Organizations looking to enhance their video monitoring with intelligent insights, operational safety, and advanced surveillance analytics.
          </p>
        </div>

        <div className="mt-12">
          <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
            Contact Us for More Information
          </Link>
        </div>
      </div>
    </div>
  );
}
