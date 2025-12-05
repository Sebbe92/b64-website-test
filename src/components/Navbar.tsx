'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Hjem', href: '/' },
  { name: 'Om oss', href: '/om-oss' },
  { name: 'Tjenester', href: '/tjenester' },
  { name: 'Artikler', href: '/artikler' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--gray-200)]">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              b64
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[var(--gray-600)] hover:text-[var(--primary)] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <ThemeToggle />
            <Link
              href="/kontakt"
              className="rounded-full bg-[var(--primary)] px-6 py-2.5 text-sm font-medium text-white hover:bg-[var(--primary-dark)] transition-colors duration-200"
            >
              Kom i gang
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2.5 text-[var(--gray-600)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Åpne meny</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-[var(--gray-200)]">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-[var(--gray-600)] hover:text-[var(--primary)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="block w-full text-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--primary-dark)] transition-colors duration-200 mt-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kom i gang
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
