import Link from 'next/link';

export const metadata = {
  title: 'SmartBox - Product',
  description: 'Enhance your existing CCTV infrastructure with AI-powered analytics without needing to replace any cameras.',
};

export default function SmartBoxPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">SmartBox</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Enhance your existing CCTV infrastructure with AI-powered analytics without needing to replace any cameras.
        </p>

        <div className="text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-4">📦</span>
              <div>
                <h3 className="font-semibold">Seamless Integration</h3>
                <p>Connect SmartBox to your existing CCTV cameras, and immediately unlock AI-powered features like object detection and alerting.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-xl mr-4">⚡</span>
              <div>
                <h3 className="font-semibold">Edge Processing</h3>
                <p>All AI processing happens directly on the SmartBox, reducing latency and minimizing cloud reliance for enhanced performance.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-4">🔒</span>
              <div>
                <h3 className="font-semibold">Enhanced Security</h3>
                <p>SmartBox not only provides video analytics but also secures your surveillance system from cyber threats with advanced encryption protocols.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 text-xl mr-4">📡</span>
              <div>
                <h3 className="font-semibold">Remote Monitoring</h3>
                <p>Access real-time analytics and video feeds from anywhere, at any time, ensuring that you&lsquo;re always in control.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Benefits</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li>Upgrade your legacy CCTV system without needing to replace cameras or infrastructure.</li>
            <li>Lower operational costs by processing video data locally on the edge device.</li>
            <li>Quick deployment, saving time and effort during setup and integration with existing systems.</li>
            <li>Gain actionable insights and improved situational awareness through AI-powered detection.</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Ideal For</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ideal for security operations, smart city infrastructure, retail stores, factories, and other industries looking to enhance surveillance capabilities.
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
