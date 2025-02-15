import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "~/redux/store.ts";

export interface LightData {
  id: number,
  lat: number,
  lon: number,
  status: boolean,
  street: string,
  votes: number,
  updated: number
}

export interface LightOptions {
  skipped: number;
  lights: LightData[];
}

const initialState: LightOptions = {
  skipped: 0,
  lights: [],
};

export const fetchSigns = createAsyncThunk("light/fetch", async (_, ThunkAPI) => {
  const state: RootState = ThunkAPI.getState();
  await fetch(`${import.meta.env.VITE_BACKEND_URL}/lights/get/${state.lights.skipped}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Failed fetching traffic lights");
    })
    .then(res => ThunkAPI.dispatch(setLights(res)))
    .catch((e) => console.log(e));
})

export const toggleSign = createAsyncThunk("light/toggleSwitch", async (id: number, ThunkAPI) => {
  const token = localStorage.getItem("token");
  await fetch(`${import.meta.env.VITE_BACKEND_URL}/lights/toggle/${id}`, {
    method: "PUT",
    headers: {"Authorization": token},
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Failed toggling traffic lights");
    })
    .then(res => ThunkAPI.dispatch(fetchSigns()))
    .catch((e) => console.log(e));
})

export const changeStreetName = createAsyncThunk("light/toggleSwitch", async (data: {
  id: number,
  name: string
}, ThunkAPI) => {
  const token = localStorage.getItem("token");
  await fetch(`${import.meta.env.VITE_BACKEND_URL}/lights/edit-street/${data.id}`, {
    method: "POST",
    headers: {"Content-Type": "application/json", "Authorization": token},
    body: JSON.stringify({name: data.name})
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Failed editing street");
    })
    .then(res => ThunkAPI.dispatch(fetchSigns()))
    .catch((e) => console.log(e));
})

export const lightSlice = createSlice({
  name: "light",
  initialState,
  reducers: {
    incrementSkipped: (state) => {
      state.skipped += 10;
    },
    decrementSkipped: (state) => {
      state.skipped -= 10;
    },
    setLights: (state, action: PayloadAction<LightData[]>) => {
      state.lights = [];
      state.lights = [...action.payload];
    }
  },
});

export const {incrementSkipped, decrementSkipped, setLights} =
  lightSlice.actions;
export default lightSlice.reducer;
