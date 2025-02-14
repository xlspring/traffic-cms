import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface PreferencesData {
  token: string;
  isSidebarCollapsed: boolean;
}

const initialState: PreferencesData = {
  token: "",
  isSidebarCollapsed: false,
};

export const refreshDB = createAsyncThunk("preferences/update-db", async () => {
  try {
    //TODO implement the refresh server feature when backend is ready
    console.log("As if the db is updated");
  } catch (e) {
    console.error(e)
  }
})

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    toggleSidebar(state) {
      state.isSidebarCollapsed = !state.isSidebarCollapsed;
    }
  },
});

export const {setToken, toggleSidebar} =
  preferencesSlice.actions;
export default preferencesSlice.reducer;
