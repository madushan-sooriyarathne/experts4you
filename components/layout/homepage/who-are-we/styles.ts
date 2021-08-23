import styled from "styled-components";

const WhoWeAreContainer = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  align-items: center;
  justify-content: flex-start;
`;

const Description = styled.div`
  width: 60%;

  ${(props) => props.theme.responsive.width1000} {
    width: 80%;
  }
`;

const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 3rem;

  padding: 3rem;

  & > svg {
    width: 5rem;
    height: 5rem;
  }
`;

export { WhoWeAreContainer, Description, BoxItem };
