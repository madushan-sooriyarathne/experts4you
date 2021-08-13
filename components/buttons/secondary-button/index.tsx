import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "./styles";

interface LinkButton {
  children: ReactNode;
  link: string;
  isTargetBlank: boolean;
  light?: boolean;
  type: "link";
}

interface RouteButton {
  children: ReactNode;
  route: string;
  light?: boolean;
  type: "route";
}

type Props = LinkButton | RouteButton;

const SecondaryButton: React.FC<Props> = ({
  light = false,
  ...props
}: Props): JSX.Element => {
  return props.type === "route" ? (
    <Link href={props.route}>
      <Button light={light}>
        <span>{props.children}</span>
        <svg>
          <use xlinkHref="/assets/svg/sprites.svg#arrow-right"></use>
        </svg>
      </Button>
    </Link>
  ) : (
    <Button
      href={props.link}
      light={light}
      target={props.isTargetBlank ? "_blank" : "_self"}
    >
      <span>{props.children}</span>
      <svg>
        <use xlinkHref="/assets/svg/sprites.svg#arrow-right"></use>
      </svg>
    </Button>
  );
};

export default SecondaryButton;
