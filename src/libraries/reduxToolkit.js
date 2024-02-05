import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { HabitStacksSlice } from 'features/apps/slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  habitStacks: HabitStacksSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['habitStacks'],
};

const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducers,
});
