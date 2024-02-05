import { Checkbox, Form, InputField } from 'components/Form';
import { Wrapper } from './Habit.style';
import { useDispatch } from 'react-redux';
import { HabitStacksSlice } from 'features/apps/slice';
import { useForm } from 'react-hook-form';
import { Button } from 'components/Elements';

export const Habit = ({ habit, index }) => {
  const dispatch = useDispatch();

  const handleClickCheckbox = () => {
    dispatch(HabitStacksSlice.actions.updateTodayHabitStatus({ index }));
  };
  const { setValue } = useForm();
  const handleSubmitNew = (values) => {
    dispatch(
      HabitStacksSlice.actions.addTodayHabit({
        content: values.new,
        done: false,
      })
    );
    setValue('new', '');
  };

  const handleChangeInput = (e) => {
    dispatch(
      HabitStacksSlice.actions.updateTodayHabitContent({
        content: e.target.value,
        index,
      })
    );
  };

  const handleClickDelete = () => {
    console.log(index);
    dispatch(
      HabitStacksSlice.actions.deleteTodayHabit({
        index,
      })
    );
  };

  if (index === undefined) {
    return (
      <Wrapper>
        <Form onSubmit={handleSubmitNew}>
          {({ register, formState }) => (
            <>
              <InputField
                registration={register('new')}
                error={formState.errors['new']}
              />
            </>
          )}
        </Form>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Checkbox defaultChecked={habit.status} onClick={handleClickCheckbox} />

      <InputField
        defaultValue={habit.content}
        textDecoration={habit.status ? 'line-through' : 'none'}
        onChange={handleChangeInput}
      />
      <Button onClick={handleClickDelete}>삭제</Button>
    </Wrapper>
  );
};
