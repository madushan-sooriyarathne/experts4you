import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "./styles";

interface CommonProps {
  padding?: boolean;
  light?: boolean;
  children: ReactNode;
}

interface LinkButton extends CommonProps {
  link: string;
  isTargetBlank: boolean;
  type: "link";
}

interface RouteButton extends CommonProps {
  route: string;
  type: "route";
}

type Props = LinkButton | RouteButton;

const SecondaryButton: React.FC<Props> = ({
  light = false,
  padding = true,
  ...props
}: Props): JSX.Element => {
  return props.type === "route" ? (
    <Link href={props.route}>
      <Button light={light} padding={padding}>
        <span>{props.children}</span>
        <svg>
          <use xlinkHref="/assets/svg/sprites.svg#arrow-right"></use>
        </svg>
      </Button>
    </Link>
  ) : (
    <Button
      href={props.link}
      padding={padding}
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
