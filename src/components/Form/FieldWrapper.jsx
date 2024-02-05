import { ErrorMessage, Label, Wrapper } from './FieldWrapper.style';

export const FieldWrapper = ({ label, children }) => {
  return (
    <Wrapper>
      <Label>
        {label} {children}
      </Label>
      <ErrorMessage></ErrorMessage>
    </Wrapper>
  );
};
