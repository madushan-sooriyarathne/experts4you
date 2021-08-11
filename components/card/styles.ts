import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 3rem 8rem 3rem;
  position: relative;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(2, min-content) 1fr;
  row-gap: 3rem;
  align-items: start;
  justify-items: start;

  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.close};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out 0.1s;

  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(props) => props.theme.shadows.spread};

    &::after {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1rem;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.secondaryLight};
    transition: background-color 0.2s ease-in-out;
  }
`;

const Icon = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
`;

export { CardContainer, Icon };
