import { Input } from './Checkbox.style';

export const Checkbox = ({ defaultChecked, onClick }) => {
  return (
    <Input type="checkbox" defaultChecked={defaultChecked} onClick={onClick} />
  );
};
