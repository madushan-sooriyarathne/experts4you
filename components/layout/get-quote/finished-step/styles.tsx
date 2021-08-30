import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  grid-column: fo;
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(3, min-content);
  gap: 5rem;
  align-items: center;
  justify-items: center;
`;

const Icon = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
  margin: 2rem;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
`;

export { Wrapper, Icon, TitleGroup };
