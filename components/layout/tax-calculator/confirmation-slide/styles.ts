import { motion } from "framer-motion";
import styled from "styled-components";

const SlideContainer = styled(motion.div)`
  width: 100%;
  height: auto;
  padding: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
`;

const TitleWrapper = styled.div`
  grid-area: ti;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const Icon = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
  margin: 2rem;
`;
export { SlideContainer, TitleWrapper, Icon };
