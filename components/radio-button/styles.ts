import styled from "styled-components";

interface LabelProps {
  checked: boolean;
}

const Label = styled.label<LabelProps>`
  width: auto;
  height: auto;
  padding: 1rem;

  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) =>
    props.checked ? props.theme.colors.white : props.theme.colors.primaryDark};
  border: ${(props) => `2px solid ${props.theme.colors.primaryDark}`};
  background-color: ${(props) =>
    props.checked ? props.theme.colors.primaryDark : "transparent"};
`;

const Input = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;

export { Label, Input };
