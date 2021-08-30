import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.form)`
  grid-column: fo;
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(3, min-content);
  gap: 5rem;
  align-items: start;
  justify-items: start;
`;

const FormGroup = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-auto-rows: min-content;
  gap: 5rem;
  align-items: start;
  justify-items: start;
`;

const ButtonGroup = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3rem;
`;

export { Wrapper, FormGroup, ButtonGroup };
