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

const InputFieldStyles = css`
  width: 100%;
  height: auto;

  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.blackMedium};
  padding: 1.5rem 2rem;

  border: ${(props) => `1px solid ${props.theme.colors.blackMedium}`};
  border-top: none;
  outline: none;

  &::placeholder {
    font-size: 1.5rem;
    font-weight: 500;
    font-family: ${(props) => props.theme.fonts.primary};
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.colors.blackLight};
  }

  &:not(:placeholder-shown):invalid {
    border: ${(props) => `1px solid ${props.theme.colors.danger}`};
    border-top: none;
  }

  &:not(:placeholder-shown):valid {
    border: ${(props) => `1px solid ${props.theme.colors.success}`};
    border-top: none;
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

export { InputGroup, Label, Input, TextArea };
