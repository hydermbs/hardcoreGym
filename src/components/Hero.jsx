import siteConfig from '../config/siteConfig';

function Hero() {
  const { hero, primaryColor } = siteConfig;

  if (!hero.enabled) return null;

  const backgroundStyle = hero.backgroundImage
    ? {
        backgroundImage: `url(${hero.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <section
      id="home"
      className={`relative flex items-center justify-center min-h-screen ${
        hero.backgroundImage ? '' : 'bg-gradient-to-br from-gray-900 to-gray-800'
      }`}
      style={backgroundStyle}
    >
      {hero.backgroundImage && (
        <div className="absolute inset-0 bg-black/60" />
      )}

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6">{hero.headline}</h1>
        <p className="text-xl text-gray-300 mb-10">{hero.subheadline}</p>
        <a
          href={hero.ctaHref}
          style={{ backgroundColor: primaryColor }}
          className="inline-block px-8 py-4 rounded-md text-lg font-semibold text-white hover:opacity-90 transition-opacity"
        >
          {hero.ctaLabel}
        </a>
      </div>
    </section>
  );
}

export default Hero;
