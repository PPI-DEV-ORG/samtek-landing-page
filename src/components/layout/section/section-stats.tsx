import React from 'react';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Numbers That Reflect Our Impact</h2>
          <p className="mt-3 text-xl leading-relaxed text-gray-600 dark:text-white md:mt-8">
            Behind every number lies a milestone. From breakthrough innovations to trusted deployments, our journey with Samtek SmartBox speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">5+</span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900  dark:text-white">Years in business</p>
            <p className="text-base mt-0.5 text-gray-500  dark:text-white">Creating the successful path</p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">100</span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900  dark:text-white">Customer and partner</p>
            <p className="text-base mt-0.5 text-gray-500  dark:text-white">In last 5 years</p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">47+</span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900  dark:text-white">Site Deployed</p>
            <p className="text-base mt-0.5 text-gray-500  dark:text-white">Working for your success</p>
          </div>
        </div>
      </div>
    </section>
  );
};
