import { FieldWrapper } from './FieldWrapper';
import { Input } from './InputField.style';

export const InputField = ({
  defaultValue,
  textDecoration,
  registration,
  onChange,
}) => {
  return (
    <FieldWrapper>
      <Input
        defaultValue={defaultValue}
        textDecoration={textDecoration}
        onChange={onChange}
        {...registration}
      />
    </FieldWrapper>
  );
};
