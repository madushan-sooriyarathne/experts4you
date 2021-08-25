import styled from "styled-components";

const CTAContainer = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  height: auto;
  padding: 10rem 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 5rem;

  background-image: ${(props) => props.theme.gradients.secondaryLight};

  ${(props) => props.theme.responsive.width1000} {
    padding: 10rem;
  }

  ${(props) => props.theme.responsive.width800} {
    padding: 5rem;
  }

  ${(props) => props.theme.responsive.width600} {
    padding: 5rem 3rem;
  }
`;

export { CTAContainer };
