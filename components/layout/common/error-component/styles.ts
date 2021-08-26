import styled from "styled-components";

const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3rem;

  ${(props) => props.theme.responsive.width500} {
    padding: 5rem;
  }
`;

const ErrorCode = styled.div`
  font-size: 20rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 900;
  letter-spacing: 2px;
  color: transparent;
  -webkit-text-stroke: ${(props) => `2px ${props.theme.colors.primary}`};
  line-height: 100%;

  ${(props) => props.theme.responsive.width700} {
    font-size: 15rem;
  }

  ${(props) => props.theme.responsive.width500} {
    font-size: 12rem;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  margin-bottom: 2rem;

  ${(props) => props.theme.responsive.width600} {
    row-gap: 2rem;

    & h2 {
      font-size: 2.5rem;
    }
  }
`;

export { ErrorContainer, ErrorCode, TitleGroup };
