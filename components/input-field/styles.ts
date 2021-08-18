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
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.colors.blackLight};
  }

  &:invalid {
    border: ${(props) => `1px solid ${props.theme.colors.danger}`};
    border-top: none;
  }

  &:valid {
    border: ${(props) => `1px solid ${props.theme.colors.success}`};
    border-top: none;
  }
`;

const Input = styled.input`
  ${InputFieldStyles}
`;

const TextArea = styled.textarea`
  ${InputFieldStyles}
`;

export { InputGroup, Label, Input, TextArea };
