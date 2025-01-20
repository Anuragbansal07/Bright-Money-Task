import { configureStore } from '@reduxjs/toolkit';
import billReducer from './reducers/billReducer';
import loggerMiddleware from './middleware/loggerMiddleware';

export const store = configureStore({
  reducer: {
    bills: billReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});
