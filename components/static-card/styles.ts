import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 100%;

  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3rem;
  background-image: linear-gradient(
    325deg,
    rgba(255, 247, 243, 1) 0%,
    rgba(252, 239, 232, 0.1) 100%
  );

  &:hover {
    & svg {
      transform: rotate(-5deg) scale(1.05);
    }
  }
`;

const Icon = styled.svg`
  width: 8rem;
  height: 8rem;
  transition: transform 0.2s ease-in-out;
`;

export { Card, Icon };
