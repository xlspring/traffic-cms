import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface StatsData {
  total: number;
  working: number;
}

const initialState: StatsData = {
  total: 1,
  working: 1,
}; // no 0 because 0 / 0 = universe tears apart

export const getStats = createAsyncThunk("stats/get", async (_, ThunkAPI) => {
  try {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/lights/facts`, {
      method: "GET"
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error("No fax!");
    }).then((res) => ThunkAPI.dispatch(setStats(res)));
  } catch (e) {
    console.error(e)
  }
})

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setStats: (state, action: PayloadAction<StatsData>) => {
      state.total = action.payload.total;
      state.working = action.payload.working;
    }
  },
});

export const {setStats} =
  preferencesSlice.actions;
export default preferencesSlice.reducer;
