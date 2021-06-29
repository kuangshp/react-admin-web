import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { userSlice } from './slice/user.slice';
import { collapsedSlice } from './slice/collapsed.slice';

const persistConfig = {
  key: 'root',
  storage,
};
// 合并多个reducer
const rootReducer = combineReducers({
  user: userSlice.reducer,
  collapsed: collapsedSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
// eslint-disable-next-line
const middlewareHandler = (getDefaultMiddleware: any) => {
  const middlewareList = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  ];
  if (process.env.NODE_ENV === 'development') {
    middlewareList.push(logger);
  }
  return middlewareList;
};

export const rootStore = configureStore({
  reducer: persistedReducer,
  // 可以添加自己的中间件,比如打印日志的
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
  devTools: true,
});

export const persistor = persistStore(rootStore);
// 获取全部store数据类型
export type RootState = ReturnType<typeof rootStore.getState>;
// eslint-disable-next-line
// export default { store, persistor };
