import { AppLayout } from 'components/Layout';
import { Wrapper } from './HabitStacks.style';
import { Habits } from '../components';
import { useSelector } from 'react-redux';

export const HabitStacks = () => {
  const habitStacks = useSelector(({ habitStacks }) => habitStacks);
  return (
    <>
      <AppLayout title="습관 쌓기">
        <Wrapper>
          <Habits isToday={true} habits={habitStacks.todayHabits} />
          {habitStacks.stacks.map((stack, i) => (
            <Habits key={i} habits={stack.habits} date={stack.date} />
          ))}
        </Wrapper>
      </AppLayout>
    </>
  );
};
