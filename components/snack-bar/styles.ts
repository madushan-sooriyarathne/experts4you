import styled from "styled-components";

interface BarProps {
  show: boolean;
}

const Bar = styled.div<BarProps>`
  position: fixed;
  bottom: 3rem;
  left: 50%;
  z-index: 60;
  min-height: 5rem;
  width: 50rem;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  background-color: ${(props) => props.theme.colors.white};
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 3rem;
  align-items: center;
  padding: 2rem;
  border-radius: 3px;
  box-shadow: ${(props) => props.theme.shadows.spread};
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.show ? "translate(-50%, 0)" : "translate(-50%, calc(100% + 3rem))"};
  ${(props) => props.theme.responsive.width500} {
    width: 90vw;
  }
`;

const NotificationMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
  line-height: 145%;
  color: ${(props) => props.theme.colors.black};
`;

const CloseButton = styled.svg`
  width: 3rem;
  height: 3rem;
  fill: ${(props) => props.theme.colors.blackMedium};
  transition: fill 0.3s ease-in-out 0.2s, transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    fill: ${(props) => props.theme.colors.blackLight};
    transform: rotate(90deg);
  }
`;

export { Bar, NotificationMessage, CloseButton };
