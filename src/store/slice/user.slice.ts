import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { loginService } from 'src/services';
import { ILoginVo } from 'src/vo';
import { authToken } from '../../constants';
import { storage } from '../../utils';

interface UserState {
  loading: boolean;
  error: string | null;
  username: string | null;
  token: string | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  username: null,
  token: null,
};

export const login = createAsyncThunk(
  'user/login',
  async (params: { username: string; password: string }) => {
    const result = await loginService.loginApi<ILoginVo>({
      username: params.username,
      password: params.password,
    });
    return result;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.username = null;
      window.localStorage.clear();
    },
  },
  extraReducers: {
    [login.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
      state.username = null;
      state.token = null;
    },
    [login.fulfilled.type]: (state, action) => {
      const { username, token } = action.payload;
      state.loading = false;
      state.token = token;
      state.username = username;
      storage.setItem(authToken, token);
    },
    [login.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
