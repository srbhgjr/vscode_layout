import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./styles.css";
import { Home } from "./pages/home";
import { Preferences } from "./pages/preferences";
import { Admin } from "./pages/admin";
import { NavigationWrapper } from "./navigation/navigationWrapper";
import SelectLayout from "./navigation/select_layout";

const default_nav_settings = {
  topbar: true,
  sidebar: true,
  innerSidebar: true,
  outerSidebar: true,
  bottomBar: true,
  topBarName: "",
};

export default function App() {
  return (
    <div>
      <SelectLayout />
      <Routes>
        <Route
          path="/"
          element={
            <NavigationWrapper
              {...{
                ...default_nav_settings,
                topBarName: "Home Page",
              }}
            >
              <Home />
            </NavigationWrapper>
          }
        />
        <Route
          path="/preferences"
          element={
            <NavigationWrapper
              {...{
                ...default_nav_settings,
                topBarName: "Personal Preferences",
                bottomBar: false,
              }}
            >
              <Preferences />
            </NavigationWrapper>
          }
        />
        <Route
          path="/admin"
          element={
            <NavigationWrapper
              {...{
                ...default_nav_settings,
                topBarName: "Admin Settings",
                topbar: false,
                bottomBar: false,
              }}
            >
              <Admin />
            </NavigationWrapper>
          }
        />
      </Routes>
    </div>
  );
}
