import { motion } from "framer-motion";
import styled from "styled-components";

const Content = styled.main`
  grid-area: co;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr) [content-start] repeat(
      8,
      [col-start] minmax(min-content, 18rem) [col-end]
    )
    [content-end] minmax(5rem, 1fr) [full-end];
  grid-auto-rows: min-content;
  row-gap: 15rem;
  z-index: 0;
`;

const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  grid-template-areas:
    "co"
    "fo";
  gap: 15rem;
`;

export { Content, Container };
