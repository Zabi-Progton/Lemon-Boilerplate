import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

export const selectCount = (state: RootState) => state.login.value;

export const countSelector = createSelector(selectCount, state => state);