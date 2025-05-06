export const metadata = {
  title: 'Support - Samtek',
  description: 'Need help? Explore our support resources or contact us for assistance with your SAMTEK Smart Surveillance System.',
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Support</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          We&lsquo;re here to help you get the most out of your SAMTEK Smart Surveillance System. Contact us or explore our resources below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-left">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">📧 Contact Support</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Need direct assistance? Reach out to our technical support team for personalized help.</p>
            <a href="mailto:support@samtek.id" className="text-blue-600 hover:underline">
              support@samtek.id
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-left">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">📚 Documentation</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Learn how to set up and optimize your SmartBox, Dashboard, and AI Analytics.</p>
            <a href="/docs" className="text-blue-600 hover:underline">
              Go to Docs
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-left">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">🛠 Troubleshooting</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Find solutions to common issues with our FAQ and troubleshooting guides.</p>
            <a href="/faq" className="text-blue-600 hover:underline">
              Visit FAQ
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-left">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">💡 Tips & Updates</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Get the latest tips and feature updates for your SAMTEK products.</p>
            <a href="/blog" className="text-blue-600 hover:underline">
              Visit Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
