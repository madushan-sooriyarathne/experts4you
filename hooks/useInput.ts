import { useState } from "react";

const useInput = (
  initialState: string = ""
): [string, (event: InputEventType) => void, () => void] => {
  const [value, setValue] = useState<string>(initialState);

  const updateValue = (event: InputEventType): void => {
    setValue((event.target as HTMLInputElement | HTMLTextAreaElement).value);
  };

  const resetValue = (): void => {
    setValue("");
  };

  return [value, updateValue, resetValue];
};

export { useInput };
