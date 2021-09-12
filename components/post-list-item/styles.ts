import styled from "styled-components";

const BlogCard = styled.div`
  width: 100%;
  height: auto;
  min-height: 40rem;
  display: grid;
  grid-template-columns: min-content repeat(2, minmax(min-content, 1fr));
  grid-auto-rows: min-content;
  grid-template-areas: "da im de";

  align-items: start;
  justify-items: start;
  gap: 5rem;

  ${(props) => props.theme.responsive.width1100} {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
    grid-template-areas:
      "da da"
      "im de";
    gap: 1rem;
  }

  ${(props) => props.theme.responsive.width800} {
    min-height: auto;
  }

  ${(props) => props.theme.responsive.width700} {
    grid-template-columns: minmax(min-content, 1fr);
    grid-template-areas:
      "da"
      "im"
      "de";
  }
`;

const DateGroup = styled.div`
  grid-area: da;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  ${(props) => props.theme.responsive.width1100} {
    flex-direction: row;
    align-items: flex-end;
    gap: 0.5rem;

    & > * {
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: capitalize;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const Month = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.gradients.secondaryDark};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-background-fill-color: transparent;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    bottom: -0.5rem;
    left: 0;
    width: 50%;
    height: 2px;
    background: ${(props) => props.theme.gradients.secondaryDark};
  }
`;

const ImageWrapper = styled.div`
  grid-area: im;
  width: 100%;
  height: 100%;

  ${(props) => props.theme.responsive.width700} {
    height: 30rem;
  }
`;

const DetailsWrapper = styled.div`
  grid-area: de;
  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: min-content 1fr min-content;
  align-items: start;
  justify-items: start;
  gap: 5rem;

  padding: 5rem 0;

  ${(props) => props.theme.responsive.width1100} {
    padding: 5rem;
    gap: 3rem;
  }

  ${(props) => props.theme.responsive.width1000} {
    padding: 2rem;
    gap: 1rem;
  }

  ${(props) => props.theme.responsive.width800} {
    & p {
      display: none;
    }
  }

  ${(props) => props.theme.responsive.width700} {
    padding: 2rem 0;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 0.5rem;

  & a {
    text-decoration: none;
  }
`;

export { BlogCard, DateGroup, Month, ImageWrapper, DetailsWrapper, TitleGroup };
