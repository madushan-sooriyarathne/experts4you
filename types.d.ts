import { FormEvent } from "react";

declare global {
  type AlignmentType = "center" | "left" | "right" | "justify";

  interface Image {
    src: string;
    alt?: string;
    blurUrl: string;
  }

  interface Service {
    name: string;
    id: string;
    description: string;
    image: Image;
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

  interface SiteLinks {
    name: string;
    route: string;
  }

  interface SocialLinks {
    name: string;
    link: string;
    icon: string;
  }

  interface Testimonial {
    image: Image;
    description: string;
    name: string;
    company?: string;
    designation?: string;
  }

  interface Partner {
    image: Image;
    id: string;
    name: string;
  }

  interface ErrorType {
    heading: string;
    message: string;
    errorCode: number;
  }

  interface CardContentType {
    iconId: string;
    heading: string;
    description: string;
  }

  interface Cover {
    id: string;
    heading: string;
    description: string;
    image: Image;
  }

  type InputEventType =
    | FormEvent<HTMLInputElement>
    | FormEvent<HTMLTextAreaElement>;
}

export {};
