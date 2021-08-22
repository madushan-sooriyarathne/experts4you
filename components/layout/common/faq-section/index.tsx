import PrimaryHeading from "@components/headings/primary-heading";
import SubHeading from "@components/headings/sub-heading";
import Paragraph from "@components/paragraph";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import {
  FAQContainer,
  FAQGroup,
  FAQItem,
  QuestionBar,
  AnswerBar,
  answerBarMotionVariants,
} from "./styles";

interface Props {
  faqs: FAQ[];
}

const FAQSection: React.FC<Props> = ({ faqs }: Props): JSX.Element => {
  const [active, setActive] = useState<number>(-1);

  const handleOpen = (index: number) => {
    if (index === active) {
      setActive(-1);
    } else {
      setActive(index);
    }
  };

  return (
    <FAQContainer>
      <PrimaryHeading>FAQs</PrimaryHeading>
      <AnimateSharedLayout>
        <FAQGroup layout>
          {faqs.map((faq: FAQ, index: number) => (
            <FAQItem key={faq.id} layout>
              <QuestionBar
                onClick={() => handleOpen(index)}
                layout
                layoutId={`question-bar-${index}`}
                selected={index === active}
              >
                <SubHeading>{faq.question}</SubHeading>
                <svg>
                  <use xlinkHref="/assets/svg/sprites.svg#arrow-right-short" />
                </svg>
              </QuestionBar>
              <AnimatePresence>
                {index === active && (
                  <AnswerBar
                    variants={answerBarMotionVariants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    key="answer-bar"
                  >
                    <Paragraph>{faq.answer}</Paragraph>
                  </AnswerBar>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQGroup>
      </AnimateSharedLayout>
    </FAQContainer>
  );
};

export default FAQSection;
