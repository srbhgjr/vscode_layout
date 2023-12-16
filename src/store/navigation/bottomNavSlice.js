import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const bottomNavSlice = createSlice({
  name: "bottomNav",
  initialState: {
    dateTime: moment(new Date()).format("MMM DD, YYYY hh:mm:ss a"),
  },
  reducers: {
    setDateTime(state, action) {
      state.dateTime = action.payload;
    },
  },
});
