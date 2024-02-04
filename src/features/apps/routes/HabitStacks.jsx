import { AppLayout } from 'components/Layout';
import { Wrapper } from './HabitStacks.style';
import { Habits } from '../components';

export const HabitStacks = () => {
  return (
    <>
      <AppLayout title="습관 쌓기">
        <Wrapper>
          <Habits isToday={true} list={todayList} />
          {stacks.map((stack, i) => (
            <Habits key={i} list={stack.list} date={stack.date} />
          ))}
          <Habits />
        </Wrapper>
      </AppLayout>
    </>
  );
};

const todayList = ['mannLab 업데이트'];

const stacks = [{ date: '2024.02.03', list: ['mannLab 업데이트'] }];
