import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface LogsOptionsData {
  isLoaded: boolean;
  data: LogsData[];
}

export interface LogsData {
  time: number;
  priority: number;
  message: string;
}

const initialState: LogsOptionsData = {
  isLoaded: false,
  data: []
};

export const fetchLogs = createAsyncThunk("preferences/fetch-logs", async (_, ThunkAPI) => {
  const token = localStorage.getItem("token");
  await fetch(`${import.meta.env.VITE_BACKEND_URL}/logs/`, {
    method: "GET",
    headers: {"Authorization": token},
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Failed toggling traffic lights");
    })
    .then(res => ThunkAPI.dispatch(setLogs(res)))
    .catch((e) => console.log(e));
})

export const logSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setLogs(state, action: PayloadAction<LogsData[]>) {
      state.data = [];
      state.data = [...action.payload];

      state.isLoaded = true;

      console.log("sdnoa")
    }
  },
});

export const {setLogs} =
  logSlice.actions;
export default logSlice.reducer;
