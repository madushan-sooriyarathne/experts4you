import styled from "styled-components";

const PrivacyPolicySection = styled.section`
  grid-column: content-start / content-end;

  padding: 20rem 10rem 0 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 8rem;

  ${(props) => props.theme.responsive.width1100} {
    padding: 20rem 5rem 0 5rem;
  }

  ${(props) => props.theme.responsive.width700} {
    padding: 20rem 0rem 0 0rem;
  }
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 2rem;

  & * {
    text-align: left;
  }
`;

const SubGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 1rem;
  margin-top: 1rem;
`;

const List = styled.ul`
  padding: 0 5rem;
  & > li {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 145%;
  }

  ${(props) => props.theme.responsive.width500} {
    padding: 0 2rem;
  }
`;

export { PrivacyPolicySection, SubSection, SubGroup, List };
