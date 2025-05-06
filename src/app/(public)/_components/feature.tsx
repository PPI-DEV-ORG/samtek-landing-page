import Image from 'next/image';
import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: 'Upgrade your existing CCTV without replacing cameras',
    description: 'Integrate advanced analytics and AI capabilities into your current surveillance infrastructure.',
    icon: (
      <svg className="flex-shrink-0 text-green-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
      </svg>
    ),
  },
  {
    title: 'Easy deployment',
    description: 'Samtek SmartBox is designed for quick installation and seamless integration with your existing systems.',
    icon: (
      <svg className="flex-shrink-0 text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Custom AI detection base on your need',
    description: 'Tailor your surveillance system to detect what matters most to you.',
    icon: (
      <svg className="flex-shrink-0 text-red-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export const FeatureSection: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50 dark:bg-black sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-white uppercase">Include 10+ existing Analytics in smartbox</p>
          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Why Choose Us ?</h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                {feature.icon}
                <div className="ml-5">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-base text-gray-600 dark:text-gray-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <Image height={500} width={700} className="w-full  shadow-xl" src="/images/img-smartbox-dashboard.png" alt="Dashboard" />
          </div>
        </div>
      </div>
    </section>
  );
};
