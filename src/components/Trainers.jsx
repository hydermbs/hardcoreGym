import siteConfig from '../config/siteConfig';

function Trainers() {
  if (!siteConfig.sections.trainers) return null;

  const { heading, subheading, items } = siteConfig.trainers;

  return (
    <section id="trainers" className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-gray-400 text-lg">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((trainer) => (
            <div key={trainer.name} className="bg-gray-800 rounded-xl p-6 text-center">
              {trainer.photo ? (
                <img
                  src={trainer.photo}
                  alt={trainer.name}
                  className="rounded-full w-24 h-24 object-cover mx-auto mb-4"
                />
              ) : (
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white"
                  style={{ backgroundColor: siteConfig.primaryColor }}
                >
                  {trainer.initials}
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
              <p className="text-sm font-medium mb-3" style={{ color: siteConfig.primaryColor }}>
                {trainer.specialty}
              </p>
              <p className="text-gray-400 text-sm">{trainer.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;
