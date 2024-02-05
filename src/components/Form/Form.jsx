import { useForm } from 'react-hook-form';

export const Form = ({ onSubmit, children, options }) => {
  const methods = useForm({ ...options });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};
