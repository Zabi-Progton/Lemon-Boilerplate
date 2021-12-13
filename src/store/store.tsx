import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import kanyeReducer from '@/features/quotes/quotesSlice';
import { loginReducer } from '@/features/login';

export const store = configureStore({
  reducer: {
    // This is where we add reducers.
    // Since we don't have any yet, leave this empty
    quotes: kanyeReducer,
    login: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
