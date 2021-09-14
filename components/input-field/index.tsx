import { InputGroup, Label, Input, TextArea, ErrorText } from "./styles";

interface Props {
  value: string;
  onChange: (event: InputEventType) => void;
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "tel" | "email" | "number";
  pattern?: string;
  textArea?: boolean;
  required?: boolean;
  error?: string;
}

const InputField: React.FC<Props> = ({
  value,
  onChange,
  name,
  label,
  placeholder,
  type,
  pattern,
  error,
  textArea = false,
  required = true,
}: Props): JSX.Element => {
  const fieldId: string = name.toLowerCase().replace(" ", "-");

  return (
    <InputGroup>
      <Label htmlFor={fieldId}>{label}</Label>
      {textArea ? (
        <TextArea
          value={value}
          onChange={onChange}
          id={fieldId}
          name={name}
          placeholder={placeholder}
          required={required}
          error={error && error?.length > 0 ? true : false}
        ></TextArea>
      ) : (
        <Input
          value={value}
          onChange={onChange}
          id={fieldId}
          name={name}
          placeholder={placeholder}
          type={type}
          required={required}
          pattern={pattern}
          error={error && error?.length > 0 ? true : false}
        ></Input>
      )}
      <ErrorText>{error}</ErrorText>
    </InputGroup>
  );
};

export default InputField;
