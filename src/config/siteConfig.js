const siteConfig = {
  gymName: "IronPeak Gym",
  logo: null,
  primaryColor: "#e11d48",

  seo: {
    title: "IronPeak Gym — Train Hard. Live Strong.",
    description: "IronPeak is a modern gym offering world-class equipment, expert trainers, and flexible memberships.",
  },

  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Trainers", href: "#trainers" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Join Now",
    ctaHref: "#contact",
  },

  hero: {
    enabled: true,
    headline: "Build the Body You Deserve",
    subheadline: "State-of-the-art equipment, certified trainers, and a community that pushes you further.",
    ctaLabel: "Start Your Journey",
    ctaHref: "#contact",
    backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80",
  },

  sections: {
    services: true,
    trainers: true,
    pricing: true,
    contact: true,
  },

  services: {
    heading: "Our Services",
    subheading: "Everything you need to reach your fitness goals.",
    items: [
      {
        icon: "💪",
        title: "Strength Training",
        description: "Free weights, machines, and guided programs to build muscle and increase strength.",
      },
      {
        icon: "🏃",
        title: "Cardio Zone",
        description: "Treadmills, bikes, rowers, and HIIT classes to boost endurance and burn fat.",
      },
      {
        icon: "🧘",
        title: "Yoga & Flexibility",
        description: "Daily yoga and stretch classes for recovery, balance, and mental clarity.",
      },
      {
        icon: "🥊",
        title: "Boxing & MMA",
        description: "Bag work, sparring, and technique sessions for all skill levels.",
      },
      {
        icon: "🏊",
        title: "Swimming Pool",
        description: "Olympic-length heated pool available for lap swimming and aqua aerobics.",
      },
      {
        icon: "🍎",
        title: "Nutrition Coaching",
        description: "One-on-one consultations with certified nutritionists to fuel your performance.",
      },
    ],
  },

  trainers: {
    heading: "Meet Our Trainers",
    subheading: "Certified experts passionate about helping you succeed.",
    items: [
      {
        name: "Alex Rivera",
        specialty: "Strength & Conditioning",
        bio: "10+ years coaching athletes from beginners to competitive lifters. NSCA-CSCS certified.",
        photo: null,
        initials: "AR",
      },
      {
        name: "Jordan Lee",
        specialty: "Yoga & Mindfulness",
        bio: "RYT-500 certified yoga instructor focused on injury prevention and mind-body connection.",
        photo: null,
        initials: "JL",
      },
      {
        name: "Morgan Chen",
        specialty: "Boxing & HIIT",
        bio: "Former amateur boxer turned coach. Specialises in high-intensity functional training.",
        photo: null,
        initials: "MC",
      },
    ],
  },

  pricing: {
    heading: "Simple, Transparent Pricing",
    subheading: "No hidden fees. Cancel anytime.",
    plans: [
      {
        name: "Starter",
        price: "$29",
        period: "/ month",
        features: [
          "Gym floor access",
          "Locker room",
          "2 group classes / week",
        ],
        ctaLabel: "Get Started",
        ctaHref: "#contact",
        highlighted: false,
      },
      {
        name: "Pro",
        price: "$59",
        period: "/ month",
        features: [
          "Unlimited gym access",
          "Unlimited group classes",
          "1 PT session / month",
          "Nutrition check-in",
        ],
        ctaLabel: "Most Popular",
        ctaHref: "#contact",
        highlighted: true,
      },
      {
        name: "Elite",
        price: "$99",
        period: "/ month",
        features: [
          "Everything in Pro",
          "4 PT sessions / month",
          "Monthly body composition scan",
          "Priority class booking",
          "Guest passes (2 / month)",
        ],
        ctaLabel: "Go Elite",
        ctaHref: "#contact",
        highlighted: false,
      },
    ],
  },

  contact: {
    heading: "Get In Touch",
    subheading: "Ready to start? Drop us a message and we'll get back to you within 24 hours.",
    address: "123 Iron Street, Fitness City, FC1 2AB",
    phone: "+1 (555) 123-4567",
    email: "hello@ironpeakgym.com",
    formspreeEndpoint: null,
  },

  footer: {
    tagline: "Train Hard. Live Strong.",
    socialLinks: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
};

export default siteConfig;
