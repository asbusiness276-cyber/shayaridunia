import Link from 'next/link';
import { PenTool } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <PenTool className="h-6 w-6 text-pink-600" />
              <span className="font-bold text-xl tracking-tight text-gray-900">Shayari Dunia</span>
            </Link>
            <p className="text-gray-500 mb-6 max-w-sm">
              दिल की हर बात, शायरी के साथ। Shayari Dunia is your ultimate destination for heart-touching, meaningful, and beautiful poetry across different languages.
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shayari Dunia. Made for people who feel deeply.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4 tracking-wide uppercase text-sm">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/hindi" className="text-gray-500 hover:text-pink-600 transition-colors">Hindi Shayari</Link></li>
              <li><Link href="/punjabi" className="text-gray-500 hover:text-pink-600 transition-colors">Punjabi Poetry</Link></li>
              <li><Link href="/english" className="text-gray-500 hover:text-pink-600 transition-colors">English Quotes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 tracking-wide uppercase text-sm">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-500 hover:text-pink-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-pink-600 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-500 hover:text-pink-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-pink-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
