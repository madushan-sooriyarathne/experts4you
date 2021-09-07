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

// REMOVE THIS
const posts: BlogPost[] = [
  {
    id: "post-01",
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    subTitle:
      'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    content: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`,
    image: {
      src: "/assets/img/phone.jpg",
      blurUrl: "cddsafda dafdafd",
    },
    date: new Date(),
  },
  {
    id: "post-01",
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    subTitle:
      'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    content: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`,
    image: {
      src: "/assets/img/phone.jpg",
      blurUrl: "cddsafda dafdafd",
    },
    date: new Date(),
  },
  {
    id: "post-01",
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    subTitle:
      'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    content: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`,
    image: {
      src: "/assets/img/phone.jpg",
      blurUrl: "cddsafda dafdafd",
    },
    date: new Date(),
  },
  {
    id: "post-01",
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    subTitle:
      'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    content: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`,
    image: {
      src: "/assets/img/phone.jpg",
      blurUrl: "cddsafda dafdafd",
    },
    date: new Date(),
  },
];

export { navLinks, homeLinks, socialMedia, errors, posts };
