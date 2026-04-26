import { useState } from 'react';
import siteConfig from '../config/siteConfig';

function Contact() {
  if (!siteConfig.sections.contact) return null;

  const { heading, subheading, address, phone, email, formspreeEndpoint } = siteConfig.contact;
  const { primaryColor } = siteConfig;

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const inputStyle = (field) => ({
    borderColor: focusedField === field ? primaryColor : undefined,
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formspreeEndpoint) {
      await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setSubmitted(true);
  };

  const inputClass =
    'bg-gray-800 border border-gray-700 rounded-md px-4 py-2 w-full text-white placeholder-gray-500 focus:outline-none';

  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">{heading}</h2>
            <p className="text-gray-400 text-lg mb-8">{subheading}</p>
            <div className="space-y-4 text-gray-300">
              <p>
                <span className="font-semibold text-white">Address: </span>
                {address}
              </p>
              <p>
                <span className="font-semibold text-white">Phone: </span>
                {phone}
              </p>
              <p>
                <span className="font-semibold text-white">Email: </span>
                {email}
              </p>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClass}
                  style={inputStyle('name')}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClass}
                  style={inputStyle('email')}
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClass} resize-none h-36`}
                  style={inputStyle('message')}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: primaryColor }}
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-green-400 text-sm mt-2">
                  Thanks! We'll be in touch.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
