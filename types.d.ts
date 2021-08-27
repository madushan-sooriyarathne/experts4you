import { Asset, Entry, EntryCollection } from "contentful";
import { Route } from "next/dist/next-server/server/router";
import { FormEvent } from "react";

declare global {
  type AlignmentType = "center" | "left" | "right" | "justify";

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

  interface Stats {
    number: string;
    label: string;
  }

  interface HeroData {
    title: string;
    subText: string;
    route: string;
    stats: Stats[];
    image: Image;
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
    about: string[];
    image: Image;
    icon: string;
    steps: Step[];
    faqs: Faq[];
  }

  interface ContentfulServiceFields extends Service {
    image: ContentfulImageResult;
    steps: EntryCollection;
    faqs: EntryCollection;
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

  interface ContentfulCoverEntries extends Cover {
    image: ContentfulImageResult;
  }

  type ContentfulCoverResult = Entry<ContentfulCoverEntries>;

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
}

export {};
