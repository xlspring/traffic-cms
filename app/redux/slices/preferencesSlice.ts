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
  const token = localStorage.getItem("token");
  try {
    // if it is null or smth then the server would return an error
    // @ts-ignore
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/lights/update`, {
      method: "POST",
      headers: {"Authorization": token}
    }).then(() => console.log("Updated"));
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
