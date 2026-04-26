import siteConfig from '../config/siteConfig';

function Services() {
  if (!siteConfig.sections.services) return null;

  const { heading, subheading, items } = siteConfig.services;

  return (
    <section id="services" className="bg-gray-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-gray-400 text-lg">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service) => (
            <div key={service.title} className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
