import { Button } from 'components/Elements';
import {
  Category,
  CategoryList,
  CategoryListItem,
  CategoryName,
  Checkbox,
  TextInput,
  Title,
  Wrapper,
} from './Habits.style';
import { useState } from 'react';
import { PiPenBold } from 'react-icons/pi';
import { IoCalendar } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { HabitStacksSlice } from 'features/apps/slice';
import { Form, InputField } from 'components/Form';
import { Habit } from './Habit';

export const Habits = ({ habits, isToday, date }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Wrapper>
      <Button
        startIcon={isToday ? <PiPenBold size="20" /> : <IoCalendar size="20" />}
        onClick={() => setIsShowing((prev) => !prev)}
        padding="5px"
      >
        <Title>{isToday ? '오늘' : date}</Title>
      </Button>
      {isToday
        ? isShowing && (
            <Category>
              <CategoryName>매일 할 일</CategoryName>
              <CategoryList listStyle={'none'}>
                {habits.map((habit, i) => (
                  <CategoryListItem key={i}>
                    <Habit index={i} habit={habit} />
                  </CategoryListItem>
                ))}
                <CategoryListItem>
                  <Habit />
                </CategoryListItem>
              </CategoryList>
            </Category>
          )
        : isShowing && (
            <Category>
              <CategoryName>매일 할 일</CategoryName>
              <CategoryList>
                {habits.map((habit, i) => (
                  <CategoryListItem key={i}>
                    <Habit index={i} habit={habit} />
                  </CategoryListItem>
                ))}
              </CategoryList>
            </Category>
          )}
    </Wrapper>
  );
};
