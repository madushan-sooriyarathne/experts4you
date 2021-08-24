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

  ${(props) => props.theme.responsive.width800} {
    align-items: flex-start;
    row-gap: 3rem;

    & h4 {
      text-align: left;
    }
  }
`;

const Description = styled.div`
  width: 60%;

  ${(props) => props.theme.responsive.width1000} {
    width: 80%;
  }

  ${(props) => props.theme.responsive.width800} {
    width: 90%;
  }
`;

const BoxGroup = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  gap: 5rem;
`;

const BoxItem = styled.div`
  width: calc((100% - 10rem) / 3);
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

  ${(props) => props.theme.responsive.width1200} {
    width: calc((100% - 5rem) / 2);
  }

  ${(props) => props.theme.responsive.width800} {
    width: 100%;
    padding: 3rem 0;
  }
`;

export { WhoWeAreContainer, Description, BoxGroup, BoxItem };
