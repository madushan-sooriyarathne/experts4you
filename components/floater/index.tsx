import { useEffect, useState } from "react";
import { Container, Icon } from "./styles";

const Floater: React.FC = (): JSX.Element => {
  const [show, toggleShow] = useState<boolean>(false);

  useEffect(() => {
    // add scroll event listener to document object;

    const handleScroll = () => {
      const yCoords: number = window.scrollY;

      if (yCoords >= 200) {
        toggleShow(true);
      } else {
        toggleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollUp = () => {
    window.scroll(0, 0);
  };

  return (
    <Container show={show} onClick={handleScrollUp}>
      <Icon>
        <use xlinkHref="/assets/svg/sprites.svg#up"></use>
      </Icon>
    </Container>
  );
};

export default Floater;
