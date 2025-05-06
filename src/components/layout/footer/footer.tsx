// Footer.tsx
import Image from 'next/image';
import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: ['About', 'Products', 'Solution', 'Career'],
  },
  {
    title: 'Help',
    links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
  },
  {
    title: 'Resources',
    links: ['Guidline CCTV position'],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 dark:bg-gray-900 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2 flex flex-col gap-3">
            <p className="text-xl font-semibold">PT Safanah Alvan Maksima</p>
            <p className="text-gray-400">Jl. Bintara Jaya VIII, RT.008/RW.009, Bintara Jaya, Kec. Bekasi Barat, Jawa Barat 17136</p>
            <div>
              <p className="text-gray-400">
                Email : <span>contact@samtek.id</span>
              </p>
              <p className="text-gray-400">Whatsapp : 087788856277</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-12">
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <p className="text-base dark:text-gray-500 text-gray-500 font-medium">{section.title}</p>
                  <ul className="mt-8 space-y-4">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-base dark:text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="mt-16 mb-10 dark:border-gray-800" />
        <div className="flex flex-wrap items-center justify-between">
          <div className="md:order-1 auto">
            <div className="flex flex-row gap-2 items-center">
              <Image className="h-8" src="/logo.svg" alt="logo" width={50} height={50} />
              <p className="font-bold text-xl">TEKNOLOGI</p>
            </div>
          </div>

          <ul className="flex items-center space-x-3 md:order-3">
            <li>
              <a
                href="#"
                title=""
                className="flex items-center justify-center dark:text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/samteknologi_id/?hl=en"
                target="_blank"
                title="instagram link"
                className="flex items-center justify-center dark:text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/pt-safanah-alvan-maksima"
                title="linkedin link"
                target="_blank"
                className="flex items-center justify-center dark:text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </li>
          </ul>

          <p className="w-full mt-8 text-sm text-center dark:text-gray-100 md:mt-0 md:w-auto md:order-2">© Copyright 2025, All Rights Reserved by SAMTEK</p>
        </div>
      </div>
    </footer>
  );
};
