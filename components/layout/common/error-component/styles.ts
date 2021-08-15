import styled from "styled-components";

const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3rem;
`;

const ErrorCode = styled.div`
  font-size: 20rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 900;
  letter-spacing: 2px;
  color: transparent;
  -webkit-text-stroke: ${(props) => `2px ${props.theme.colors.primary}`};
  line-height: 100%;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  margin-bottom: 2rem;
`;

export { ErrorContainer, ErrorCode, TitleGroup };
