import PrimaryHeading from "@components/headings/primary-heading";
import SecondaryHeading from "@components/headings/secondary-heading";
import SubHeading from "@components/headings/sub-heading";
import TertiaryHeading from "@components/headings/tertiary-heading";
import ImageComponent from "@components/image-component";
import Paragraph from "@components/paragraph";
import {
  MetadataGroup,
  TestimonialContainer,
  TestimonialDetails,
  TestimonialSlide,
  TestimonialSliderFrame,
  TitleGroup,
} from "./styles";

interface Props {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<Props> = ({
  testimonials,
}: Props): JSX.Element => {
  return (
    <TestimonialContainer>
      <TitleGroup>
        <SecondaryHeading>Don't take our word for it</SecondaryHeading>
        <PrimaryHeading>See what's our partners are telling</PrimaryHeading>
      </TitleGroup>
      <TestimonialSliderFrame>
        <svg>
          <use xlinkHref="/assets/svg/sprites.svg#arrow-left-slide" />
        </svg>
        <TestimonialSlide>
          <ImageComponent image={testimonials[0].image} />
          <TestimonialDetails>
            <Paragraph>{testimonials[0].description}</Paragraph>
            <MetadataGroup>
              <TertiaryHeading>{testimonials[0].name}</TertiaryHeading>
              {testimonials[0].company && (
                <Paragraph>{`${testimonials[0].designation}, ${testimonials[0].company}`}</Paragraph>
              )}
            </MetadataGroup>
          </TestimonialDetails>
        </TestimonialSlide>
        <svg>
          <use xlinkHref="/assets/svg/sprites.svg#arrow-right-slide" />
        </svg>
      </TestimonialSliderFrame>
    </TestimonialContainer>
  );
};

export default TestimonialsSection;
