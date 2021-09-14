import { Label, Input } from "./styles";

interface Props {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: InputEventType) => void;
}

const RadioButton: React.FC<Props> = ({
  label,
  name,
  value,
  checked,
  onChange,
}: Props): JSX.Element => {
  console.log(`Checked ${name} - ${checked}`);
  return (
    <Label htmlFor={`${name}-${value}`} checked={checked}>
      {label}
      <Input
        type="radio"
        name={name}
        id={`${name}-${value}`}
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};
export default RadioButton;
