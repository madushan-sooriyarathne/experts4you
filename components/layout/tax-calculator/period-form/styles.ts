import { motion } from "framer-motion";
import styled from "styled-components";

const FormContainer = styled(motion.div)`
  width: 100%;
  height: auto;
  padding: 5rem;

  display: grid;
  grid-template-columns: 1fr minmax(50rem, max-content) 1fr;
  grid-template-rows: min-content 1fr;
  grid-template-areas:
    "ti ti ti"
    "sl fo sr";
  align-items: start;
  justify-items: center;
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

const FormWrapper = styled.form`
  grid-area: fo;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 3rem;
`;

const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
  width: auto;
  height: auto;
  align-self: center;
`;

export {
  FormContainer,
  TitleWrapper,
  FormWrapper,
  RadioButtonWrapper,
  ButtonWrapper,
};
