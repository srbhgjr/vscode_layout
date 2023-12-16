import { createSlice } from "@reduxjs/toolkit";

export const sideNavSlice = createSlice({
  name: "sideNav",
  initialState: {
    pageName: "Home",
    sidebarOpen: true,
  },
  reducers: {
    setPageName(state, action) {
      state.pageName = action.payload;
    },
    setSidebarOpen(state, action) {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});
