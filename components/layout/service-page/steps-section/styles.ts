import styled from "styled-components";

const StepsContainer = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  row-gap: 5rem;
`;

const StepsGroup = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-auto-rows: min-content;
  gap: 5rem;
  align-items: start;
  justify-content: start;
`;

const StepBox = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(2, min-content) 1fr;
  align-items: start;
  justify-items: center;
  gap: 2rem;
  border-radius: 5px;
  padding: 5rem 3rem;
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const StepNumber = styled.p`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 900;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.blackLight};
`;

const Icon = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
`;

export { StepsContainer, StepsGroup, StepBox, StepNumber, Icon };
