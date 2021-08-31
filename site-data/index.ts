const navLinks: SiteLinks[] = [
  {
    route: "/",
    name: "Home",
  },
  {
    route: "/about",
    name: "About",
  },
  {
    route: "/services",
    name: "Services",
  },
  // {
  //   route: "/tax-calculator",
  //   name: "Tax Calculator",
  // },
  // {
  //   route: "/knowledge",
  //   name: "Knowledge",
  // },
  {
    route: "/contact",
    name: "Contact",
  },
];

const homeLinks: SiteLinks[] = [
  {
    route: "/#who-we-are",
    name: "Who We Are",
  },
  {
    route: "/#what-we-do",
    name: "What We Do",
  },
  {
    route: "/#why-us",
    name: "Why Us",
  },

  {
    route: "/#testimonials",
    name: "Client Testimonials",
  },
  {
    route: "/#partners",
    name: "Our partners",
  },
];

const socialMedia: SocialLinks[] = [
  { link: "#", name: "Facebook", icon: "facebook" },
  { link: "#", name: "Instagram", icon: "instagram" },
  { link: "#", name: "Twitter", icon: "twitter" },
  { link: "#", name: "LinkedIn", icon: "linkedin" },
];

const errors: ErrorType[] = [
  {
    errorCode: 500,
    heading: "Shoot! We got some unexpected error",
    message: "Don't worry! You can safely go the home page",
  },
  {
    errorCode: 404,
    heading: "Sorry! We cannot find the page your are looking for",
    message: "Don't worry! You can safely go the home page",
  },
  {
    errorCode: 503,
    heading: "Sorry! We encountered an error while processing your request",
    message: "Don't worry! You can safely go the home page",
  },
];

export { navLinks, homeLinks, socialMedia, errors };
