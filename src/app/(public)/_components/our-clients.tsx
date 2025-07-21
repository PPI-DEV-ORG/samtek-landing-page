'use client';

import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const logos = ['logo-1.png', 'logo-2.png', 'logo-3.png', 'logo-4.png', 'logo-5.png', 'logo-6.png', 'logo-7.png', 'logo-8.png'];

export const OurClientsSection: React.FC = () => {
  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-12 gap-x-3">
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

          <div className="lg:col-span-3 xl:col-span-3 flex items-center">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {logos.map((logo, index) => (
                  <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-md shadow-md h-28">
                      <Image width={100} height={100} src={`/images/our-clients/${index + 1}.png`} alt={`Logo ${index + 1}`} className="object-contain h-16 w-auto" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
