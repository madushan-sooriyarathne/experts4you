import { InputGroup, Label, Input, TextArea } from "./styles";

interface Props {
  value: string;
  onChange: (event: InputEventType) => void;
  name: string;
  placeholder: string;
  type: "text" | "tel" | "email" | "number";
  pattern?: string;
  textArea?: boolean;
  required?: boolean;
}

const InputField: React.FC<Props> = ({
  value,
  onChange,
  name,
  placeholder,
  type,
  pattern,
  textArea = false,
  required = true,
}: Props): JSX.Element => {
  const fieldId: string = name.toLowerCase().replace(" ", "-");

  return (
    <InputGroup>
      <Label htmlFor={fieldId}>{name}</Label>
      {textArea ? (
        <TextArea
          value={value}
          onChange={onChange}
          id={fieldId}
          name={name}
          placeholder={placeholder}
          required={required}
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
        ></Input>
      )}
    </InputGroup>
  );
};

export default InputField;
