import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const TestimonialContainer = styled.section`
  grid-column: content-start / content-end;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
`;

const TestimonialSliderFrame = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: min-content;
  grid-template-areas: "bl fr br";
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & > svg {
    width: 5rem;
    height: 5rem;
    fill: ${(props) => props.theme.colors.primaryMedium};
    transition: fill 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`;

const TestimonialSliderWrapper = styled.div`
  width: 100%;
  min-height: 40rem;
  height: auto;

  overflow: hidden;
  position: relative;
`;

const TestimonialSlide = styled(motion.div)`
  position: absolute;
  width: 100%;
  min-height: 100%;
  height: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.primaryLight};

  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: start;
`;

const TestimonialDetails = styled.div`
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 2rem;
  padding: 10rem;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 6rem;
    left: 6rem;
    width: 8rem;
    height: 8rem;
    opacity: 0.2;
    z-index: -1;
    background-image: url("/assets/svg/quote.svg");
    background-repeat: no-repeat;
    background-size: contain;
  }

  ${(props) => props.theme.responsive.width1500} {
    padding: 5rem;

    &::before {
      top: 3rem;
      left: 3rem;
    }
  }

  ${(props) => props.theme.responsive.width1200} {
    padding: 3rem 5rem;

    &::before {
      top: 1rem;
    }
  }
`;

const MetadataGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const PartnersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 5rem;
  margin-top: 3rem;
`;

const PartnersGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const PartnerLogo = styled.div`
  width: 30rem;
  height: 20rem;
  filter: grayscale(100%);
  transition: filter 0.2s ease-in;

  &:hover {
    filter: grayscale(0%);
  }

  ${(props) => props.theme.responsive.width1100} {
    width: 20rem;
    height: 15rem;
  }
`;

// motion variants
const TestimonialSliderVariants: Variants = {
  initial: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  enter: {
    x: "0",
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export {
  TestimonialContainer,
  TestimonialSliderFrame,
  TitleGroup,
  TestimonialSliderWrapper,
  TestimonialSlide,
  TestimonialDetails,
  MetadataGroup,
  PartnersContainer,
  PartnersGroup,
  PartnerLogo,
  TestimonialSliderVariants,
};
