"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { id: 'love', name: 'Love' },
    { id: 'sad', name: 'Sad' },
    { id: 'attitude', name: 'Attitude' },
    { id: 'dosti', name: 'Dosti' },
    { id: 'morning', name: 'Good Morning' },
    { id: 'festival', name: 'Festival' },
  ];

  const languages = ['Hindi', 'Punjabi', 'English'];

  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Image src="/logo.jpg" alt="Shayari Dunia Logo" width={36} height={36} className="rounded-md" />
              <span className="font-bold text-xl tracking-tight text-gray-900">Shayari Dunia</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 sm:space-x-4">
            {languages.map((lang) => (
              <div key={lang} className="relative group">
                <Link href={`/${lang.toLowerCase()}`} className="flex items-center text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {lang} <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1" role="menu">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/${lang.toLowerCase()}/category/${cat.id}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                      >
                        {cat.name} Shayari
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link href="/about" className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {languages.map((lang) => (
              <div key={lang}>
                <Link href={`/${lang.toLowerCase()}`} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-50">
                  {lang}
                </Link>
                <div className="pl-6 space-y-1 mt-1">
                  {categories.map((cat) => (
                     <Link
                      key={cat.id}
                      href={`/${lang.toLowerCase()}/category/${cat.id}`}
                      className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-pink-600"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
