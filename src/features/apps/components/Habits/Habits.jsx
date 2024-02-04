import { Button } from 'components/Elements';
import {
  Category,
  CategoryList,
  CategoryListItem,
  CategoryName,
  Title,
  TodayHabits,
  Wrapper,
} from './Habits.style';
import { useState } from 'react';
import { PiPenBold } from 'react-icons/pi';

export const Habits = ({ list, isToday, date }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Wrapper>
      <Button
        startIcon={<PiPenBold size="20" />}
        onClick={() => setIsShowing((prev) => !prev)}
        padding="5px"
      >
        <Title>{isToday ? '오늘' : date}</Title>
      </Button>
      {isShowing && (
        <Category>
          <CategoryName>매일 할 일</CategoryName>
          <CategoryList>
            {list.map((item, i) => (
              <CategoryListItem key={i}>{item}</CategoryListItem>
            ))}
          </CategoryList>
        </Category>
      )}
    </Wrapper>
  );
};
