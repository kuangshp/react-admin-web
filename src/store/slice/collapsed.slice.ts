import { createSlice } from '@reduxjs/toolkit';

interface ICollapsedState {
  collapsed: boolean;
}

const initialState: ICollapsedState = {
  collapsed: false,
};

export const collapsedSlice = createSlice({
  name: 'collapsed',
  initialState,
  reducers: {
    toggleMenusCollapsed: (state: ICollapsedState) => {
      state.collapsed = !state.collapsed;
    },
  },
  extraReducers: {},
});
