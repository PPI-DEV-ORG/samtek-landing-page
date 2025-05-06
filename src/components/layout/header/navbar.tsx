'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ToggleTheme } from '@/components/ui/toggle-theme';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import React from 'react';
import { usePathname } from 'next/navigation';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Smart Building',
    href: '#',
    description: 'A smart building is a structure that uses advanced technology to monitor and control various systems.',
  },
  {
    title: 'Retail Analytics',
    href: '#',
    description: 'Retail analytics refers to the process of collecting and analyzing data related to retail operations.',
  },
  {
    title: 'Smart Surveillance',
    href: '#',
    description: 'Smart surveillance refers to the use of advanced technology and analytics to monitor and secure environments.',
  },
  {
    title: 'Industrial Surveillance',
    href: '#',
    description: 'Industrial surveillance refers to the use of advanced technology and analytics to monitor and secure industrial environments.',
  },
];

const NavigationListMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/products"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">Products Overview</div>
                    <p className="text-sm leading-tight text-muted-foreground">Explore full our product and solution.</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/products/dashboard" title="Dashboard">
                Manage and visualize your data with our intuitive dashboard.
              </ListItem>
              <ListItem href="/products/ai-analytics" title="AI Analytics">
                Leverage AI to gain insights from your data and make informed decisions.
              </ListItem>
              <ListItem href="/products/smartbox" title="Samtek Smartbox">
                A smart box that integrates with your existing systems for enhanced functionality.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/supports" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Support</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b dark:border-gray-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-4 font-bold text-2xl" title="Home">
              <Image className="w-auto h-8 lg:h-10" src="/logo.svg" alt="Logo" width={100} height={40} />
              TEKNOLOGI
            </Link>
          </div>

          <div className="flex flex-row items-center gap-3 md:hidden">
            <ToggleTheme />

            <button
              type="button"
              className="inline-flex p-2 dark:text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-10">
            <NavigationListMenu />
            <ToggleTheme />
          </div>
        </nav>

        {/* xs to lg */}
        {isMobileMenuOpen && (
          <nav className="min-h-screen px-4 py-10 text-center dark:bg-black md:hidden">
            <div className="flex flex-col items-center mt-10 space-y-5">
              <Link href="/" className="text-lg font-semibold text-gray-900 dark:text-white">
                Home
              </Link>
              <Link href="/products" className="text-lg font-semibold text-gray-900 dark:text-white">
                Products
              </Link>
              <Link href="/solutions" className="text-lg font-semibold text-gray-900 dark:text-white">
                Solutions
              </Link>
              <Link href="/supports" className="text-lg font-semibold text-gray-900 dark:text-white">
                Support
              </Link>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
