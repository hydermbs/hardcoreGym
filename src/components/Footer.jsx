import siteConfig from '../config/siteConfig';

function Footer() {
  const { gymName, footer } = siteConfig;
  const { tagline, socialLinks } = footer;

  return (
    <footer className="bg-gray-950 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-white font-bold text-xl mb-1">{gymName}</p>
        <p className="mb-6">{tagline}</p>
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {gymName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
