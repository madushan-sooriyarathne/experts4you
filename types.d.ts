import { Asset, Entry, EntryCollection } from "contentful";
import { Route } from "next/dist/next-server/server/router";
import { Dispatch, FormEvent, SetStateAction } from "react";

declare global {
  type AlignmentType = "center" | "left" | "right" | "justify";

  type DispatchFn<T> = Dispatch<SetStateAction<T>>;

  interface CardContentType {
    icon: string;
    heading: string;
    description: string;
  }

  interface ErrorType {
    heading: string;
    message: string;
    errorCode: number;
  }

  type InputEventType =
    | FormEvent<HTMLInputElement>
    | FormEvent<HTMLTextAreaElement>;

  interface SiteLinks {
    name: string;
    route: string;
  }

  interface SocialLinks {
    name: string;
    link: string;
    icon: string;
  }

  interface Stat {
    number: string;
    label: string;
  }

  // Industry
  interface Industry {
    name: string;
    id: string;
    icon: string;
  }

  interface ContentfulIndustryFields extends Industry {
    icon: Asset;
  }

  // Value
  interface Value {
    id: string;
    heading: string;
    description: string;
    icon: string;
  }

  interface ContentfulValueFields extends Value {
    icon: Asset;
  }

  // Company
  interface Company {
    name: string;
    title: string;
    tagline: string;
    about: string;
    industries: Industry[];
    values: Value[];
    stats: Stat[];
    image: Image;
  }

  interface ContentfulCompanyFields extends Company {
    industries: Entry<ContentfulIndustryFields>[];
    values: Entry<ContentfulValueFields>[];
    image: ContentfulImageResult;
  }

  // Image
  interface Image {
    src: string;
    alt?: string;
    blurUrl: string;
  }

  interface ContentfulImageFields extends Image {
    src: Asset;
  }

  type ContentfulImageResult = Entry<ContentfulImageFields>;

  // Service
  interface Service {
    name: string;
    id: string;
    description: string;
    about: string;
    image: Image;
    icon: string;
    steps: Step[];
    faqs: Faq[];
  }

  interface ContentfulServiceFields extends Service {
    icon: Asset;
    image: ContentfulImageResult;
    steps: ContentfulStepResult[];
    faqs: ContentfulFAQResult[];
  }

  type ContentfulServiceResult = Entry<ContentfulServiceFields>;

  // Testimonial
  interface Testimonial {
    image: Image;
    description: string;
    name: string;
    company?: string;
    designation?: string;
  }

  interface ContentfulTestimonialFields extends Testimonial {
    image: ContentfulImageResult;
  }

  type ContentfulTestimonialResult = Entry<ContentfulTestimonialFields>;

  // Partner
  interface Partner {
    image: Image;
    id: string;
    name: string;
  }

  interface ContentfulPartnerFields extends Partner {
    image: ContentfulImageResult;
  }

  type ContentfulPartnerResult = Entry<ContentfulPartnerFields>;

  // Cover
  interface Cover {
    id: string;
    heading: string;
    description: string;
    image: Image;
    route?: {
      name: string;
      url: string;
    };
    secondaryRoute?: {
      name: string;
      url: string;
    };
  }

  interface ContentfulCoverFields extends Cover {
    image: ContentfulImageResult;
  }

  type ContentfulCoverResult = Entry<ContentfulCoverFields>;

  // BlogPost
  interface BlogPost {
    id: string;
    title: string;
    subTitle: string;
    content: string;
    image: Image;
    date: Date;
  }

  interface ContentfulBlogPostFields extends BlogPost {
    image: ContentfulImageResult;
    date: never;
  }

  // FAQ
  interface FAQ {
    question: string;
    answer: string;
    id: string;
  }

  type ContentfulFAQResult = Entry<FAQ>;

  //Step
  interface Step {
    name: string;
    icon: string;
    description: string;
  }

  interface ContentfulStepFields extends Step {
    icon: Asset;
  }

  type ContentfulStepResult = Entry<ContentfulStepFields>;

  // EMAIL TYPES
  interface EmailObj {
    from: string;
    to: string;
    subject: string;
    html: string;
  }

  interface CallRequestType {
    name: string;
    phone: string;
    email: string;
  }

  interface IncConsultationRequestEmail {
    service: string;
    type: "inc";
    companyName: string;
    natureOfTheBusiness: string;
    noOfDirectors: string;
    name: string;
    email: string;
    phone: string;
    timeToContact?: string;
  }

  interface OtherConsultationRequestEmail {
    service: string;
    type: "other";
    companyName: string;
    natureOfBusiness: string;
    quarterlyTurnover: string;
    name: string;
    email: string;
    phone: string;
    timeToContact?: string;
  }

  type ConsultationRequestType =
    | IncConsultationRequestEmail
    | OtherConsultationRequestEmail;

  interface ContactInquiry {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message?: string;
  }

  // API Types
  type ResponseBody = {
    status: string;
    message?: string;
  };
}

export {};
