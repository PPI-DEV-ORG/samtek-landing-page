import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Products - Samtek',
  description: 'Explore our AI-powered surveillance solutions built for performance and scalability.',
};

const products = [
  {
    title: 'Dashboard',
    description: 'A real-time control center that gives you full visibility into your surveillance system, alerts, and analytics results.',
    icon: '📊',
    path: '/products/dashboard',
  },
  {
    title: 'AI Analytics',
    description: 'Powerful and customizable computer vision algorithms tailored to your specific security or business needs.',
    icon: '🧠',
    path: '/products/ai-analytics',
  },
  {
    title: 'SmartBox',
    description: 'An edge device that enhances your existing CCTV with AI analytics — no camera replacement required.',
    icon: '📦',
    path: '/products/smartbox',
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Products</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">Explore our AI-powered surveillance solutions built for performance and scalability.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{product.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{product.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{product.description}</p>
              <Link href={product.path}>
                <Button className="mt-6 px-4 py-2rounded-md transition-colors duration-200">Learn More</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
