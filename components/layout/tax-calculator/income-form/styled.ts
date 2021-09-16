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

  ${(props) => props.theme.responsive.width800} {
    padding: 5rem 2rem;
  }

  ${(props) => props.theme.responsive.width700} {
    grid-template-columns: minmax(min-content, 1fr);
    grid-template-areas:
      "ti"
      "fo";
  }
`;

const TitleWrapper = styled.div`
  grid-area: ti;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  ${(props) => props.theme.responsive.width600} {
    align-items: flex-start;

    & * {
      text-align: left;
    }
  }
`;

const FormWrapper = styled.form`
  grid-area: fo;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  row-gap: 3rem;
`;

const ButtonWrapper = styled.div`
  width: auto;
  height: auto;
  align-self: center;

  ${(props) => props.theme.responsive.width600} {
    align-self: flex-start;
  }
`;

export { FormContainer, TitleWrapper, FormWrapper, ButtonWrapper };
