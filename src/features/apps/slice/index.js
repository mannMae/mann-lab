import { createSlice } from '@reduxjs/toolkit';

export const HabitStacksSlice = createSlice({
  name: 'habitStacks',
  initialState: {
    todayHabits: [],
    stacks: [
      {
        date: '2024.02.03',
        habits: [
          { content: 'mannLab 업데이트 하기', status: true },
          { content: '이력서 업데이트 하기', status: false },
        ],
      },
    ],
  },
  reducers: {
    addTodayHabit(state, action) {
      state.todayHabits = [...state.todayHabits, action.payload];
    },
    updateTodayHabitStatus(state, action) {
      state.todayHabits[action.payload.index].status =
        !state.todayHabits[action.payload.index].status;
    },
    updateTodayHabitContent(state, action) {
      state.todayHabits[action.payload.index].content = action.payload.content;
    },
    deleteTodayHabit(state, action) {
      const habits = state.todayHabits.filter((a) => a);
      state.todayHabits = habits.filter((p, i) => {
        return i !== action.payload.index;
      });
    },
  },
});
