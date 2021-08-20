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
`;

export { CTAContainer };
