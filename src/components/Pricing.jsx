import siteConfig from '../config/siteConfig';

function Pricing() {
  if (!siteConfig.sections.pricing) return null;

  const { heading, subheading, plans } = siteConfig.pricing;
  const { primaryColor } = siteConfig;

  return (
    <section id="pricing" className="bg-gray-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-gray-400 text-lg">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-gray-800 rounded-xl p-8 flex flex-col"
              style={plan.highlighted ? { outline: `2px solid ${primaryColor}` } : {}}
            >
              <p className="text-lg font-semibold mb-4">{plan.name}</p>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-300 flex items-start gap-2">
                    <span>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.highlighted ? (
                <a
                  href={plan.ctaHref}
                  className="mt-auto block text-center font-semibold py-3 rounded-lg text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: primaryColor }}
                >
                  {plan.ctaLabel}
                </a>
              ) : (
                <a
                  href={plan.ctaHref}
                  className="mt-auto block text-center font-semibold py-3 rounded-lg text-white bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  {plan.ctaLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
