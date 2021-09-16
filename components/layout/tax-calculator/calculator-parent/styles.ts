import styled from "styled-components";
import { motion } from "framer-motion";

const CalContainer = styled(motion.section)`
  grid-column: content-start / content-end;
  margin-top: 10rem;
  position: relative;

  width: 100%;
  height: auto;
  min-height: 40rem;

  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.spread};

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(2, min-content) minmax(min-content, 1fr);
`;

interface ProgressProps {
  step: number;
}

const ProgressBar = styled(motion.div)<ProgressProps>`
  position: relative;
  width: 100%;
  height: 1rem;
  background-color: ${(props) => props.theme.colors.primaryLight};
  z-index: 0;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.primaryMedium};
    z-index: 1;
    transform: ${(props) => `scaleX(calc(100% / 4 * ${props.step}))`};
    transform-origin: left center;
    transition: transform 0.3s ease-in-out;
  }
`;

const StepCounter = styled(motion.p)`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.blackLight};
  padding: 2rem 1rem;
`;

const BackButton = styled(motion.svg)`
  position: absolute;
  top: 3rem;
  left: 3rem;

  width: 3rem;
  height: 3rem;
  fill: ${(props) => props.theme.colors.blackMedium};
  transition: fill 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    fill: ${(props) => props.theme.colors.blackLight};
  }
`;

const FormContainer = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
`;

export { CalContainer, ProgressBar, StepCounter, BackButton, FormContainer };
