import styled from "styled-components";

const CallSection = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: min-content;
  align-items: start;
  justify-items: center;
  gap: 10rem;
`;

const InputSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 4rem;
`;

const InputGroup = styled.form`
  width: 100%;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-auto-rows: min-content;
  row-gap: 2rem;
  align-items: start;
  justify-items: start;
`;

export { CallSection, InputGroup, InputSide };
