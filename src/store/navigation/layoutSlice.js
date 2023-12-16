import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    defaults: {
      topbarEnabled: true,
      sidebarEnabled: true,
      bottombarEnabled: true,
      sidebarRight: false,
    },
  },
  reducers: {
    setLayout(state, action) {
      const { type } = action.payload;
      state.defaults[type] = !state.defaults[type];
    },
    setLayoutFullScreen(state) {
      state.defaults.topbarEnabled = false;
      state.defaults.sidebarEnabled = false;
      state.defaults.bottombarEnabled = false;
    },
    setLayoutFullScreenEsc(state) {
      state.defaults.topbarEnabled = true;
      state.defaults.sidebarEnabled = true;
      state.defaults.bottombarEnabled = true;
    },
    moveSidebar(state) {
      state.defaults.sidebarRight = !state.defaults.sidebarRight;
    },
  },
});
