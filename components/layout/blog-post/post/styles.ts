import styled from "styled-components";

const Container = styled.section`
  grid-column: content-start / content-end;

  display: flex;
  flex-direction: column;
  gap: 10rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
`;

export { Container, TitleWrapper };
