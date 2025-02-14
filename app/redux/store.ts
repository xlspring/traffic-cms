import {configureStore} from "@reduxjs/toolkit";

import preferencesSlice from "~/redux/slices/preferencesSlice";
import logSlice from "~/redux/slices/logSlice";

export const store = configureStore({
  reducer: {
    preferences: preferencesSlice,
    logs: logSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
