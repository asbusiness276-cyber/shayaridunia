import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shayari Dunia. All rights reserved.
          </div>
          
          <nav className="flex gap-6 text-sm text-gray-600">
            <Link href="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
