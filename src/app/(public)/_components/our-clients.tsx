import Image from 'next/image';
import React from 'react';

const logos = ['logo-1.png', 'logo-2.png', 'logo-3.png', 'logo-4.png', 'logo-5.png', 'logo-6.png', 'logo-7.png', 'logo-8.png'];

export const OurClientsSection: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              1 team.
              <br />
              5+ years.
              <br />
              100+ projects.
              <br />
            </h2>
            <p className="mt-6 text-base text-gray-600 dark:text-gray-100">
              We focus on building systems that deliver results. From seamless integrations to customized AI-powered surveillance, we are here to ensure your security
              needs are met with precision and innovation.
            </p>
          </div>

          <div className="lg:col-span-3 xl:col-span-4">
            <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
              {logos.map((logo, index) => {
                const isHiddenOnSmall = index >= 4;
                return (
                  <div key={logo} className={isHiddenOnSmall ? 'hidden lg:block' : ''}>
                    <Image width={50} height={50} className="object-contain w-full h-8 mx-auto" src={`/images/our-clients/${index + 1}.png`} alt={`Logo ${index + 1}`} />
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-start mt-10 space-x-3 lg:hidden">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
