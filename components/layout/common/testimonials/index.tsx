import PrimaryHeading from "@components/headings/primary-heading";
import SecondaryHeading from "@components/headings/secondary-heading";
import SubHeading from "@components/headings/sub-heading";
import TertiaryHeading from "@components/headings/tertiary-heading";
import ImageComponent from "@components/image-component";
import Paragraph from "@components/paragraph";
import { clamp } from "@utils";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  MetadataGroup,
  PartnersContainer,
  PartnersGroup,
  PartnerLogo,
  TestimonialContainer,
  TestimonialDetails,
  TestimonialSlide,
  TestimonialSliderFrame,
  TestimonialSliderVariants,
  TestimonialSliderWrapper,
  TitleGroup,
} from "./styles";

interface Props {
  testimonials: Testimonial[];
  partners: Partner[];
}

const TestimonialsSection: React.FC<Props> = ({
  testimonials,
  partners,
}: Props): JSX.Element => {
  const [[curPage, direction], setData] = useState<[number, number]>([0, 1]);

  const paginate = (dir: number) => {
    Promise.resolve().then(() => {
      setData([curPage + dir, dir]);
    });
  };

  const curSlide: number = clamp(curPage, 0, testimonials.length);

  return (
    <TestimonialContainer id="testimonials">
      <TitleGroup>
        <SecondaryHeading>Don't take our word for it</SecondaryHeading>
        <PrimaryHeading>See what's our partners are telling</PrimaryHeading>
      </TitleGroup>
      <TestimonialSliderFrame>
        <svg onClick={() => paginate(-1)}>
          <use xlinkHref="/assets/svg/sprites.svg#arrow-left-slide" />
        </svg>
        <TestimonialSliderWrapper>
          <AnimatePresence custom={direction} initial={false}>
            <TestimonialSlide
              variants={TestimonialSliderVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              custom={direction}
              key={curSlide}
              transition={{
                x: { type: "spring", stiffness: 400, damping: 30 },
              }}
            >
              <ImageComponent image={testimonials[curSlide].image} />
              <TestimonialDetails>
                <Paragraph>{testimonials[curSlide].description}</Paragraph>
                <MetadataGroup>
                  <TertiaryHeading>
                    {testimonials[curSlide].name}
                  </TertiaryHeading>
                  {testimonials[curSlide].company && (
                    <Paragraph>{`${testimonials[curSlide].designation}, ${testimonials[0].company}`}</Paragraph>
                  )}
                </MetadataGroup>
              </TestimonialDetails>
            </TestimonialSlide>
          </AnimatePresence>
        </TestimonialSliderWrapper>
        <svg onClick={() => paginate(1)}>
          <use xlinkHref="/assets/svg/sprites.svg#arrow-right-slide" />
        </svg>
      </TestimonialSliderFrame>
      <PartnersContainer id="partners">
        <SecondaryHeading>We are trusted by</SecondaryHeading>
        <PartnersGroup>
          {partners.map((partner) => (
            <PartnerLogo key={partner.id}>
              <ImageComponent image={partner.image} objectFit="contain" />
            </PartnerLogo>
          ))}
        </PartnersGroup>
      </PartnersContainer>
    </TestimonialContainer>
  );
};

export default TestimonialsSection;
