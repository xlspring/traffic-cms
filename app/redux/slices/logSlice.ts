import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface LogsData {
  date: string;
  priority: number;
  message: string;
}

const initialState: LogsData[] = [{
  "date": "1734596634000",
  "priority": 1,
  "message": "Aenean lectus."
}, {
  "date": "1723105548000",
  "priority": 0,
  "message": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc."
}, {
  "date": "1722469040000",
  "priority": 0,
  "message": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy."
}, {
  "date": "1738802621000",
  "priority": 0,
  "message": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi."
}, {
  "date": "1722674369000",
  "priority": 2,
  "message": "Aliquam non mauris. Morbi non lectus."
}, {
  "date": "1709671567000",
  "priority": 1,
  "message": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy."
}, {
  "date": "1732074908000",
  "priority": 0,
  "message": "Aliquam sit amet diam in magna bibendum imperdiet."
}, {
  "date": "1719722950000",
  "priority": 3,
  "message": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl."
}, {
  "date": "1729721354000",
  "priority": 1,
  "message": "Proin at turpis a pede posuere nonummy. Integer non velit."
}, {
  "date": "1738805445000",
  "priority": 1,
  "message": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
}];

export const tryFetchLogs = createAsyncThunk("preferences/fetch-logs", async (_, ThunkAPI) => {
  try {
    //TODO implement the fetch logs feature when backend is ready
  } catch (e) {
    console.error(e)
  }
})

export const logSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setLogs(state, action: PayloadAction<LogsData[]>) {
      state = [];
      state = [...action.payload];
    }
  },
});

export const {setLogs} =
  logSlice.actions;
export default logSlice.reducer;
