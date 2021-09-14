import styled, { css } from "styled-components";

const InputGroup = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  row-gap: 1rem;
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.blackMedium};
`;

interface InputProps {
  error: boolean;
}

const InputFieldStyles = css<InputProps>`
  width: 100%;
  height: auto;

  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.blackMedium};
  padding: 1.5rem 2rem;
  border: none;

  border-bottom: ${(props) =>
    `2px solid ${
      props.error ? props.theme.colors.danger : props.theme.colors.blackMedium
    }`};
  outline: none;

  &::placeholder {
    font-size: 1.5rem;
    font-weight: 500;
    font-family: ${(props) => props.theme.fonts.primary};
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.colors.blackLight};
  }

  &:not(:placeholder-shown):invalid {
    border-bottom: ${(props) => `2px solid ${props.theme.colors.danger}`};
  }

  &:not(:placeholder-shown):valid {
    border-bottom: ${(props) => `2px solid ${props.theme.colors.success}`};
  }
`;

const Input = styled.input`
  ${InputFieldStyles}
`;

const TextArea = styled.textarea`
  ${InputFieldStyles}
  min-height: 15rem;
  resize: none;
`;

const ErrorText = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.danger};
`;

export { InputGroup, Label, Input, TextArea, ErrorText };
