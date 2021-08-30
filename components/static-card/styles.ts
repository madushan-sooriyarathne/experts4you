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
    rgb(219, 245, 250, 1) 0%,
    rgba(219, 245, 250, 0.1) 100%
  );

  &:hover {
    & img {
      transform: rotate(-5deg) scale(1.05);
    }
  }

  ${(props) => props.theme.responsive.width600} {
    padding: 3rem;
  }
`;

const Icon = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: contain;
  transition: transform 0.2s ease-in-out;
`;

export { Card, Icon };
