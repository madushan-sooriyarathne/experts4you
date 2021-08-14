const services: Service[] = [
  {
    name: "Bookkeeping",
    id: "bookkeeping",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    image: {
      src: "/assets/img/bookkeeping-bg.jpg",
      alt: "Tax",
      blurUrl: "data:image/svg+xml;base64,LfKwzs%1Mwo}_N%MjF%2V[s;x^M{",
    },
    icon: "/assets/svg/bookkeeping.svg",
  },
  {
    name: "Company Incorporation",
    id: "company-incorporation",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    image: {
      src: "/assets/img/business-bg.jpg",
      alt: "Tax",
      blurUrl: "data:image/svg+xml;base64,LfKwzs%1Mwo}_N%MjF%2V[s;x^M{",
    },
    icon: "/assets/svg/incorporation.svg",
  },
  {
    name: "Tax Advisory",
    id: "tax-advisory",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    image: {
      src: "/assets/img/tax-bg.jpg",
      alt: "Tax",
      blurUrl: "data:image/svg+xml;base64,LfKwzs%1Mwo}_N%MjF%2V[s;x^M{",
    },
    icon: "/assets/svg/tax.svg",
  },
];

const heroData: HeroData = {
  title: "Let's follow your dream, Together.",
  image: {
    src: "/assets/img/fg-img.png",
    alt: "Experts 4 You",
    blurUrl: "data:image/svg+xml;base64,LfKwzs%1Mwo}_N%MjF%2V[s;x^M{",
  },
  route: "/contact",
  stats: [
    { number: "4+", label: "Years of Excellence" },
    { number: "450+", label: "Happy Clients" },

    { number: "100%", label: "Client Satisfaction" },
  ],
  subText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const navLinks: SiteLinks[] = [
  {
    route: "/about",
    name: "About",
  },
  {
    route: "/services",
    name: "Services",
  },
  {
    route: "/tax-calculator",
    name: "Tax Calculator",
  },
  {
    route: "/contact",
    name: "Contact",
  },
];

const homeLinks: SiteLinks[] = [
  {
    route: "/#why-us",
    name: "Why Us",
  },
  {
    route: "/#services",
    name: "Our Services",
  },
  {
    route: "/#testimonials",
    name: "Client Testimonials",
  },
  {
    route: "/#clients",
    name: "Our Clients",
  },
];

const socialMedia: SocialLinks[] = [
  { link: "#", name: "Facebook", icon: "facebook" },
  { link: "#", name: "Instagram", icon: "instagram" },
  { link: "#", name: "Twitter", icon: "twitter" },
  { link: "#", name: "LinkedIn", icon: "linkedin" },
];

const testimonials: Testimonial[] = [
  {
    image: {
      src: "/assets/img/client.jpeg",
      blurUrl: "data:image/svg+xml;base64,LfKwzs%1Mwo}_N%MjF%2V[s;x^M{",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Jane Doe",
    company: "Advertaro",
    designation: "CTO",
  },
];

export { services, heroData, navLinks, homeLinks, socialMedia, testimonials };
