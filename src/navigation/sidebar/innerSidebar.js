import React, { useState } from "react";
import "../nav.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useSelector, useDispatch } from "react-redux";
import { sideNavActions } from "../../store/store";

export const InnerSidebar = () => {
  const { sidebarOpen } = useSelector((state) => state.sideNavStore);
  const dispatch = useDispatch();

  const handleSidebarOpen = () => {
    dispatch(sideNavActions.setSidebarOpen());
  };

  const icon = sidebarOpen ? (
    <KeyboardArrowLeftIcon
      className="sidebar-icon"
      onClick={handleSidebarOpen}
    />
  ) : (
    <KeyboardArrowRightIcon
      className="sidebar-icon"
      onClick={handleSidebarOpen}
    />
  );

  return (
    <div
      className="sidebar-content"
      style={{ display: sidebarOpen ? "flex" : "none" }}
    >
      <span>sidebar</span>
    </div>
  );
};
