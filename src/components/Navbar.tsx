"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Grouped Categories for Mega Menu
  const categoryGroups = [
    {
      title: "Emotions",
      items: [
        { id: 'love', name: 'Love' },
        { id: 'sad', name: 'Sad' },
        { id: 'attitude', name: 'Attitude' },
        { id: 'dosti', name: 'Dosti' },
        { id: 'judai', name: 'Judai' },
        { id: 'yaad', name: 'Yaad' },
        { id: 'tareef', name: 'Tareef' }
      ]
    },
    {
      title: "Life & Nature",
      items: [
        { id: 'life', name: 'Life' },
        { id: 'motivational', name: 'Motivational' },
        { id: 'nature', name: 'Nature' },
        { id: 'bachpan', name: 'Bachpan' },
        { id: 'buddapa', name: 'Buddapa' },
        { id: 'barish', name: 'Barish' },
        { id: 'chai', name: 'Chai' }
      ]
    },
    {
      title: "Greetings & Events",
      items: [
        { id: 'morning', name: 'Good Morning' },
        { id: 'night', name: 'Good Night' },
        { id: 'festival', name: 'Festival' },
        { id: 'family', name: 'Family' },
        { id: 'desh-prem', name: 'Desh Prem' },
        { id: 'two-line', name: 'Two Line' }
      ]
    }
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
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-pink-600 transition-colors h-16">
                Collections <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-16 left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {languages.map((lang) => (
                  <Link
                    key={lang}
                    href={`/${lang.toLowerCase()}/top-50`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Top 50 {lang}
                  </Link>
                ))}
              </div>
            </div>

            {languages.map((lang) => (
              <div key={lang} className="relative group">
                <Link href={`/${lang.toLowerCase()}`} className="flex items-center text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {lang} <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                {/* Mega Menu Dropdown */}
                <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-[600px] rounded-xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 z-50">
                  <div className="grid grid-cols-3 gap-6">
                    {categoryGroups.map((group) => (
                      <div key={group.title}>
                        <h4 className="text-pink-600 font-bold mb-3 border-b border-gray-100 pb-2">{group.title}</h4>
                        <ul className="space-y-2">
                          {group.items.map((cat) => (
                            <li key={cat.id}>
                              <Link
                                href={`/${lang.toLowerCase()}/category/${cat.id}`}
                                className="text-sm text-gray-600 hover:text-pink-600 hover:underline transition-all"
                              >
                                {cat.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                    <Link href="/categories" className="text-sm font-bold text-pink-600 hover:text-pink-700 inline-flex items-center">
                      View All Categories &rarr;
                    </Link>
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
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md pb-4 pt-2 max-h-[80vh] overflow-y-auto">
          <div className="px-4 space-y-1">
            <div className="py-2 font-bold text-pink-600 border-b border-gray-100 mb-2">Collections</div>
            {languages.map((lang) => (
              <Link
                key={`mobile-col-${lang}`}
                href={`/${lang.toLowerCase()}/top-50`}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Top 50 {lang}
              </Link>
            ))}
            
            <div className="py-2 font-bold text-pink-600 border-b border-gray-100 mb-2 mt-4">Languages & Categories</div>
            {languages.map((lang) => (
              <div key={lang} className="mb-4">
                <Link href={`/${lang.toLowerCase()}`} className="block px-3 py-2 rounded-md text-base font-bold text-gray-900 bg-gray-50 border-l-4 border-pink-500">
                  {lang} Shayari
                </Link>
                <div className="pl-4 mt-2 grid grid-cols-2 gap-2">
                  {categoryGroups.flatMap(g => g.items).map((cat) => (
                     <Link
                      key={cat.id}
                      href={`/${lang.toLowerCase()}/category/${cat.id}`}
                      className="block px-2 py-1.5 text-sm font-medium text-gray-600 hover:text-pink-600 bg-gray-50/50 rounded"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="mt-6 border-t border-gray-100 pt-4 space-y-2">
              <Link href="/categories" className="block px-3 py-2 rounded-md text-base font-bold text-pink-600 bg-pink-50 hover:bg-pink-100">
                All Categories Grid
              </Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
