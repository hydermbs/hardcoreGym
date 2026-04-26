import { useState } from 'react';
import siteConfig from '../config/siteConfig';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { gymName, logo, primaryColor, nav } = siteConfig;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            {logo ? (
              <img src={logo} alt={gymName} className="h-32 w-auto object-contain object-left" />
            ) : (
              <span className="text-xl font-bold tracking-tight">{gymName}</span>
            )}
          </div>

          <div className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={nav.ctaHref}
              style={{ backgroundColor: primaryColor }}
              className="px-4 py-2 rounded-md text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              {nav.ctaLabel}
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 pb-4">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.ctaHref}
            style={{ backgroundColor: primaryColor }}
            className="mt-2 block text-center px-4 py-2 rounded-md text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            {nav.ctaLabel}
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
