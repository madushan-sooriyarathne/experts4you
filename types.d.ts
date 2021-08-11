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
}

export {};
