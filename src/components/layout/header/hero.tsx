"use client";

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-white h-screen dark:bg-[#000100] bg-opacity-30 py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 h-full">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 h-full">
          <div>
            {/* <p className="text-base font-semibold tracking-wider light:text-blue-600 uppercase"></p> */}
            <h1 className="mt-4 text-4xl font-bold light:text-black lg:mt-8 sm:text-6xl">
              The Future of Surveillance is Here...
            </h1>
            <p className="mt-4 text-base light:text-black lg:mt-8 sm:text-xl">
              Samtek SmartBox is an all-in-one AI-powered surveillance solution
              that transforms your traditional CCTV system into an intelligent
              monitoring platform.
            </p>

            <a
              href="#"
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black dark:text-gray-900  transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
            >
              Free Consultation Now!
              <svg
                className="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>

            {/* <p className="mt-5 light:text-gray-600">
              Already joined us?{' '}
              <a href="#" className="text-black transition-all duration-200 hover:underline">
                Log in
              </a>
            </p> */}
          </div>

          <div>
            <video width="100%" controls={false} autoPlay muted loop>
              <source src="/videos/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <Image className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="Hero" width={700} height={500} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
