import { configureStore } from "@reduxjs/toolkit";
import { sideNavSlice } from "./navigation/sideNavSlice";
import { bottomNavSlice } from "./navigation/bottomNavSlice";
import { layoutSlice } from "./navigation/layoutSlice";

export const store = configureStore({
  reducer: {
    sideNavStore: sideNavSlice.reducer,
    bottomNavStore: bottomNavSlice.reducer,
    layoutStore: layoutSlice.reducer,
  },
});

export const sideNavActions = sideNavSlice.actions;
export const bottomNavActions = bottomNavSlice.actions;
export const layoutActions = layoutSlice.actions;
