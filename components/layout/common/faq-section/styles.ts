import { motion, Variant, Variants } from "framer-motion";
import styled from "styled-components";

const FAQContainer = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  height: auto;
  padding: 0 10rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 5rem;

  ${(props) => props.theme.responsive.width1000} {
    padding: 0;
  }
`;

const FAQGroup = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  row-gap: 2rem;
`;

const FAQItem = styled(motion.div)`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

interface QuestionBarProps {
  selected: boolean;
}

const QuestionBar = styled(motion.div)<QuestionBarProps>`
  width: 100%;
  height: auto;
  padding: 2rem;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr) min-content;
  align-items: center;
  justify-items: start;
  gap: 3rem;
  border: ${(props) => `2px solid ${props.theme.colors.blackMedium}`};
  background-color: ${(props) => props.theme.colors.primaryLight};
  z-index: 1;

  & > svg {
    width: 3rem;
    height: 3rem;
    transform: ${(props) => (props.selected ? "rotate(90deg)" : "rotate(0)")};

    transition: transform 0.2s ease-in-out 0.1s;
  }
`;

const AnswerBar = styled(motion.div)`
  width: 100%;
  height: auto;
  z-index: 0;

  padding: 2rem;
`;

const answerBarMotionVariants: Variants = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  enter: {
    opacity: 1,
    y: "0%",
  },
  exit: {
    opacity: 0,
    y: "-50%",
  },
};

export {
  FAQContainer,
  FAQGroup,
  FAQItem,
  QuestionBar,
  AnswerBar,
  answerBarMotionVariants,
};
