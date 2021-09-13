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
  {
    route: "/knowledge",
    name: "Knowledge",
  },
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

const months = [
  {
    index: 1,
    long: "January",
    short: "Jan",
  },
  {
    index: 2,
    long: "February",
    short: "Feb",
  },
  {
    index: 3,
    long: "March",
    short: "Mar",
  },
  {
    index: 4,
    long: "April",
    short: "Apr",
  },
  {
    index: 5,
    long: "May",
    short: "May",
  },
  {
    index: 6,
    long: "June",
    short: "Jun",
  },
  {
    index: 7,
    long: "July",
    short: "Jul",
  },
  {
    index: 8,
    long: "January",
    short: "Jan",
  },
  {
    index: 9,
    long: "August",
    short: "Aug",
  },
  {
    index: 10,
    long: "September",
    short: "Sept",
  },
  {
    index: 11,
    long: "November",
    short: "Nov",
  },
  {
    index: 12,
    long: "December",
    short: "Dec",
  },
];

export { navLinks, homeLinks, socialMedia, errors, months };
