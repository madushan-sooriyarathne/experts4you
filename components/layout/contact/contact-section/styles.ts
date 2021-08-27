import styled from "styled-components";

const FormDataSection = styled.section`
  grid-column: full-start / full-end;

  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 20rem 10rem 10rem 10rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-auto-rows: min-content;
  gap: 10rem;
  align-items: center;
  justify-items: start;

  ${(props) => props.theme.responsive.width1000} {
    grid-template-columns: minmax(min-content, 1fr);
  }
  ${(props) => props.theme.responsive.width800} {
    padding: 20rem 5rem 10rem 5rem;
  }

  ${(props) => props.theme.responsive.width800} {
    padding: 20rem 3rem 10rem 3rem;
  }
`;

const FormSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  row-gap: 5rem;
`;

const FormGroup = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: repeat(5, min-content);
  grid-template-areas:
    "fn ln"
    "em em"
    "ph ph"
    "se se"
    "me me";
  align-items: start;
  justify-items: start;
  gap: 3rem;

  & > *:nth-child(1) {
    grid-area: fn;
  }

  & > *:nth-child(2) {
    grid-area: ln;
  }

  & > *:nth-child(3) {
    grid-area: em;
  }

  & > *:nth-child(4) {
    grid-area: ph;
  }

  & > *:nth-child(5) {
    grid-area: se;
  }

  & > *:nth-child(6) {
    grid-area: me;
  }
`;

const DetailsSection = styled.div`
  justify-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 5rem;
`;

const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
`;

const SocialMediaGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

const SocialMediaIcon = styled.svg`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: grayscale(100%);
  }

  ${(props) => props.theme.responsive.width800} {
    width: 3rem;
    height: 3rem;
  }
`;

export {
  FormDataSection,
  FormSection,
  FormGroup,
  DetailsSection,
  ItemGroup,
  SocialMediaGroup,
  SocialMediaIcon,
};
