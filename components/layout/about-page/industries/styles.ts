import styled from "styled-components";

const IndustriesSection = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  row-gap: 5rem;
`;

const IndustriesGroup = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  align-items: flex-start;
  justify-content: center;
`;

const IndustryBox = styled.div`
  width: calc((100% - (3 * 5rem)) / 4);
  height: auto;

  padding: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3rem;

  ${(props) => props.theme.responsive.smallDesktop} {
    padding: 2rem;
  }

  ${(props) => props.theme.responsive.width1000} {
    width: calc((100% - (2 * 5rem)) / 3);
    padding: 0;
  }

  ${(props) => props.theme.responsive.width700} {
    width: calc((100% - (1 * 5rem)) / 2);
    padding: 0;
  }

  ${(props) => props.theme.responsive.mobile} {
    width: 100%;
    padding: 0;
  }
`;

const Icon = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: contain;
`;

export { IndustriesSection, IndustriesGroup, IndustryBox, Icon };
