import {configureStore} from "@reduxjs/toolkit";

import preferencesSlice from "~/redux/slices/preferencesSlice";
import logSlice from "~/redux/slices/logSlice";
import lightSlice from "~/redux/slices/lightSlice.ts";
import statSlice from "~/redux/slices/statSlice.ts";

export const store = configureStore({
  reducer: {
    preferences: preferencesSlice,
    logs: logSlice,
    lights: lightSlice,
    stats: statSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;