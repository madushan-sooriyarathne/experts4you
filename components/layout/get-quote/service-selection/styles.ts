import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  grid-column: fo;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: min-content 1fr;
  row-gap: 5rem;
  align-items: start;
  justify-items: center;

  & > h2 {
    justify-self: start;
  }
`;

const ServiceOptionsGroup = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-auto-rows: min-content;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

const SelectionBox = styled.div`
  width: 100%;
  min-height: 20rem;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  background-color: ${(props) => props.theme.colors.primaryLight};
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out 0.1s;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${(props) => props.theme.shadows.spread};
  }

  &:active {
    transform: scale(1.01);
    box-shadow: ${(props) => props.theme.shadows.close};
  }
`;

const Icon = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: contain;
`;

export { Wrapper, ServiceOptionsGroup, SelectionBox, Icon };
