import { createSlice } from '@reduxjs/toolkit';
import { IMenusVo } from '../../vo/menus.vo';

interface MenusState {
  menusList: Array<IMenusVo>;
}

const initialState: MenusState = {
  menusList: [],
};

export const menusSlice = createSlice({
  name: 'menus',
  initialState,
  reducers: {
    clearMenus: (state: MenusState) => {
      state.menusList = [];
    },
    setMenus: (state: MenusState, action) => {
      state.menusList = action.payload;
    },
  },
  extraReducers: {},
});
