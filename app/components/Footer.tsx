import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--pancito-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/LogoPancito.jpg"
                alt="PancitoGames Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-2xl font-bold">PancitoGames</span>
            </Link>
            <p className="text-gray-300 max-w-md">
              Creating memorable gaming experiences that educate, entertain, and celebrate the cultural richness of Latin America.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Founded in 2016 • Based in USA
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[var(--pancito-accent)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#games" className="text-gray-300 hover:text-[var(--pancito-accent)] transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[var(--pancito-accent)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[var(--pancito-accent)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-[var(--pancito-accent)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-[var(--pancito-accent)] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            {/* Social Media (preparado para futuro) */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Icons preparados para redes sociales */}
                <span className="text-gray-500 text-sm">(Coming Soon)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} PancitoGames. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}



